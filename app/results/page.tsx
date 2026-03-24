import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Target,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const resultCards = [
  {
    title: "GTM Engineering Foundations",
    score: "86%",
    status: "Passed",
    note: "Strong grasp of foundational GTM concepts and workflow thinking.",
  },
  {
    title: "Systems and Workflow Design",
    score: "78%",
    status: "Passed",
    note: "Good performance with room to deepen operational understanding.",
  },
  {
    title: "Revenue Operations Assessment",
    score: "Pending",
    status: "In Review",
    note: "Your latest submission is currently being processed.",
  },
];

const insights = [
  "Track your assessment outcomes in one place",
  "Measure progress across learning milestones",
  "Use results as a signal of developing GTM capability",
];

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader showBackHome />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                <ClipboardCheck className="h-4 w-4 text-blue-600" />
                Assessment results
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Review your learning outcomes with clarity.
              </h1>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Monitor completed assessments, understand how you are
                progressing, and keep building confidence through measurable
                learning outcomes.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-2xl font-bold text-slate-900">08</p>
                <p className="mt-2 text-sm text-slate-600">
                  Assessments completed
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-2xl font-bold text-slate-900">82%</p>
                <p className="mt-2 text-sm text-slate-600">Average score</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-2xl font-bold text-slate-900">02</p>
                <p className="mt-2 text-sm text-slate-600">
                  Certificates in progress
                </p>
              </div>
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
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Results overview</h2>
                  <p className="text-sm text-slate-600">
                    A simple summary of your recent assessment performance.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {resultCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.note}
                        </p>
                      </div>

                      <div className="min-w-[120px]">
                        <div className="rounded-xl bg-white px-4 py-3 text-center shadow-sm">
                          <p className="text-lg font-bold text-slate-900">
                            {item.score}
                          </p>
                          <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                            {item.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold">Next recommended step</h2>
              <p className="mt-2 text-sm text-slate-600">
                Continue strengthening your learning profile with the next key
                action.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-500">
                      Recommended action
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">
                      Complete your next revenue operations assessment
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Keep your momentum strong by moving into the next
                      evaluation milestone in your learning path.
                    </p>
                  </div>

                  <Link
                    href="/courses"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Continue learning
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-orange-50 p-3 text-orange-500">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Performance insight</h2>
                  <p className="text-sm text-slate-600">
                    A quick view of how your learning is progressing.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {insights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Learning shortcuts</h2>
                  <p className="text-sm text-slate-600">
                    Jump quickly to important areas of your account.
                  </p>
                </div>
              </div>

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