import Link from "next/link";
import { redirect } from "next/navigation";
import SiteHeader from "@/components/site-header";
import { createClient } from "@/lib/supabase/server";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

function buildLoginRedirectUrl(
  pathname: string,
  params: Record<string, string>,
) {
  const search = new URLSearchParams(params);
  return `${pathname}?${search.toString()}`;
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;

  const errorMessage =
    typeof resolvedSearchParams.error === "string"
      ? resolvedSearchParams.error
      : "";

  const successMessage =
    typeof resolvedSearchParams.success === "string"
      ? resolvedSearchParams.success
      : "";

  const nextPath =
    typeof resolvedSearchParams.next === "string" &&
    resolvedSearchParams.next.startsWith("/")
      ? resolvedSearchParams.next
      : "";

  async function signInAction(formData: FormData) {
    "use server";

    const email = formData.get("email")?.toString().trim().toLowerCase() ?? "";
    const password = formData.get("password")?.toString() ?? "";
    const next =
      formData.get("next")?.toString().trim() && formData.get("next")?.toString().startsWith("/")
        ? (formData.get("next")?.toString().trim() as string)
        : "";

    if (!email || !password) {
      redirect(
        buildLoginRedirectUrl("/login", {
          error: "Please enter your email address and password.",
          ...(next ? { next } : {}),
        }),
      );
    }

    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      redirect(
        buildLoginRedirectUrl("/login", {
          error: error.message,
          ...(next ? { next } : {}),
        }),
      );
    }

    const user = data.user;
    const userRole =
      typeof user?.user_metadata?.role === "string"
        ? user.user_metadata.role
        : "individual";

    if (next) {
      redirect(next);
    }

    if (userRole === "company") {
      redirect("/company/dashboard");
    }

    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />

        <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              Secure access for learners, companies, instructors, and admins
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Welcome back to your learning platform.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Sign in to continue your learning journey, manage your company
              team, or access the tools available to your role on Genim.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <p className="mt-4 font-semibold">Individuals</p>
                <p className="mt-2 text-sm text-slate-600">
                  Continue learning and track progress
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Building2 className="h-6 w-6 text-orange-500" />
                <p className="mt-4 font-semibold">Companies</p>
                <p className="mt-2 text-sm text-slate-600">
                  Manage teams and learning access
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
                <p className="mt-4 font-semibold">Platform Access</p>
                <p className="mt-2 text-sm text-slate-600">
                  Instructors and admins included
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Sign in
                </p>
                <h2 className="mt-2 text-2xl font-bold">Access your account</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Sign in to access your learning environment, manage your team,
                  or continue your progress.
                </p>
              </div>

              {errorMessage ? (
                <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    <p className="text-sm leading-6 text-red-700">
                      {errorMessage}
                    </p>
                  </div>
                </div>
              ) : null}

              {successMessage ? (
                <div className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <p className="text-sm leading-6 text-emerald-700">
                      {successMessage}
                    </p>
                  </div>
                </div>
              ) : null}

              <form action={signInAction} className="space-y-5">
                <input type="hidden" name="next" value={nextPath} />

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  Sign in
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-6 flex items-center justify-between text-sm">
                <Link
                  href="/forgot-password"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Forgot password?
                </Link>
                <Link
                  href="/register/individual?plan=trial"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Create account
                </Link>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                Access is tailored to your role, ensuring a focused experience
                across individual, company, instructor, and admin workflows.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}