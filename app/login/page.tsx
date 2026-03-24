import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, ShieldCheck } from "lucide-react";
import SiteHeader from "@/components/site-header";

export default function LoginPage() {
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
              Welcome back to your GTM platform.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Sign in to continue your learning journey, manage your company
              team, or access the tools that power your GTM execution.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <p className="mt-4 font-semibold">Individuals</p>
                <p className="mt-2 text-sm text-slate-600">
                  Learn GTM and track progress
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
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-grey-600">
                  Sign in
                </p>
                <h2 className="mt-2 text-2xl font-bold">Access your account</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Sign in to access your learning environment, manage your team, 
                  or continue your GTM workflow.
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
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  Sign in
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-6 flex items-center justify-between text-sm">
                <Link href="#" className="text-slate-600 hover:text-slate-900">
                  Forgot password?
                </Link>
                <Link href="/register" className="font-medium text-blue-600 hover:text-blue-700">
                  Create account
                </Link>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                Access is tailored to your role, ensuring a focused experience for all.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}