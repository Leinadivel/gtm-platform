import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  ShieldCheck,
  Users,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const overviewCards = [
  {
    title: "Team Learning",
    description:
      "Track how your team is engaging with learning paths, courses, and progress across the platform.",
    icon: BookOpen,
    href: "/courses",
    cta: "View learning catalogue",
  },
  {
    title: "Team Management",
    description:
      "Manage access, oversee participation, and support learning across your organisation from one workspace.",
    icon: Users,
    href: "#",
    cta: "Manage team",
  },
  {
    title: "Reports & Insights",
    description:
      "Review progress signals, completion activity, and learning visibility across your company environment.",
    icon: BarChart3,
    href: "#",
    cta: "View insights",
  },
];

const stats = [
  { label: "Active Team Members", value: "24" },
  { label: "Courses Assigned", value: "06" },
  { label: "Completion Rate", value: "78%" },
];

export default function CompanyDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader showBackHome />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                <Building2 className="h-4 w-4 text-orange-500" />
                Company dashboard
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Welcome to your company learning workspace.
              </h1>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Manage team access, monitor learning engagement, and support the
                development of stronger GTM capability across your organisation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
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
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-orange-50 p-3 text-orange-500">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Company overview</h2>
                  <p className="text-sm text-slate-600">
                    A central place to manage learning activity across your
                    organisation.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {overviewCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <div className="inline-flex rounded-2xl bg-white p-3 text-orange-500 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {card.description}
                      </p>

                      <Link
                        href={card.href}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600"
                      >
                        {card.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold">Current company focus</h2>
              <p className="mt-2 text-sm text-slate-600">
                Keep the team aligned with the current learning and capability
                priorities.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-500">
                      Active priority
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">
                      GTM Engineering Foundations for Team Enablement
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Equip team members with a shared understanding of modern
                      GTM concepts, systems, and execution principles.
                    </p>
                  </div>

                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Review learning paths
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Team activity</h2>
                  <p className="text-sm text-slate-600">
                    Recent signals from your organisation’s learning environment.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold">New enrolments</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Team members have been added to the current learning path.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold">Assessment progress</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Review how your team is progressing through assigned
                    assessments and learning milestones.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Workspace shortcuts</h2>
                  <p className="text-sm text-slate-600">
                    Quick access to important company actions.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <Link
                  href="/register/company"
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Update company setup
                </Link>
                <Link
                  href="/courses"
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Explore available courses
                </Link>
                <Link
                  href="/login"
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Manage account access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}