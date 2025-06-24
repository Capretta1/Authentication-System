import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  //boolean operation for isPublic path
  const isPublicPath = path == "/login" || path == "/signup";
  //extracting token
  const token = request.cookies.get("token")?.value || "";

  //if the path is public and you habe the token you should not visit the login you should not be able to signup for the authenticated users
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  //if it is not you should login first
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/profile", "/login", "/signup", "/profile:id"],
};
