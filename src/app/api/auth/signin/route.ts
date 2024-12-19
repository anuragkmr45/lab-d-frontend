import { NextRequest, NextResponse } from "next/server";

const SIGnIN_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL+"signin";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!SIGnIN_URL) {
      throw new Error("SIGnIN_URL is not defined");
    }

    const response = await fetch(SIGnIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error }, { status: response.status });
    }

    const {token} = await response.json();
    
    const res = NextResponse.json({ message: "Signin successful!", status: 200, token });
    res.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, 
    });

    return res;

  } catch (error) {
    console.error("Error during signup:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
