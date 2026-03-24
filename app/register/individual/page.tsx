import Link from "next/link";
import { ArrowRight, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import SiteHeader from "@/components/site-header";

export default function RegisterIndividualPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />

        <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <GraduationCap className="h-4 w-4 text-blue-600" />
              Individual account
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Start learning GTM with a platform built for real growth.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Create your individual account to access courses, track your
              progress, complete assessments, and build practical GTM capability
              with structure and clarity.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-1 h-5 w-5 text-blue-600" />
                <p className="text-slate-700">
                  Access a focused learning experience designed around GTM
                  engineering.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-emerald-600" />
                <p className="text-slate-700">
                  Build progress in a secure, structured environment.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 h-5 w-5 text-orange-500" />
                <p className="text-slate-700">
                  Move from learning to stronger visibility and opportunity.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Create individual account
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  Begin your learning journey
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Set up your account to access courses, progress tracking, and
                  a learning experience tailored to individual growth.
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

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
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Confirm password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Create individual account
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-6 text-sm text-slate-600">
                Creating an account for your team instead?{" "}
                <Link
                  href="/register/company"
                  className="font-medium text-orange-500 hover:text-orange-600"
                >
                  Register as a company
                </Link>
              </div>

              <div className="mt-3 text-sm text-slate-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}