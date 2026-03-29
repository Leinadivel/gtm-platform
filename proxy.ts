import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL");
}

if (!supabaseAnonKey) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

const protectedRoutes = [
  "/dashboard",
  "/company",
  "/onboarding",
  "/profile",
];

const authRoutes = [
  "/login",
  "/register/individual",
  "/register/company",
];

function isProtectedPath(pathname: string) {
  return protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

function isAuthPath(pathname: string) {
  return authRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          request.cookies.set(name, value);

          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });

          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname, search } = request.nextUrl;

  if (isProtectedPath(pathname) && !user) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/login";

    const nextPath = `${pathname}${search}`;
    redirectUrl.searchParams.set("next", nextPath);

    return NextResponse.redirect(redirectUrl);
  }

  if (user && isAuthPath(pathname)) {
    const redirectUrl = request.nextUrl.clone();

    if (pathname.startsWith("/register/company")) {
      redirectUrl.pathname = "/company/dashboard";
    } else {
      redirectUrl.pathname = "/dashboard";
    }

    redirectUrl.search = "";
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Run on all app routes except:
     * - api
     * - _next/static
     * - _next/image
     * - favicon and common static assets
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};