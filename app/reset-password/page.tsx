import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight, KeyRound, LockKeyhole, ShieldCheck, AlertCircle, CheckCircle2 } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { createClient } from "@/lib/supabase/server";

function buildRedirectUrl(pathname: string, params: Record<string, string>) {
  const search = new URLSearchParams(params);
  return `${pathname}?${search.toString()}`;
}

export default async function ResetPasswordPage({
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

  async function updatePasswordAction(formData: FormData) {
    "use server";

    const password = formData.get("password")?.toString() ?? "";
    const confirmPassword = formData.get("confirmPassword")?.toString() ?? "";

    if (!password || !confirmPassword) {
      redirect(
        buildRedirectUrl("/reset-password", {
          error: "Please complete both password fields.",
        }),
      );
    }

    if (password !== confirmPassword) {
      redirect(
        buildRedirectUrl("/reset-password", {
          error: "Passwords do not match.",
        }),
      );
    }

    if (password.length < 8) {
      redirect(
        buildRedirectUrl("/reset-password", {
          error: "Password must be at least 8 characters long.",
        }),
      );
    }

    const supabase = await createClient();

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      redirect(
        buildRedirectUrl("/reset-password", {
          error: error.message,
        }),
      );
    }

    redirect(
      buildRedirectUrl("/login", {
        success: "Your password has been updated successfully. Please sign in.",
      }),
    );
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
              Secure password update
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Create a new password for your account.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Choose a strong new password to restore secure access to your
              Genim account and continue your learning or team workflow.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <KeyRound className="mt-1 h-5 w-5 text-blue-600" />
                <p className="text-slate-700">
                  Use a password that is easy for you to remember but difficult
                  for others to guess.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <LockKeyhole className="mt-1 h-5 w-5 text-orange-500" />
                <p className="text-slate-700">
                  Your new password should be at least 8 characters long.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-emerald-600" />
                <p className="text-slate-700">
                  Once updated, you can sign back in immediately with your new
                  credentials.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Reset password
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  Set your new password
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Enter your new password below to complete account recovery.
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

              <form action={updatePasswordAction} className="space-y-5">
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    New password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Enter your new password"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    minLength={8}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Confirm new password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Confirm your new password"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    minLength={8}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  Update password
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-6 text-sm text-slate-600">
                Want to return instead?{" "}
                <Link
                  href="/login"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Go to sign in
                </Link>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                Your password update is handled securely through your account
                recovery session.
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}