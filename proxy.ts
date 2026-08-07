// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Enable/disable maintenance via environment variable
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "true";

// Paths that should never be rewritten (assets, APIs, etc.)
const EXCLUDED_PATHS = [
  "/_next/static", // all static assets (CSS, JS, images)
  "/_next/image", // Next.js image optimization
  "/favicon.ico",
  "/api", // If you want to keep APIs working
  "/maintenance", 
  "/og-image.png", 
  // add any other paths you want to exclude (e.g., /images)
];

export default function proxy(request: NextRequest) {
  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // 1. Skip rewriting if the path matches an excluded pattern
  const isExcluded = EXCLUDED_PATHS.some((path) => pathname.startsWith(path));
  if (isExcluded) {
    return NextResponse.next();
  }

  // 2. (Optional) Allow bypass via query parameter
  //    e.g., ?maintenance=false or ?bypass=secret
  const bypassParam = request.nextUrl.searchParams.get("maintenance");
  if (bypassParam === "false") {
    return NextResponse.next();
  }

  // 3. (Optional) Allow bypass via a cookie (e.g., for admins)
  const bypassCookie = request.cookies.get("maintenance_bypass");
  if (bypassCookie?.value === "true") {
    return NextResponse.next();
  }

  // 4. All other requests → rewrite to maintenance page
  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

// Matcher: exclude the same paths we excluded in the logic
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - api (API routes)
     * - maintenance (the maintenance page itself)
     * We also exclude the same set inside the middleware logic,
     * but having them here improves performance.
     */
    "/((?!_next/static|_next/image|favicon.ico|api|maintenance).*)",
  ],
};
