import Link from "next/link";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Users,
} from "lucide-react";
import SiteHeader from "@/components/site-header";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />

        <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Get started with your GTM journey.
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Whether you are learning GTM engineering or building a team,
              create your account and access a platform designed for growth,
              structure, and real outcomes.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 h-5 w-5 text-blue-600" />
                <p className="text-slate-700">
                  Learn modern go-to-market systems and workflows
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="mt-1 h-5 w-5 text-orange-500" />
                <p className="text-slate-700">
                  Manage company teams and learning access
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Users className="mt-1 h-5 w-5 text-emerald-600" />
                <p className="text-slate-700">
                  Connect learning, execution, and opportunity
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Create account
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  Choose your path
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Select how you want to use the platform.
                </p>
              </div>

              {/* OPTIONS */}
              <div className="space-y-4">
                {/* INDIVIDUAL */}
                <Link
                  href="/register/individual"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-400 hover:bg-blue-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Individual</p>
                      <p className="text-sm text-slate-600">
                        Learn GTM and track your progress
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </Link>

                {/* COMPANY */}
                <Link
                  href="/register/company"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-orange-400 hover:bg-orange-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-orange-100 p-3 text-orange-500">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Company</p>
                      <p className="text-sm text-slate-600">
                        Manage team learning and access
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </Link>
              </div>

              {/* FOOTER */}
              <div className="mt-6 text-sm text-slate-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Sign in
                </Link>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                By signing up for an account, you agree to our Privacy Policy and Terms of Service.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}