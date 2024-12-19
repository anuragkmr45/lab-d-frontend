import { NextResponse } from "next/server";

export async function POST() {
  try {
    const res = NextResponse.json({ message: "Logged out successfully!" });
    res.cookies.set("auth_token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 0,
    });

    return res;
  } catch (error) {
    console.error("Error during signout:", error);
    return NextResponse.json(
      { error: "An error occurred while logging out." },
      { status: 500 }
    );
  }
}
