import Link from "next/link";
import SiteHeader from "@/components/site-header";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  Compass,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const companySizeOptions = [
  "1–5 staff",
  "6–10 staff",
  "11–25 staff",
  "26–50 staff",
  "51–100 staff",
  "100+ staff",
] as const;

const teamExperienceOptions = [
  "Mostly beginners (0–1 year)",
  "Early-stage team (1–3 years)",
  "Mixed experience levels",
  "Mostly experienced team (3–5 years)",
  "Highly experienced team (5+ years)",
] as const;

const primaryGoalOptions = [
  "Improve overall sales performance",
  "Increase account retention and growth",
  "Improve negotiation and closing",
  "Strengthen client communication",
  "Improve onboarding for new team members",
  "Develop stronger sales leadership",
] as const;

const priorityCategoryOptions = [
  "Sales",
  "Account Management",
  "Negotiation",
  "Communication",
  "Customer Success",
  "Leadership",
] as const;

const challengeAreas = [
  "Prospecting and pipeline generation",
  "Discovery and qualification quality",
  "Closing and negotiation effectiveness",
  "Client retention and account expansion",
  "Team communication and consistency",
  "Leadership and team coaching",
] as const;

const outcomes = [
  {
    title: "Better team placement",
    description:
      "Your responses help Genim avoid forcing all staff into the same generic starting point.",
    icon: <Compass className="h-5 w-5" />,
  },
  {
    title: "Smarter rollout recommendations",
    description:
      "We can suggest the most relevant learning categories and first courses for your team.",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "Improved training efficiency",
    description:
      "This helps your organisation focus on the areas that will make the biggest difference first.",
    icon: <TrendingUp className="h-5 w-5" />,
  },
];

export default function CompanyAssessmentPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
            <div className="max-w-3xl pt-4 sm:pt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/90 px-4 py-2 text-sm font-medium text-orange-600 shadow-sm backdrop-blur">
                <Building2 className="h-4 w-4" />
                Company onboarding assessment
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Help us place your team on the right learning path.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Before your team begins, answer a few short questions so Genim
                can understand your company goals, team experience level, and
                the areas where support is needed most.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-1 md:max-w-2xl">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm leading-6 text-slate-700">
                    Your company will not be forced into a one-size-fits-all
                    path if your staff already have meaningful experience.
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm leading-6 text-slate-700">
                    Your answers help Genim recommend the right category focus
                    and first courses for team rollout.
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm leading-6 text-slate-700">
                    This reduces wasted learning time and improves rollout
                    quality from the start.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {outcomes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <span className="inline-flex rounded-2xl bg-orange-50 p-3 text-orange-500">
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
                  <span className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <Target className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                      What happens next
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                      Genim will use your answers to shape your team’s starting
                      point
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      After this assessment, the platform can recommend a
                      primary focus category and 2 to 3 starting courses for
                      your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-2xl lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
                <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 shadow-sm">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Team pre-assessment
                  </div>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    Tell us about your company and team
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                    This helps Genim recommend where your team should begin,
                    what to focus on, and which courses are most relevant for
                    rollout.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 font-medium text-orange-700">
                      <Sparkles className="h-3.5 w-3.5" />
                      Better team recommendations
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 font-medium text-emerald-700">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Structured onboarding
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-700">
                      <BarChart3 className="h-3.5 w-3.5" />
                      Smarter learning placement
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <form
                    action="/onboarding/company-recommendation"
                    method="GET"
                    className="space-y-8"
                  >
                    <section className="space-y-5">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">
                          Company overview
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          Help us understand the basic context for your team.
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="companyType"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Company type or industry
                        </label>
                        <div className="relative">
                          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                            <Briefcase className="h-4 w-4" />
                          </span>
                          <input
                            id="companyType"
                            name="companyType"
                            type="text"
                            autoComplete="organization"
                            placeholder="e.g. SaaS, Real Estate, Finance, Retail"
                            className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="teamSize"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          How many staff will use the platform?
                        </label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          defaultValue=""
                          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                          required
                        >
                          <option value="" disabled>
                            Select team size
                          </option>
                          {companySizeOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="teamExperience"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Team experience level
                        </label>
                        <select
                          id="teamExperience"
                          name="teamExperience"
                          defaultValue=""
                          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                          required
                        >
                          <option value="" disabled>
                            Select team experience level
                          </option>
                          {teamExperienceOptions.map((option) => (
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
                          Business goals
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          Tell us what your company wants to improve first.
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="primaryGoal"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Primary business goal
                        </label>
                        <select
                          id="primaryGoal"
                          name="primaryGoal"
                          defaultValue=""
                          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                          required
                        >
                          <option value="" disabled>
                            Select your main goal
                          </option>
                          {primaryGoalOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="priorityCategory"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Priority learning category
                        </label>
                        <select
                          id="priorityCategory"
                          name="priorityCategory"
                          defaultValue=""
                          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                          required
                        >
                          <option value="" disabled>
                            Select a category
                          </option>
                          {priorityCategoryOptions.map((option) => (
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
                          What do you want your team to achieve?
                        </label>
                        <textarea
                          id="goalDetails"
                          name="goalDetails"
                          rows={4}
                          placeholder="Describe the business outcome or capability improvement you want to see."
                          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                          required
                        />
                      </div>
                    </section>

                    <section className="space-y-5">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">
                          Current team challenges
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          Select the areas where your team currently needs the
                          most support.
                        </p>
                      </div>

                      <div className="grid gap-3">
                        {challengeAreas.map((area) => (
                          <label
                            key={area}
                            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-slate-300 hover:bg-white"
                          >
                            <input
                              type="checkbox"
                              name="challengeAreas"
                              value={area}
                              className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                            />
                            <span className="text-sm leading-6 text-slate-700">
                              {area}
                            </span>
                          </label>
                        ))}
                      </div>
                    </section>

                    <div className="rounded-2xl border border-orange-100 bg-orange-50/70 p-4">
                      <div className="flex items-start gap-3">
                        <Users className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                        <p className="text-sm leading-6 text-slate-700">
                          After submission, Genim will recommend a starting
                          category and 2 to 3 priority courses for your team to
                          begin with.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-400 sm:w-auto"
                      >
                        Continue to recommendations
                        <ArrowRight className="h-4 w-4" />
                      </button>

                      <Link
                        href="/company/dashboard"
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
                      persisting these responses to your database during company
                      onboarding.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <Target className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Built for smarter team rollout
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      This page is now part of the real recommendation flow and
                      is ready for persistence into company onboarding records.
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