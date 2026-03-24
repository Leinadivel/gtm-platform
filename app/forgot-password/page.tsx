import Link from "next/link";
import { ArrowRight, KeyRound, Mail, ShieldCheck } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />

        <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              Secure account recovery
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Reset your password and regain access with confidence.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Enter the email address linked to your account and we’ll send you
              a secure password reset link so you can continue your learning,
              team management, or GTM workflow.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-blue-600" />
                <p className="text-slate-700">
                  Password reset instructions are delivered to your registered
                  email address.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <KeyRound className="mt-1 h-5 w-5 text-orange-500" />
                <p className="text-slate-700">
                  The process is designed to keep your account secure while
                  restoring access quickly.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-emerald-600" />
                <p className="text-slate-700">
                  Access remains role-aware for individuals, companies,
                  instructors, and administrators.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Forgot password
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  Request a password reset
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We’ll send a secure reset link to the email associated with
                  your account.
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  Send reset link
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-6 text-sm text-slate-600">
                Remembered your password?{" "}
                <Link
                  href="/login"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Return to sign in
                </Link>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                Account recovery is designed to support secure access across all
                user roles on the platform.
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}