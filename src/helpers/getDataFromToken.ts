import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken = Jwt.verify(token, process.env.TOKEN_SECRET!);

    return decodedToken;
  } catch (error: unknown) {
    let message = "Something went wrong";
    if (error instanceof Error) {
      message = error.message;
      return NextResponse.json({ error: message }, { status: 500 });
    }
  }
};
