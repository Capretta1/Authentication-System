import { NextResponse } from "next/server";

// logout functionality
export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout succesfully",
      success: true,
    });
    // setting token to empty and expiration to right now
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error: unknown) {
    let message = "Something went wrong";
    if (error instanceof Error) {
      message = error.message;
      return NextResponse.json({ error: message }, { status: 500 });
    }
  }
}
