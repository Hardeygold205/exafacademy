import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const rawBaseUrl = process.env.NEXT_PUBLIC_LOGIN_BASE_URL || "";
    const baseUrl = rawBaseUrl.replace(/\/$/, "");
    const targetUrl = `${baseUrl}/login/token.php`;
    const service =
      process.env.NEXT_PUBLIC_MOODLE_SERVICE || "moodle_mobile_app";

    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);
    params.append("service", service);

    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const responseText = await response.text();

    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      console.error(
        "FAILED TO PARSE MOODLE RESPONSE. Raw content:",
        responseText,
      );
      return NextResponse.json(
        {
          error:
            "Moodle returned an invalid format (likely HTML/XML). Check your Base URL.",
        },
        { status: 500 },
      );
    }

    if (data.token) {

      let email: string | undefined;
      const restUrl = `${baseUrl}/webservice/rest/server.php`;

      const userParams = new URLSearchParams({
        wstoken: data.token,
        moodlewsrestformat: "json",
        wsfunction: "core_user_get_users_by_field",
        field: "id",
        "values[0]": String(data.userid ?? ""),
      });

      try {
        const userRes = await fetch(`${restUrl}?${userParams.toString()}`, {
          method: "POST",
        });
        const userData = await userRes.json();
        const users = Array.isArray(userData) ? userData : userData?.users;
        if (users?.length > 0 && users[0].email) {
          email = users[0].email;
        }
      } catch (e) {
        console.warn("Could not fetch user email:", e);
      }

      const cookieStore = await cookies();

      cookieStore.set("moodle_token", data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });

      return NextResponse.json({
        success: true,
        token: data.token,
        userid: data.userid,
        privatetoken: data.privatetoken,
        email: email ?? username,
      });
    }

    console.error("Moodle Error:", data.errorcode || data.error);
    return NextResponse.json(
      {
        error: data.error || "Invalid login credentials",
        code: data.errorcode,
      },
      { status: 401 },
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("SERVER-SIDE CRASH:", message);
    return NextResponse.json(
      { error: "Internal Server Error", details: message },
      { status: 500 },
    );
  }
}
