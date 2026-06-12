import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl, auth: session } = req;
  const isLoggedIn = !!session;
  const role = (session?.user as any)?.role;

  const isAdminRoute = nextUrl.pathname.startsWith("/admin");
  const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard");
  const isAuthRoute = nextUrl.pathname.startsWith("/auth");

  if (isAdminRoute) {
    if (!isLoggedIn)
      return NextResponse.redirect(new URL("/auth/login", nextUrl));
    if (!["SUPER_ADMIN", "ADMIN", "CONSULAR_OFFICER", "EDITOR"].includes(role)) {
      return NextResponse.redirect(new URL("/", nextUrl));
    }
  }

  if (isDashboardRoute) {
    if (!isLoggedIn)
      return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }

  if (isAuthRoute && isLoggedIn) {
    if (["SUPER_ADMIN", "ADMIN", "CONSULAR_OFFICER", "EDITOR"].includes(role)) {
      return NextResponse.redirect(new URL("/admin", nextUrl));
    }
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
