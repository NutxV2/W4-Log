import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const publicPaths = [
  "/",            // home
  "/login",
  "/register",
]

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isLogin = req.cookies.get("token")?.value

  const isPublic = publicPaths.some(
    p => pathname === p || pathname.startsWith(p + "/")
  )

  if (!isLogin && !isPublic) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  if (isLogin && (pathname === "/login" || pathname === "/register")) {
  }
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
}
