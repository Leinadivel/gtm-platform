import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Clock3,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Users,
} from "lucide-react";

const individualPlans = [
  {
    name: "Free Trial",
    price: "₦0",
    period: "/ 7 days",
    description:
      "Start with a free trial and explore the platform before moving into a paid plan.",
    features: [
      "7-day access to core learning features",
      "AI-powered sales learning experience",
      "Personal progress tracking",
      "Best way to explore the platform first",
    ],
    cta: "Start Individual Trial",
    href: "/register/individual?plan=trial",
    highlighted: false,
    note: "Great for first-time learners",
    accent: "blue" as const,
  },
  {
    name: "Monthly",
    price: "₦7,000",
    period: "/ month",
    description:
      "Flexible monthly access for learners who want to move at their own pace.",
    features: [
      "Full individual learning access",
      "Guided sales learning path",
      "Progress and performance visibility",
      "Flexible monthly commitment",
    ],
    cta: "Choose Individual Plan",
    href: "/register/individual?plan=monthly",
    highlighted: false,
    note: "Flexible monthly subscription",
    accent: "blue" as const,
  },
  {
    name: "Semi-Annual",
    price: "₦30,000",
    period: "/ 6 months",
    description:
      "A stronger value option for learners ready to stay consistent over time.",
    features: [
      "Everything in Monthly",
      "Lower effective monthly cost",
      "Longer uninterrupted access",
      "Better value for committed learners",
    ],
    cta: "Choose Individual Plan",
    href: "/register/individual?plan=semi-annual",
    highlighted: true,
    badge: "Most Popular",
    note: "₦5,000/month × 6",
    accent: "blue" as const,
  },
  {
    name: "Annual",
    price: "₦48,000",
    period: "/ year",
    description:
      "The best long-term value for individuals investing in steady growth.",
    features: [
      "Everything in Semi-Annual",
      "Best effective monthly pricing",
      "Longer-term access and consistency",
      "Ideal for deeper skill development",
    ],
    cta: "Choose Individual Plan",
    href: "/register/individual?plan=annual",
    highlighted: false,
    note: "₦4,000/month × 12",
    accent: "blue" as const,
  },
];

const companyPlans = [
  {
    name: "Free Trial",
    price: "₦0",
    period: "/ 7 days",
    description:
      "Try Genim with your team first before committing to a staff-based plan.",
    features: [
      "7-day company trial",
      "Preview the team onboarding flow",
      "Explore the company workspace",
      "Test if the platform fits your organisation",
    ],
    cta: "Start Company Trial",
    href: "/register/company?plan=trial",
    highlighted: false,
    note: "For organisations evaluating the platform",
    accent: "orange" as const,
  },
  {
    name: "Semi-Annual",
    price: "₦60,000",
    period: "/ staff / 6 months",
    description:
      "Mid-term company plan designed for structured team learning access.",
    features: [
      "Multi-staff access",
      "Scalable company onboarding",
      "Built for team-based capability development",
      "Lower effective cost than shorter models",
    ],
    cta: "Choose Company Plan",
    href: "/register/company?plan=semi-annual",
    highlighted: true,
    badge: "Best for Teams",
    note: "₦10,000/month per staff × 6",
    accent: "orange" as const,
  },
  {
    name: "Annual",
    price: "₦96,000",
    period: "/ staff / year",
    description:
      "The best value for companies investing in long-term workforce development.",
    features: [
      "Everything in Semi-Annual",
      "Best effective annual company pricing",
      "Long-term team access",
      "Ideal for structured staff growth",
    ],
    cta: "Choose Company Plan",
    href: "/register/company?plan=annual",
    highlighted: false,
    note: "₦8,000/month per staff × 12",
    accent: "orange" as const,
  },
];

function PlanCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  href,
  highlighted,
  badge,
  note,
  accent,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
  badge?: string;
  note?: string;
  accent: "blue" | "orange";
}) {
  const isOrange = accent === "orange";

  const highlightedClasses = isOrange
    ? "border-orange-500 ring-1 ring-orange-100"
    : "border-blue-600 ring-1 ring-blue-100";

  const badgeClasses = isOrange ? "bg-orange-500" : "bg-blue-600";
  const noteClasses = isOrange ? "text-orange-600" : "text-blue-700";
  const iconWrapClasses = isOrange
    ? "bg-orange-50 text-orange-500"
    : "bg-blue-50 text-blue-600";
  const buttonClasses = highlighted
    ? isOrange
      ? "bg-orange-500 text-white hover:bg-orange-400"
      : "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-slate-900 text-white hover:bg-slate-800";

  return (
    <div
      className={`relative h-full rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
        highlighted
          ? highlightedClasses
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      {badge && (
        <div
          className={`absolute -top-3 left-6 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg ${badgeClasses}`}
        >
          <Sparkles className="mr-1.5 h-3.5 w-3.5" />
          {badge}
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold tracking-tight text-slate-900">
          {name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      </div>

      <div className="mb-2 flex items-end gap-2">
        <span className="text-4xl font-extrabold tracking-tight text-slate-950">
          {price}
        </span>
        <span className="pb-1 text-sm font-medium text-slate-500">
          {period}
        </span>
      </div>

      {note && <p className={`mb-6 text-sm font-medium ${noteClasses}`}>{note}</p>}

      <Link
        href={href}
        className={`group inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${buttonClasses}`}
      >
        {cta}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>

      <div className="my-6 h-px bg-slate-200" />

      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${iconWrapClasses}`}
            >
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm leading-6 text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-sky-100/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
              <BadgeCheck className="mr-2 h-4 w-4" />
              Flexible pricing for individuals and companies
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Pricing built for
              <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                personal and team growth
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Genim supports both individual learners and organisations. Choose
              the path that fits how you want to learn, grow, and scale access.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/register/individual?plan=trial"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Start as an Individual
              </Link>
              <Link
                href="/register/company?plan=trial"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Start as a Company
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-600" />
                7-day free trial available
              </div>
              <div className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600" />
                Built for individuals and teams
              </div>
              <div className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-blue-600" />
                Paystack-ready structure
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <UserRound className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-950">
                  For Individuals
                </h2>
                <p className="text-sm text-slate-600">
                  Ideal for personal learning, skill development, and
                  self-paced growth.
                </p>
              </div>
            </div>

            <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
              <div className="flex items-start gap-3">
                <Star className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <p className="text-sm leading-6 text-slate-700">
                  Start with an individual account, begin your free trial, and
                  move into the subscription plan that matches your learning
                  pace.
                </p>
              </div>
            </div>

            <div className="grid gap-5 xl:grid-cols-2">
              {individualPlans.map((plan) => (
                <PlanCard key={plan.name} {...plan} />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-950">
                  For Companies
                </h2>
                <p className="text-sm text-slate-600">
                  Designed for organisations managing multiple staff accounts
                  and team-wide enablement.
                </p>
              </div>
            </div>

            <div className="mb-6 rounded-2xl border border-orange-100 bg-orange-50/60 p-4">
              <div className="flex items-start gap-3">
                <Star className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                <p className="text-sm leading-6 text-slate-700">
                  Company subscriptions are priced{" "}
                  <span className="font-semibold text-slate-900">per staff</span>
                  , giving you flexibility to scale based on the size of your
                  team.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              {companyPlans.map((plan) => (
                <PlanCard key={plan.name} {...plan} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
              <Clock3 className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              Start free, upgrade later
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Both individuals and companies can begin with a 7-day free trial
              before moving into a subscription plan.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="inline-flex rounded-2xl bg-orange-50 p-3 text-orange-500">
              <Users className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              Different paths, one platform
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Individual learners and companies have different onboarding flows,
              but both are supported within the same Genim ecosystem.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="inline-flex rounded-2xl bg-slate-100 p-3 text-slate-700">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              Ready for payment integration
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              This pricing structure is already positioned for future Paystack
              integration, plan activation, and account upgrade flows.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Future-ready billing
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Structured for smooth subscription growth
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                The pricing model is intentionally designed to support future
                Paystack billing, account upgrades, staff-based subscriptions
                for companies, and later location-aware currency display for
                Nigeria and international users.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-sm font-semibold text-white">Planned next</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Plan selection persistence, payment flow, and subscription
                  activation logic.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-sm font-semibold text-white">Later expansion</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Automatic currency display for Nigeria in Naira and outside
                  Nigeria in USD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-2 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Ready to choose your path?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether you are enrolling for yourself or onboarding a team,
              Genim gives you a clear path to start free and scale into the
              right subscription plan.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/register/individual?plan=trial"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Start Individual Trial
              </Link>
              <Link
                href="/register/company?plan=trial"
                className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Start Company Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}