import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Briefcase,
  ShieldCheck,
  Users,
} from "lucide-react";
import SiteHeader from "@/components/site-header";

export default function RegisterCompanyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />

        <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <Building2 className="h-4 w-4 text-orange-500" />
              Company account
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Equip your team with a smarter GTM learning environment.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Create a company account to manage team access, support learning
              across departments, and bring structure to how your organisation
              develops GTM capability.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <Users className="mt-1 h-5 w-5 text-blue-600" />
                <p className="text-slate-700">
                  Invite and manage learners across your team from one place.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="mt-1 h-5 w-5 text-orange-500" />
                <p className="text-slate-700">
                  Build workforce capability with structured GTM learning paths.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-emerald-600" />
                <p className="text-slate-700">
                  Support controlled access and a focused experience for your
                  organisation.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Create company account
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  Set up your organisation
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Create your company account to manage team onboarding,
                  learning access, and platform visibility from a central
                  workspace.
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="companyName"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Company name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Enter your company name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Contact person
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your work email"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
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
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
                >
                  Create company account
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-6 text-sm text-slate-600">
                Registering for yourself instead?{" "}
                <Link
                  href="/register/individual"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Create an individual account
                </Link>
              </div>

              <div className="mt-3 text-sm text-slate-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-orange-500 hover:text-orange-600"
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