import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Layers3,
  Target,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const courses = [
  {
    title: "GTM Engineering Foundations",
    level: "Beginner",
    duration: "6 Weeks",
    description:
      "Build a strong understanding of modern go-to-market engineering, core concepts, and practical business context.",
    icon: Target,
  },
  {
    title: "GTM Systems and Workflow Design",
    level: "Intermediate",
    duration: "8 Weeks",
    description:
      "Learn how GTM systems connect across data, operations, execution, reporting, and scalable working processes.",
    icon: Layers3,
  },
  {
    title: "Revenue Operations and Execution",
    level: "Intermediate",
    duration: "7 Weeks",
    description:
      "Understand the operational layer behind pipeline movement, team coordination, and structured GTM execution.",
    icon: BarChart3,
  },
  {
    title: "GTM Career Acceleration",
    level: "Advanced",
    duration: "4 Weeks",
    description:
      "Prepare for visibility, stronger positioning, and career opportunities by connecting learning to practical outcomes.",
    icon: Briefcase,
  },
];

const benefits = [
  "Structured learning paths designed around real GTM capability",
  "Progress tracking, assessments, and outcome-focused development",
  "Built to support both individual growth and long-term opportunity",
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <BadgeCheck className="h-4 w-4 text-blue-600" />
              GeniusNimble learning catalogue
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Courses designed to build practical GTM capability.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore structured learning experiences built for individuals who
              want to understand go-to-market systems, strengthen execution
              thinking, and grow into meaningful opportunities.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register/individual"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/geniusnimble"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Back to GeniusNimble
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {course.level}
                    </span>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                      {course.duration}
                    </span>
                  </div>
                </div>

                <h2 className="mt-6 text-2xl font-bold">{course.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {course.description}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <Link
                    href="/register/individual"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Enrol now
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <span className="text-sm text-slate-500">
                    Structured learning path
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why these courses
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A learning experience built around clarity, structure, and growth.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Every course is positioned to help learners move beyond theory and
              into a stronger understanding of how modern GTM functions in real
              business environments.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[32px] bg-gradient-to-r from-blue-600 to-orange-500 p-8 text-white sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Ready to begin
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Start with the right course and build toward real GTM confidence.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/90">
              Join GeniusNimble to access structured learning, practical
              progress, and a stronger path toward modern GTM work.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register/individual"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Create Individual Account
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}