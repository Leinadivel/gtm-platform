import Link from "next/link";
import { redirect } from "next/navigation";
import SiteHeader from "@/components/site-header";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  Compass,
  Layers3,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

type PriorityCategory =
  | "Sales"
  | "Account Management"
  | "Negotiation"
  | "Communication"
  | "Customer Success"
  | "Leadership";

type TeamExperience =
  | "Mostly beginners (0–1 year)"
  | "Early-stage team (1–3 years)"
  | "Mixed experience levels"
  | "Mostly experienced team (3–5 years)"
  | "Highly experienced team (5+ years)";

type PrimaryGoal =
  | "Improve overall sales performance"
  | "Increase account retention and growth"
  | "Improve negotiation and closing"
  | "Strengthen client communication"
  | "Improve onboarding for new team members"
  | "Develop stronger sales leadership";

type QueryValue = string | string[] | undefined;

type RecommendationLevel = "Foundation" | "Growth" | "Advanced";

type RecommendationResult = {
  level: RecommendationLevel;
  focusArea: PriorityCategory;
  summary: string;
  why: string[];
  recommendedCourses: {
    title: string;
    category: PriorityCategory | "Communication" | "Sales";
    description: string;
  }[];
};

const validPriorityCategories = new Set<PriorityCategory>([
  "Sales",
  "Account Management",
  "Negotiation",
  "Communication",
  "Customer Success",
  "Leadership",
]);

const validTeamExperience = new Set<TeamExperience>([
  "Mostly beginners (0–1 year)",
  "Early-stage team (1–3 years)",
  "Mixed experience levels",
  "Mostly experienced team (3–5 years)",
  "Highly experienced team (5+ years)",
]);

const validPrimaryGoals = new Set<PrimaryGoal>([
  "Improve overall sales performance",
  "Increase account retention and growth",
  "Improve negotiation and closing",
  "Strengthen client communication",
  "Improve onboarding for new team members",
  "Develop stronger sales leadership",
]);

function getSingleValue(value: QueryValue): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}

function normalizePriorityCategory(value: QueryValue): PriorityCategory | null {
  const raw = getSingleValue(value);
  if (!raw || !validPriorityCategories.has(raw as PriorityCategory)) return null;
  return raw as PriorityCategory;
}

function normalizeTeamExperience(value: QueryValue): TeamExperience | null {
  const raw = getSingleValue(value);
  if (!raw || !validTeamExperience.has(raw as TeamExperience)) return null;
  return raw as TeamExperience;
}

function normalizePrimaryGoal(value: QueryValue): PrimaryGoal | null {
  const raw = getSingleValue(value);
  if (!raw || !validPrimaryGoals.has(raw as PrimaryGoal)) return null;
  return raw as PrimaryGoal;
}

function getRecommendationLevel(teamExperience: TeamExperience): RecommendationLevel {
  if (
    teamExperience === "Mostly beginners (0–1 year)" ||
    teamExperience === "Early-stage team (1–3 years)"
  ) {
    return "Foundation";
  }

  if (teamExperience === "Mixed experience levels") {
    return "Growth";
  }

  return "Advanced";
}

function getCompanyRecommendation(
  priorityCategory: PriorityCategory,
  teamExperience: TeamExperience,
  primaryGoal: PrimaryGoal,
): RecommendationResult {
  const level = getRecommendationLevel(teamExperience);

  const why = [
    `Your selected priority category is ${priorityCategory}.`,
    `Your team experience level is ${teamExperience}.`,
    `Your main business goal is "${primaryGoal}".`,
  ];

  const catalog: Record<PriorityCategory, RecommendationResult["recommendedCourses"]> = {
    Sales: [
      {
        title: "Sales Fundamentals for Modern Professionals",
        category: "Sales",
        description:
          "Build a stronger foundation in core selling principles, buyer conversations, and structured execution for the team.",
      },
      {
        title: "Prospecting and Pipeline Building",
        category: "Sales",
        description:
          "Help your team improve opportunity generation, outreach structure, and pipeline quality.",
      },
      {
        title: "Discovery and Qualification Skills",
        category: "Sales",
        description:
          "Improve qualification quality so sales conversations become more useful and conversion-ready.",
      },
    ],
    "Account Management": [
      {
        title: "Strategic Account Management",
        category: "Account Management",
        description:
          "Give your team a stronger framework for handling important accounts, protecting relationships, and creating long-term value.",
      },
      {
        title: "Client Retention and Expansion Strategy",
        category: "Account Management",
        description:
          "Improve retention and account expansion with a more structured approach across the team.",
      },
      {
        title: "Account Growth and Relationship Development",
        category: "Account Management",
        description:
          "Strengthen relationship development habits that support account stability and growth.",
      },
    ],
    Negotiation: [
      {
        title: "Negotiation for Revenue Growth",
        category: "Negotiation",
        description:
          "Help your team negotiate with more preparation, control, and clarity in revenue-critical conversations.",
      },
      {
        title: "Discovery and Qualification Skills",
        category: "Sales",
        description:
          "Support stronger pre-negotiation positioning by improving qualification quality across the pipeline.",
      },
      {
        title: "Professional Communication for Sales Teams",
        category: "Communication",
        description:
          "Strengthen clarity and influence in conversations that involve objections, negotiation, and alignment.",
      },
    ],
    Communication: [
      {
        title: "Professional Communication for Sales Teams",
        category: "Communication",
        description:
          "Improve verbal and written communication quality across outreach, meetings, internal coordination, and client interactions.",
      },
      {
        title: "Discovery and Qualification Skills",
        category: "Sales",
        description:
          "Teach the team how to lead better conversations through stronger questions and clearer communication.",
      },
      {
        title: "Account Growth and Relationship Development",
        category: "Account Management",
        description:
          "Support better communication quality in long-term customer and account relationships.",
      },
    ],
    "Customer Success": [
      {
        title: "Customer Success and Retention Excellence",
        category: "Customer Success",
        description:
          "Improve retention, post-sale value delivery, and customer continuity across the team.",
      },
      {
        title: "Client Retention and Expansion Strategy",
        category: "Account Management",
        description:
          "Strengthen how the organisation protects revenue while identifying opportunities for expansion.",
      },
      {
        title: "Professional Communication for Sales Teams",
        category: "Communication",
        description:
          "Support stronger client communication habits that improve trust, continuity, and retention.",
      },
    ],
    Leadership: [
      {
        title: "Leadership for Sales Growth",
        category: "Leadership",
        description:
          "Support managers and team leads with stronger habits around accountability, coaching, and performance direction.",
      },
      {
        title: "Professional Communication for Sales Teams",
        category: "Communication",
        description:
          "Improve communication quality for leadership alignment, team feedback, and expectation setting.",
      },
      {
        title: "Sales Performance Habits",
        category: "Sales",
        description:
          "Build a stronger execution culture through practical habits that improve team consistency and growth.",
      },
    ],
  };

  return {
    level,
    focusArea: priorityCategory,
    summary: `Based on your company assessment, Genim recommends that your team starts with ${priorityCategory} at the ${level.toLowerCase()} rollout level.`,
    why,
    recommendedCourses: catalog[priorityCategory],
  };
}

