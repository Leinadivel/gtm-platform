import Link from "next/link";
import { redirect } from "next/navigation";
import SiteHeader from "@/components/site-header";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers3,
  Sparkles,
  Star,
  Target,
  TrendingUp,
} from "lucide-react";

type FocusArea =
  | "Sales"
  | "Account Management"
  | "Negotiation"
  | "Communication"
  | "Customer Success"
  | "Leadership";

type ExperienceLevel =
  | "0–1 year"
  | "1–3 years"
  | "3–5 years"
  | "5–10 years"
  | "10+ years";

type GoalOption =
  | "Improve my sales performance"
  | "Become better at account management"
  | "Improve negotiation and closing"
  | "Strengthen communication with clients"
  | "Prepare for a new sales role"
  | "Grow into a leadership role";

type QueryValue = string | string[] | undefined;

type RecommendationResult = {
  level: "Beginner" | "Intermediate" | "Advanced";
  focusArea: FocusArea;
  summary: string;
  why: string[];
  recommendedCourses: {
    title: string;
    category: FocusArea;
    description: string;
  }[];
};

const validFocusAreas = new Set<FocusArea>([
  "Sales",
  "Account Management",
  "Negotiation",
  "Communication",
  "Customer Success",
  "Leadership",
]);

const validExperienceLevels = new Set<ExperienceLevel>([
  "0–1 year",
  "1–3 years",
  "3–5 years",
  "5–10 years",
  "10+ years",
]);

const validGoalOptions = new Set<GoalOption>([
  "Improve my sales performance",
  "Become better at account management",
  "Improve negotiation and closing",
  "Strengthen communication with clients",
  "Prepare for a new sales role",
  "Grow into a leadership role",
]);

function getSingleValue(value: QueryValue): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}

function normalizeFocusArea(value: QueryValue): FocusArea | null {
  const raw = getSingleValue(value);
  if (!raw || !validFocusAreas.has(raw as FocusArea)) return null;
  return raw as FocusArea;
}

function normalizeExperience(value: QueryValue): ExperienceLevel | null {
  const raw = getSingleValue(value);
  if (!raw || !validExperienceLevels.has(raw as ExperienceLevel)) return null;
  return raw as ExperienceLevel;
}

function normalizeGoal(value: QueryValue): GoalOption | null {
  const raw = getSingleValue(value);
  if (!raw || !validGoalOptions.has(raw as GoalOption)) return null;
  return raw as GoalOption;
}

function getStartingLevel(experience: ExperienceLevel): RecommendationResult["level"] {
  if (experience === "0–1 year") return "Beginner";
  if (experience === "1–3 years") return "Beginner";
  if (experience === "3–5 years") return "Intermediate";
  if (experience === "5–10 years") return "Advanced";
  return "Advanced";
}

