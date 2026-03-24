import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  LayoutDashboard,
  Trophy,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const learningCards = [
  {
    title: "My Learning Path",
    description:
      "Access your enrolled courses, continue your progress, and stay focused on your current learning journey.",
    icon: BookOpen,
    href: "/courses",
    cta: "View courses",
  },
  {
    title: "Assessments",
    description:
      "Track quizzes, review your submissions, and monitor how your knowledge is developing over time.",
    icon: CheckCircle2,
    href: "/results",
    cta: "View results",
  },
  {
    title: "Achievements",
    description:
      "Keep up with milestones, completed modules, and the progress you are making across the platform.",
    icon: Trophy,
    href: "#",
    cta: "View achievements",
  },
];

const stats = [
  { label: "Courses in Progress", value: "03" },
  { label: "Completed Assessments", value: "08" },
  { label: "Learning Streak", value: "12 Days" },
];

export default function IndividualDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader showBackHome />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                <GraduationCap className="h-4 w-4 text-blue-600" />
                Individual dashboard
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Welcome back to your learning environment.
              </h1>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Stay focused on your courses, track your progress, and keep
                building practical GTM capability through a clear and structured
                learning experience.
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
                <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <LayoutDashboard className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Your dashboard overview</h2>
                  <p className="text-sm text-slate-600">
                    A simple view of your learning activity and momentum.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {learningCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <div className="inline-flex rounded-2xl bg-white p-3 text-blue-600 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {card.description}
                      </p>

                      <Link
                        href={card.href}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
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
              <h2 className="text-2xl font-bold">Continue learning</h2>
              <p className="mt-2 text-sm text-slate-600">
                Pick up where you left off and keep your momentum going.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">
                      Current focus
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">
                      GTM Engineering Foundations
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Continue building your understanding of core GTM concepts,
                      systems, and execution principles.
                    </p>
                  </div>

                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Resume course
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-orange-50 p-3 text-orange-500">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Upcoming activity</h2>
                  <p className="text-sm text-slate-600">
                    Stay on top of your learning schedule.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold">Quiz submission</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Complete your next assessment for GTM Engineering Foundations.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold">Module completion</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Finish the current module to unlock the next learning section.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold">Account shortcuts</h2>
              <div className="mt-5 space-y-3">
                <Link
                  href="/login"
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Manage account access
                </Link>
                <Link
                  href="/results"
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Review assessment results
                </Link>
                <Link
                  href="/courses"
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Explore learning catalogue
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