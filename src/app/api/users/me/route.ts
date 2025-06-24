import { User } from "@/app/models/userModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/userModel";
import connectDB from "@/dbconfig/dbconfig";

connectDB();

export async function GET(request: NextRequest) {
  try {
    const userID = await getDataFromToken(request);
    const user = await User.findOne({ _id: userID }).select("-password");
    return NextResponse.json(
      { message: "USER FOUND", data: user },
      { status: 200 }
    );
  } catch (error: unknown) {
    let message = "Something went wrong";
    if (error instanceof Error) {
      message = error.message;
      return NextResponse.json({ error: message }, { status: 500 });
    }
  }
}
