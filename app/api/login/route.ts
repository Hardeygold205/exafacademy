import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const rawBaseUrl = process.env.NEXT_PUBLIC_LOGIN_BASE_URL || "";
    const baseUrl = rawBaseUrl.replace(/\/$/, "");

    const adminToken = process.env.MOODLE_WS_TOKEN;
    const service =
      process.env.NEXT_PUBLIC_MOODLE_SERVICE || "moodle_mobile_app";

    const restUrl = `${baseUrl}/webservice/rest/server.php`;

    const checkParams = new URLSearchParams({
      wstoken: adminToken ?? "",
      moodlewsrestformat: "json",
      wsfunction: "core_user_get_users_by_field",
      field: "email",
      "values[0]": username,
    });

    const checkRes = await fetch(`${restUrl}?${checkParams.toString()}`, {
      method: "POST",
    });

    const users = await checkRes.json();

    if (Array.isArray(users) && users.length > 0) {
      const user = users[0];

      if (user.confirmed === false) {
        return NextResponse.json(
          { error: "email_not_confirmed", email: user.email },
          { status: 403 },
        );
      }
    }

    const targetUrl = `${baseUrl}/login/token.php`;

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

    const data = await response.json();

    if (data.token) {
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
      });
    }

    return NextResponse.json(
      {
        error: "Invalid login credentials",
        message: "Invalid login credentials",
      },
      { status: 401 },
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);

    return NextResponse.json(
      { error: "Internal Server Error", details: message },
      { status: 500 },
    );
  }
}
