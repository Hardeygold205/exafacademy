import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_LOGIN_BASE_URL;
    const wsToken = process.env.MOODLE_WS_TOKEN_AUTH_USERKEY;

    if (!baseUrl || !wsToken) {
      return NextResponse.json(
        { error: "Server misconfiguration: missing Moodle base URL or token" },
        { status: 500 },
      );
    }

    const params = new URLSearchParams({
      wstoken: wsToken,
      wsfunction: "auth_userkey_request_login_url",
      moodlewsrestformat: "json",
      "user[email]": email.trim(),
    });

    const targetUrl = `${baseUrl}/webservice/rest/server.php?${params.toString()}`;

    const response = await fetch(targetUrl, { method: "POST" });
    const text = await response.text();

    let data: { loginurl?: string; exception?: string; message?: string };
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: "Invalid response from Moodle when requesting login URL" },
        { status: 502 },
      );
    }

    if (data.exception || !data.loginurl) {
      return NextResponse.json(
        {
          error: data.message || data.exception || "Could not get login URL",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ loginurl: data.loginurl });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json(
      { error: "Failed to get Moodle login URL", details: message },
      { status: 500 },
    );
  }
}