function getRecommendation(
  focusArea: FocusArea,
  experience: ExperienceLevel,
  primaryGoal: GoalOption,
): RecommendationResult {
  const level = getStartingLevel(experience);

  const baseWhy = [
    `Your selected focus area is ${focusArea}.`,
    `Your current experience level is ${experience}.`,
    `Your main goal is "${primaryGoal}".`,
  ];

  const catalog: Record<FocusArea, RecommendationResult["recommendedCourses"]> = {
    Sales: [
      {
        title: "Sales Fundamentals for Modern Professionals",
        category: "Sales",
        description:
          "Build a stronger foundation in core selling principles, buyer conversations, and structured execution.",
      },
      {
        title: "Prospecting and Pipeline Building",
        category: "Sales",
        description:
          "Learn how to identify opportunities, structure outreach, and build a healthier pipeline.",
      },
      {
        title: "Discovery and Qualification Skills",
        category: "Sales",
        description:
          "Improve your questioning, qualification, and buyer understanding during conversations.",
      },
    ],
    "Account Management": [
      {
        title: "Strategic Account Management",
        category: "Account Management",
        description:
          "Develop the skills needed to manage important accounts, deepen trust, and drive long-term value.",
      },
      {
        title: "Client Retention and Expansion Strategy",
        category: "Account Management",
        description:
          "Learn how to protect revenue, improve retention, and identify opportunities for expansion.",
      },
      {
        title: "Account Growth and Relationship Development",
        category: "Account Management",
        description:
          "Build better relationship management habits that support account development and growth.",
      },
    ],
    Negotiation: [
      {
        title: "Negotiation for Revenue Growth",
        category: "Negotiation",
        description:
          "Strengthen how you prepare for negotiations, respond to objections, and close with more confidence.",
      },
      {
        title: "Discovery and Qualification Skills",
        category: "Sales",
        description:
          "Improve qualification quality so negotiation starts from stronger buyer understanding.",
      },
      {
        title: "Professional Communication for Sales Teams",
        category: "Communication",
        description:
          "Sharpen communication habits that improve clarity and influence during difficult conversations.",
      },
    ],
    Communication: [
      {
        title: "Professional Communication for Sales Teams",
        category: "Communication",
        description:
          "Strengthen verbal and written communication for outreach, meetings, and client relationships.",
      },
      {
        title: "Discovery and Qualification Skills",
        category: "Sales",
        description:
          "Learn how to ask better questions and lead more useful customer conversations.",
      },
      {
        title: "Account Growth and Relationship Development",
        category: "Account Management",
        description:
          "Improve how you communicate in ongoing client relationships and growth opportunities.",
      },
    ],
    "Customer Success": [
      {
        title: "Customer Success and Retention Excellence",
        category: "Customer Success",
        description:
          "Improve retention, post-sale support, and stronger customer outcomes across the relationship lifecycle.",
      },
      {
        title: "Client Retention and Expansion Strategy",
        category: "Account Management",
        description:
          "Develop a stronger approach to protecting revenue while identifying account expansion opportunities.",
      },
      {
        title: "Professional Communication for Sales Teams",
        category: "Communication",
        description:
          "Strengthen the communication habits that improve customer confidence and continuity.",
      },
    ],
    Leadership: [
      {
        title: "Leadership for Sales Growth",
        category: "Leadership",
        description:
          "Support stronger team performance through better accountability, coaching, and leadership habits.",
      },
      {
        title: "Professional Communication for Sales Teams",
        category: "Communication",
        description:
          "Improve communication quality for leading people, managing expectations, and aligning performance.",
      },
      {
        title: "Sales Performance Habits",
        category: "Sales",
        description:
          "Build the consistency and execution habits that support stronger individual and team growth.",
      },
    ],
  };

  return {
    level,
    focusArea,
    summary: `Based on your experience and goals, Genim recommends that you start with ${focusArea} at the ${level.toLowerCase()} level.`,
    why: baseWhy,
    recommendedCourses: catalog[focusArea],
  };
}

export default async function IndividualRecommendationPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: QueryValue }>;
}) {
  const resolvedSearchParams = await searchParams;

  const focusArea = normalizeFocusArea(resolvedSearchParams.focusArea);
  const experience = normalizeExperience(resolvedSearchParams.experience);
  const primaryGoal = normalizeGoal(resolvedSearchParams.primaryGoal);

  if (!focusArea || !experience || !primaryGoal) {
    redirect("/onboarding/individual-assessment");
  }

  const recommendation = getRecommendation(focusArea, experience, primaryGoal);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div className="max-w-3xl pt-4 sm:pt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
                <GraduationCap className="h-4 w-4" />
                Personalized recommendation
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Here’s where Genim recommends you begin.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Based on your answers, we’ve identified the best starting
                category and first set of courses to help you begin with more
                clarity and momentum.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-5">
                  <div className="flex items-start gap-3">
                    <Compass className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Recommended starting category
                      </p>
                      <p className="mt-1 text-lg font-bold text-blue-700">
                        {recommendation.focusArea}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-orange-100 bg-orange-50/70 p-5">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Recommended starting level
                      </p>
                      <p className="mt-1 text-lg font-bold text-orange-600">
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
                  <span className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                    <Target className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                      Why this recommendation fits
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                      Your assessment points to a clear learning direction
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
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 shadow-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    Recommended first courses
                  </div>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    Start with these courses first
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                    These courses are the best starting point based on your
                    current experience, selected focus area, and main goal.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-700">
                      <Layers3 className="h-3.5 w-3.5" />
                      Structured learning path
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 font-medium text-emerald-700">
                      <Star className="h-3.5 w-3.5" />
                      Personalized selection
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 font-medium text-orange-700">
                      <BookOpen className="h-3.5 w-3.5" />
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
                          <span className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                            Option {index + 1}
                          </span>
                          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
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

                  <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                    <p className="text-sm leading-6 text-slate-700">
                      This recommendation should be stored against the user’s
                      onboarding record so the dashboard and course entry points
                      can reflect the same learning direction.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/courses"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
                    >
                      View courses
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <Link
                      href="/dashboard"
                      className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50 sm:w-auto"
                    >
                      Go to dashboard
                    </Link>
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