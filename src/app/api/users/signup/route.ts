import connectDB from "@/dbconfig/dbconfig";
import { User } from "../../../models/userModel.js";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connectDB();

//register a new user
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    if (!username) {
      return NextResponse.json(
        { error: "Username is required" },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!password) {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      );
    }
    //check id user with email already exist
    const findUser = await User.findOne({ email });

    if (findUser) {
      return NextResponse.json(
        { error: "User with email already exists" },
        { status: 400 }
      );
    }
    //check if user with username already exist
    const findUsername = await User.findOne({ username });

    if (findUsername) {
      return NextResponse.json(
        { error: "User with username already exists" },
        { status: 400 }
      );
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create the new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    //save user in the database
    const savedUser = await newUser.save();
    console.log(savedUser);
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: unknown) {
    let message = "Something went wrong";
    if (error instanceof Error) {
      message = error.message;
      return NextResponse.json({ error: message }, { status: 500 });
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