export default async function CompanyRecommendationPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: QueryValue }>;
}) {
  const resolvedSearchParams = await searchParams;

  const priorityCategory = normalizePriorityCategory(
    resolvedSearchParams.priorityCategory,
  );
  const teamExperience = normalizeTeamExperience(
    resolvedSearchParams.teamExperience,
  );
  const primaryGoal = normalizePrimaryGoal(resolvedSearchParams.primaryGoal);

  if (!priorityCategory || !teamExperience || !primaryGoal) {
    redirect("/onboarding/company-assessment");
  }

  const recommendation = getCompanyRecommendation(
    priorityCategory,
    teamExperience,
    primaryGoal,
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-orange-100/70 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="max-w-3xl pt-4 sm:pt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/90 px-4 py-2 text-sm font-medium text-orange-600 shadow-sm backdrop-blur">
                <Building2 className="h-4 w-4" />
                Team recommendation
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Here’s where Genim recommends your team should begin.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Based on your company assessment, we’ve identified the best
                starting category and first set of courses for your rollout.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-3xl border border-orange-100 bg-orange-50/70 p-5">
                  <div className="flex items-start gap-3">
                    <Compass className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Recommended starting category
                      </p>
                      <p className="mt-1 text-lg font-bold text-orange-600">
                        {recommendation.focusArea}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-5">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Recommended rollout level
                      </p>
                      <p className="mt-1 text-lg font-bold text-blue-700">
                        {recommendation.level}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Recommendation summary
                      </p>
                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        {recommendation.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="inline-flex rounded-2xl bg-orange-50 p-3 text-orange-500">
                    <Target className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                      Why this recommendation fits
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                      Your assessment points to a clear rollout direction
                    </h2>

                    <div className="mt-4 grid gap-3">
                      {recommendation.why.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          <p className="text-sm leading-6 text-slate-700">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-3xl lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
                <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 shadow-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    Recommended first courses
                  </div>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    Start team rollout with these courses
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    These are the best first courses for your team based on your
                    selected priority category, team experience level, and
                    business goal.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 font-medium text-orange-700">
                      <Layers3 className="h-3.5 w-3.5" />
                      Structured team rollout
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 font-medium text-emerald-700">
                      <Star className="h-3.5 w-3.5" />
                      Personalized selection
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-700">
                      <Users className="h-3.5 w-3.5" />
                      Best first 3 courses
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="grid gap-5">
                    {recommendation.recommendedCourses.map((course, index) => (
                      <div
                        key={course.title}
                        className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                            Option {index + 1}
                          </span>
                          <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                            {course.category}
                          </span>
                        </div>

                        <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-950">
                          {course.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {course.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/70 p-4">
                    <p className="text-sm leading-6 text-slate-700">
                      This recommendation should be stored against the company’s
                      onboarding record so the dashboard, team onboarding, and
                      learning entry points can reflect the same rollout
                      direction.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/courses"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-400 sm:w-auto"
                    >
                      View courses
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <Link
                      href="/company/dashboard"
                      className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50 sm:w-auto"
                    >
                      Go to company dashboard
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Built for smarter team rollout
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      This recommendation page is structured to support future
                      team assignments, company onboarding records, and
                      category-based rollout decisions.
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