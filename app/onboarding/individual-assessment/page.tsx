import Link from "next/link";
import SiteHeader from "@/components/site-header";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
} from "lucide-react";

const goalOptions = [
  "Improve my sales performance",
  "Become better at account management",
  "Improve negotiation and closing",
  "Strengthen communication with clients",
  "Prepare for a new sales role",
  "Grow into a leadership role",
] as const;

const focusOptions = [
  "Sales",
  "Account Management",
  "Negotiation",
  "Communication",
  "Customer Success",
  "Leadership",
] as const;

const experienceOptions = [
  "0–1 year",
  "1–3 years",
  "3–5 years",
  "5–10 years",
  "10+ years",
] as const;

const confidenceAreas = [
  "Prospecting and pipeline building",
  "Discovery and qualification",
  "Account growth and retention",
  "Negotiation and objection handling",
  "Professional communication",
  "Leadership and team collaboration",
] as const;

const outcomes = [
  {
    title: "Personalized starting point",
    description:
      "Your answers help Genim recommend where you should begin instead of sending you through a generic path.",
    icon: <Compass className="h-5 w-5" />,
  },
  {
    title: "Smarter course recommendations",
    description:
      "We use your goals, experience, and strengths to suggest the most relevant categories and first courses.",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "Better learning efficiency",
    description:
      "This reduces wasted time and helps you move faster into the areas that matter most for your growth.",
    icon: <TrendingUp className="h-5 w-5" />,
  },
];

export default function IndividualAssessmentPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
            <div className="max-w-3xl pt-4 sm:pt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
                <GraduationCap className="h-4 w-4" />
                Individual onboarding assessment
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Let’s find the right starting point for you.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Before you begin, answer a few short questions so Genim can
                understand your experience, goals, and the areas where you want
                to grow most.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-1 md:max-w-2xl">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm leading-6 text-slate-700">
                    You will not be placed into a generic beginner path if you
                    already have meaningful experience.
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm leading-6 text-slate-700">
                    Your answers help Genim recommend the most relevant category
                    focus and first courses to begin with.
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm leading-6 text-slate-700">
                    This step is quick, but it improves the quality of your
                    learning journey significantly.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {outcomes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <span className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                      {item.icon}
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <div className="flex items-start gap-3">
                  <span className="inline-flex rounded-2xl bg-orange-50 p-3 text-orange-500">
                    <Target className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                      What happens next
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                      Genim will use your answers to guide your next step
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      After you complete this assessment, the platform can
                      recommend a starting category and 2 to 3 courses that fit
                      your current level and goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
                <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 shadow-sm">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Pre-assessment
                  </div>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    Tell us about your experience and goals
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                    This helps Genim recommend where you should start, what to
                    focus on, and which courses are most relevant for you first.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-700">
                      <Sparkles className="h-3.5 w-3.5" />
                      Personalized recommendations
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 font-medium text-emerald-700">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Short and structured
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 font-medium text-orange-700">
                      <BarChart3 className="h-3.5 w-3.5" />
                      Better placement
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <form
                    action="/onboarding/individual-recommendation"
                    method="GET"
                    className="space-y-8"
                  >
                    <section className="space-y-5">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">
                          About you
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          A quick overview of your current professional context.
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="currentRole"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Current role
                        </label>
                        <div className="relative">
                          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                            <UserRound className="h-4 w-4" />
                          </span>
                          <input
                            id="currentRole"
                            name="currentRole"
                            type="text"
                            autoComplete="organization-title"
                            placeholder="e.g. Sales Executive, Account Manager, Customer Success Associate"
                            className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="industry"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Industry
                        </label>
                        <div className="relative">
                          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                            <Briefcase className="h-4 w-4" />
                          </span>
                          <input
                            id="industry"
                            name="industry"
                            type="text"
                            autoComplete="off"
                            placeholder="e.g. SaaS, Real Estate, Finance, Retail"
                            className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="experience"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Years of experience
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          defaultValue=""
                          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          required
                        >
                          <option value="" disabled>
                            Select your experience level
                          </option>
                          {experienceOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </section>

                    <section className="space-y-5">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">
                          Your goals
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          Tell us what you want to improve or achieve next.
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="primaryGoal"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Primary goal
                        </label>
                        <select
                          id="primaryGoal"
                          name="primaryGoal"
                          defaultValue=""
                          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          required
                        >
                          <option value="" disabled>
                            Select your main goal
                          </option>
                          {goalOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="focusArea"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Main focus area
                        </label>
                        <select
                          id="focusArea"
                          name="focusArea"
                          defaultValue=""
                          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          required
                        >
                          <option value="" disabled>
                            Select a category
                          </option>
                          {focusOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="goalDetails"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          What do you want to achieve?
                        </label>
                        <textarea
                          id="goalDetails"
                          name="goalDetails"
                          rows={4}
                          placeholder="Tell us what success looks like for you so we can guide you better."
                          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          required
                        />
                      </div>
                    </section>

                    <section className="space-y-5">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">
                          Current confidence
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          Select the areas where you currently feel least
                          confident.
                        </p>
                      </div>

                      <div className="grid gap-3">
                        {confidenceAreas.map((area) => (
                          <label
                            key={area}
                            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-slate-300 hover:bg-white"
                          >
                            <input
                              type="checkbox"
                              name="confidenceGaps"
                              value={area}
                              className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm leading-6 text-slate-700">
                              {area}
                            </span>
                          </label>
                        ))}
                      </div>
                    </section>

                    <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                      <div className="flex items-start gap-3">
                        <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        <p className="text-sm leading-6 text-slate-700">
                          After submission, Genim will recommend a starting
                          category and 2 to 3 courses based on your answers.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
                      >
                        Continue to recommendations
                        <ArrowRight className="h-4 w-4" />
                      </button>

                      <Link
                        href="/dashboard"
                        className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50 sm:w-auto"
                      >
                        Skip for now
                      </Link>
                    </div>
                  </form>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs leading-6 text-slate-500">
                      This assessment now routes into the recommendation flow
                      using real submitted values. The next production step is
                      persisting these responses to your database during
                      onboarding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}