import Link from "next/link";
import { redirect } from "next/navigation";
import SiteHeader from "@/components/site-header";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserRound,
} from "lucide-react";

const benefits = [
  "7-day free trial to get started with confidence",
  "Structured AI-powered sales learning experience",
  "Track your progress and grow at your own pace",
];

const featureCards = [
  {
    title: "Practical learning path",
    description:
      "Build real sales capability through a guided, structured learning journey designed for practical growth.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Progress you can follow",
    description:
      "Stay on top of your development with a clearer path, visible progress, and a more focused learner experience.",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "Flexible subscription options",
    description:
      "Start with a free trial, then move into a monthly, semi-annual, or annual plan that matches your goals.",
    icon: <Clock3 className="h-5 w-5" />,
  },
];

const pricingPreview = [
  {
    key: "trial",
    name: "Free Trial",
    price: "₦0",
    note: "7 days access",
  },
  {
    key: "monthly",
    name: "Monthly",
    price: "₦7,000",
    note: "per month",
  },
  {
    key: "semi-annual",
    name: "Semi-Annual",
    price: "₦30,000",
    note: "₦5,000/month × 6",
  },
  {
    key: "annual",
    name: "Annual",
    price: "₦48,000",
    note: "₦4,000/month × 12",
  },
] as const;

const selectedPlanContent = {
  trial: {
    label: "Free Trial",
    short: "7-day free trial",
    description:
      "You are starting with the 7-day free trial before moving into a paid plan.",
  },
  monthly: {
    label: "Monthly Plan",
    short: "Monthly subscription",
    description:
      "You selected the monthly individual subscription at ₦7,000 per month.",
  },
  "semi-annual": {
    label: "Semi-Annual Plan",
    short: "Semi-annual subscription",
    description:
      "You selected the semi-annual individual plan at ₦30,000 total for 6 months.",
  },
  annual: {
    label: "Annual Plan",
    short: "Annual subscription",
    description:
      "You selected the annual individual plan at ₦48,000 total for 12 months.",
  },
} as const;

type PlanKey = keyof typeof selectedPlanContent;

const VALID_PLANS = new Set<PlanKey>(["trial", "monthly", "semi-annual", "annual"]);

function normalizePlanValue(
  plan: string | string[] | undefined,
): PlanKey | null {
  if (typeof plan !== "string") return null;
  return VALID_PLANS.has(plan as PlanKey) ? (plan as PlanKey) : null;
}

export default async function RegisterIndividualPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const selectedPlan = normalizePlanValue(resolvedSearchParams.plan);

  if (!selectedPlan) {
    redirect("/pricing");
  }

  const selectedPlanInfo = selectedPlanContent[selectedPlan];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
        <div className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="max-w-3xl pt-4 sm:pt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
                <GraduationCap className="h-4 w-4" />
                Individual learner path
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Start your Genim journey as an individual learner.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Create your account to access a modern AI-powered sales learning
                platform built to help you grow practical capability, track your
                development, and move forward with more clarity.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Selected plan: {selectedPlanInfo.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {selectedPlanInfo.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-1 md:max-w-2xl">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {featureCards.map((item) => (
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
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                      Individual pricing preview
                    </p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                      Clear plans for personal growth
                    </h2>
                  </div>

                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    View full pricing
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {pricingPreview.map((plan) => {
                    const isSelected = plan.key === selectedPlan;
                    const isPopular = plan.key === "semi-annual";

                    return (
                      <div
                        key={plan.name}
                        className={`rounded-2xl border p-4 ${
                          isSelected
                            ? "border-blue-600 bg-blue-50/70 ring-1 ring-blue-100"
                            : "border-slate-200 bg-slate-50"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-sm font-semibold text-slate-900">
                            {plan.name}
                          </p>

                          <div className="flex flex-col items-end gap-1">
                            {isPopular && (
                              <span className="rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                                Popular
                              </span>
                            )}
                            {isSelected && (
                              <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                                Selected
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                          {plan.price}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-600">
                          {plan.note}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xl lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
                <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 shadow-sm">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Create individual account
                  </div>

                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    Begin your learning journey
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                    Set up your individual Genim account and continue with your{" "}
                    <span className="font-semibold text-slate-900">
                      {selectedPlanInfo.short}
                    </span>
                    .
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-700">
                      <Sparkles className="h-3.5 w-3.5" />
                      {selectedPlanInfo.short}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 font-medium text-emerald-700">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Secure onboarding
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 font-medium text-orange-700">
                      <Target className="h-3.5 w-3.5" />
                      Built for growth
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <form className="space-y-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Full name
                      </label>
                      <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                          <UserRound className="h-4 w-4" />
                        </span>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          autoComplete="name"
                          placeholder="Enter your full name"
                          className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email address"
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Create a password"
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Confirm password
                      </label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Confirm your password"
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        required
                      />
                    </div>

                    <input type="hidden" name="plan" value={selectedPlan} />

                    <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                      <div className="flex items-start gap-3">
                        <Star className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        <p className="text-sm leading-6 text-slate-700">
                          {selectedPlan === "trial" ? (
                            <>
                              You will be able to start with the{" "}
                              <span className="font-semibold text-slate-900">
                                7-day free trial
                              </span>{" "}
                              before moving into a paid plan.
                            </>
                          ) : (
                            <>
                              You selected the{" "}
                              <span className="font-semibold text-slate-900">
                                {selectedPlanInfo.label}
                              </span>
                              . Your account can continue into payment and
                              subscription activation in the next step.
                            </>
                          )}
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
                    >
                      Create individual account
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>

                  <div className="mt-6 space-y-3 text-sm">
                    <p className="text-slate-600">
                      Creating an account for your team instead?{" "}
                      <Link
                        href="/register/company?plan=trial"
                        className="font-semibold text-orange-500 transition hover:text-orange-600"
                      >
                        Register as a company
                      </Link>
                    </p>

                    <p className="text-slate-600">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="font-semibold text-blue-600 transition hover:text-blue-700"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>

                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs leading-6 text-slate-500">
                      By continuing, you are creating an individual learner
                      account for Genim with the selected plan set to{" "}
                      <span className="font-semibold text-slate-700">
                        {selectedPlanInfo.label}
                      </span>
                      . Payment and subscription activation can be connected in
                      the next step without changing this page structure.
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