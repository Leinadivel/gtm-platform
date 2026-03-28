import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const heroPoints = [
  "Practical, in-demand sales and GTM learning",
  "Structured for both individuals and companies",
  "Built to improve performance, confidence, and execution",
];

const audienceCards = [
  {
    title: "For Individuals",
    icon: <GraduationCap className="h-6 w-6" />,
    accent: "blue" as const,
    desc: "Build high-value sales and GTM capability through structured learning, assessments, and guided progress.",
    bullets: [
      "7-day free trial",
      "Monthly, semi-annual, and annual plans",
      "Progress-driven learning experience",
    ],
    href: "/register/individual",
    cta: "Start as an individual",
  },
  {
    title: "For Companies",
    icon: <Building2 className="h-6 w-6" />,
    accent: "orange" as const,
    desc: "Enable your staff with a focused learning platform designed to strengthen sales capability across teams.",
    bullets: [
      "7-day company trial",
      "Per-staff subscription model",
      "Built for structured team learning",
    ],
    href: "/register/company",
    cta: "Start as a company",
  },
];

const valueCards = [
  {
    title: "AI-powered learning support",
    icon: <Bot className="h-5 w-5" />,
    desc: "A modern learning experience designed to make sales education more relevant, guided, and practical.",
  },
  {
    title: "Built for performance",
    icon: <Rocket className="h-5 w-5" />,
    desc: "The platform is designed to help learners and teams improve confidence, execution, and sales effectiveness.",
  },
  {
    title: "Structured for growth",
    icon: <BarChart3 className="h-5 w-5" />,
    desc: "Move from scattered learning into a clearer development path with measurable progression over time.",
  },
];

const learningHighlights = [
  {
    title: "Sales foundations",
    desc: "Develop a stronger understanding of the core principles behind effective selling and customer conversations.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Practical GTM understanding",
    desc: "Go beyond theory and understand how sales, positioning, messaging, and execution connect in real business environments.",
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: "Team enablement",
    desc: "Support company learning across staff with a structure that makes capability-building more consistent and scalable.",
    icon: <Users className="h-5 w-5" />,
  },
];

const trustItems = [
  "Subscription-based access for individuals and companies",
  "Short-term and long-term plans for different learning needs",
  "Designed for modern sales capability development",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-12">
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
                <BadgeCheck className="h-4 w-4" />
                AI-powered sales education for individuals and companies
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Accelerate sales performance with smarter learning.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Genim is a subscription-based learning platform built to help
                individuals and companies access practical, in-demand sales and
                GTM skills through a modern, structured learning experience.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/register/individual"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-500"
                >
                  Start free trial
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  View subscription plans
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <p className="text-sm text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Why Genim works
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Built for real sales capability growth
                    </p>
                  </div>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                    Subscription-based
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <FeaturePoint
                    icon={<Sparkles className="h-4 w-4" />}
                    title="Modern learning experience"
                    desc="A cleaner, guided experience for building sales and GTM skill with more clarity and structure."
                  />
                  <FeaturePoint
                    icon={<Clock3 className="h-4 w-4" />}
                    title="Flexible plan durations"
                    desc="Structured plans for monthly, semi-annual, and annual learning journeys across different user needs."
                  />
                  <FeaturePoint
                    icon={<ShieldCheck className="h-4 w-4" />}
                    title="Built for individuals and teams"
                    desc="The platform supports both personal development and company-wide staff enablement."
                  />
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-5 text-white">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Sparkles className="h-4 w-4" />
                    7-day free trial available
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    Start with a free trial, experience the platform properly,
                    then move into the subscription plan that fits your
                    learning or team needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Learning built for two clear paths
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Genim is designed for both individual learners and companies that
            want to build stronger sales capability across a team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {audienceCards.map((card) => (
            <AudienceCard
              key={card.title}
              title={card.title}
              icon={card.icon}
              accent={card.accent}
              desc={card.desc}
              bullets={card.bullets}
              href={card.href}
              cta={card.cta}
            />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              A smarter way to build sales capability
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              The platform is structured to help learners and teams move beyond
              surface-level knowledge into more useful, practical sales and GTM
              understanding.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valueCards.map((item) => (
              <ValueCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            What learners and teams can expect
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Genim is being positioned as more than a course website. It is a
            platform for practical development, stronger performance, and
            subscription-based learning access.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {learningHighlights.map((item) => (
            <HighlightCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Subscription plans designed around real usage
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Individual learners and companies have different needs, so the
                platform supports different subscription structures for both.
              </p>
            </div>

            <div className="space-y-4">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-600" />
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold">Individual pricing</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Includes a 7-day free trial, monthly access, and longer-duration
                plans for learners who want stronger value over time.
              </p>
              <Link
                href="/pricing"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600"
              >
                See individual plans
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex rounded-2xl bg-orange-50 p-3 text-orange-500">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold">Company pricing</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Includes a 7-day free trial and per-staff subscription plans for
                companies that want structured team learning access.
              </p>
              <Link
                href="/pricing"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-500"
              >
                See company plans
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12 text-center text-white shadow-lg">
            <h2 className="text-3xl font-semibold tracking-tight">
              Start with Genim and build real sales capability.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
              Whether you are learning individually or enabling your team, the
              platform is designed to help you start quickly and grow with
              structure.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/register/individual"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Start Individual Trial
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/register/company"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
              >
                Start Company Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function FeaturePoint({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <span className="inline-flex rounded-xl bg-blue-50 p-2 text-blue-600">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-xs leading-5 text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function AudienceCard({
  title,
  icon,
  accent,
  desc,
  bullets,
  href,
  cta,
}: {
  title: string;
  icon: React.ReactNode;
  accent: "blue" | "orange";
  desc: string;
  bullets: string[];
  href: string;
  cta: string;
}) {
  const accentWrap =
    accent === "orange"
      ? "bg-orange-50 text-orange-500"
      : "bg-blue-50 text-blue-600";

  const accentText = accent === "orange" ? "text-orange-500" : "text-blue-600";

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`inline-flex rounded-2xl p-3 ${accentWrap}`}>{icon}</div>

      <h3 className={`mt-5 text-2xl font-semibold ${accentText}`}>{title}</h3>

      <p className="mt-4 text-base leading-7 text-slate-600">{desc}</p>

      <div className="mt-6 grid gap-3">
        {bullets.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <span className="text-sm text-slate-700">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">Best for</p>
          <p className="mt-1 text-sm text-slate-600">{title}</p>
        </div>
        <Link
          href={href}
          className={`inline-flex items-center gap-2 font-semibold transition group-hover:translate-x-1 ${accentText}`}
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="inline-flex rounded-2xl bg-white p-3 text-blue-600 shadow-sm ring-1 ring-slate-100">
        {icon}
      </span>
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
    </div>
  );
}

function HighlightCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
        {icon}
      </span>
      <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
    </div>
  );
}