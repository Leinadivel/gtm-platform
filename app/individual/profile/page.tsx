import Link from "next/link";
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  PencilLine,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const profileStats = [
  { label: "Courses Enrolled", value: "04" },
  { label: "Assessments Completed", value: "08" },
  { label: "Certificates in Progress", value: "02" },
];

export default function IndividualProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader showBackHome />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                <UserRound className="h-4 w-4 text-blue-600" />
                Individual profile
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Your learning profile and account overview.
              </h1>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Manage your personal details, keep your profile up to date, and
                maintain a clear view of your learning identity across the
                platform.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {profileStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <UserRound className="h-10 w-10" />
                </div>

                <h2 className="mt-4 text-2xl font-bold">Daniel Levi</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Individual learner
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                  <ShieldCheck className="h-4 w-4" />
                  Profile active
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <Mail className="mt-0.5 h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium">Email address</p>
                    <p className="text-sm text-slate-600">
                      daniel@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-orange-500" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-slate-600">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <Briefcase className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="text-sm font-medium">Focus area</p>
                    <p className="text-sm text-slate-600">
                      GTM learning and capability development
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold">Quick links</h2>

              <div className="mt-5 space-y-3">
                <Link
                  href="/individual/dashboard"
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Return to dashboard
                </Link>
                <Link
                  href="/courses"
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Explore courses
                </Link>
                <Link
                  href="/results"
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  View results
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">Profile details</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Keep your account information accurate and current.
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <PencilLine className="h-4 w-4" />
                  Edit profile
                </button>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full name
                  </label>
                  <input
                    type="text"
                    value="Daniel Levi"
                    readOnly
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    value="daniel@example.com"
                    readOnly
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Location
                  </label>
                  <input
                    type="text"
                    value="Lagos, Nigeria"
                    readOnly
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Account type
                  </label>
                  <input
                    type="text"
                    value="Individual"
                    readOnly
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-600 w-fit">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Learning identity</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Your profile supports your progress across courses,
                  assessments, and future opportunity pathways.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="rounded-2xl bg-orange-50 p-3 text-orange-500 w-fit">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Progress visibility</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  As the backend is connected, this profile will reflect your
                  real progress, activity, and learning milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}