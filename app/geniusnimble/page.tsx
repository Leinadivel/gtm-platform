import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Crown,
  GraduationCap,
  Layers3,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const features = [
  {
    icon: GraduationCap,
    title: "Practical GTM Learning",
    description:
      "Learn go-to-market engineering through structured content designed around real skills, not just theory.",
  },
  {
    icon: Layers3,
    title: "Systems Thinking",
    description:
      "Understand how GTM strategy, workflows, tooling, operations, and execution connect in modern teams.",
  },
  {
    icon: Briefcase,
    title: "Recruitment Pathway",
    description:
      "Position learners for real opportunities by building a platform that supports both learning and talent visibility.",
  },
];

const outcomes = [
  "Learn modern GTM engineering step by step",
  "Build confidence with practical concepts and workflows",
  "Prepare for startup, growth, and revenue team opportunities",
  "Create a strong path from training to recruitment",
];

const individualPlans = [
  {
    name: "Starter",
    price: "Free",
    description:
      "A strong starting point for individuals exploring GTM engineering and platform learning.",
    icon: Sparkles,
    featured: false,
    accent: "blue",
    features: [
      "Access to selected learning content",
      "Basic learning dashboard",
      "Limited assessments",
      "Community access",
    ],
    cta: "Start free",
    href: "/register/individual",
  },
  {
    name: "Pro",
    price: "£19/mo",
    description:
      "Full access to structured GTM learning and measurable progress.",
    icon: Crown,
    featured: true,
    accent: "orange",
    features: [
      "Full course access",
      "All assessments",
      "Progress tracking",
      "Certificates",
      "Priority learning updates",
    ],
    cta: "Choose Pro",
    href: "/register/individual",
  },
  {
    name: "Advanced",
    price: "£39/mo",
    description:
      "For serious learners focused on deep capability and accelerated growth.",
    icon: Briefcase,
    featured: false,
    accent: "blue",
    features: [
      "Everything in Pro",
      "Advanced learning tracks",
      "Exclusive content",
      "Priority support",
      "Future career opportunities access",
    ],
    cta: "Go Advanced",
    href: "/register/individual",
  },
];

function planStyles(accent: "blue" | "orange", featured?: boolean) {
  if (accent === "orange") {
    return {
      icon: "bg-orange-100 text-orange-500",
      border: featured
        ? "border-orange-300 shadow-orange-100/70"
        : "border-slate-200",
      bg: "from-orange-50 via-white to-blue-50",
      button: "bg-orange-500 hover:bg-orange-400 text-white",
      badge: "bg-slate-900 text-white",
    };
  }

  return {
    icon: "bg-blue-100 text-blue-600",
    border: "border-slate-200",
    bg: "from-blue-50 via-white to-orange-50",
    button: "bg-slate-900 hover:bg-slate-800 text-white",
    badge: "bg-blue-100 text-blue-700",
  };
}

export default function GeniusNimblePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="mt-6 grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm text-blue-700 shadow-sm">
                <Sparkles className="h-4 w-4" />
                Teaching and Recruitment of GTM Engineers
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Learn GTM engineering and grow into real opportunities.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                GeniusNimble is the learning side of the platform. It helps
                individuals build modern go-to-market skills through practical
                training, clear pathways, and a stronger route into real work.
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
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  View Pricing
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-slate-900">Learn</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Build relevant GTM skills
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-slate-900">Grow</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Move with structure and direction
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-slate-900">Get Seen</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Position for recruitment opportunities
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
              <div className="rounded-[24px] bg-slate-50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Learning Path
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">
                      From beginner to GTM-ready
                    </h2>
                  </div>
                  <div className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                    Live Preview
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-blue-100 p-2 text-blue-700">
                        <Target className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Foundations</p>
                        <p className="text-sm text-slate-600">
                          Learn the principles behind GTM engineering
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-orange-100 p-2 text-orange-600">
                        <Layers3 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Systems & Workflows</p>
                        <p className="text-sm text-slate-600">
                          Understand tools, processes, and execution layers
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-emerald-100 p-2 text-emerald-600">
                        <BadgeCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Proof of Progress</p>
                        <p className="text-sm text-slate-600">
                          Quizzes, outcomes, and signals that support growth
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-violet-100 p-2 text-violet-600">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Opportunity Pathway</p>
                        <p className="text-sm text-slate-600">
                          Move from learning into visibility and recruitment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Why GeniusNimble
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            A better way to learn GTM with a real future in mind.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            This is not just a course page. It is the foundation for a learning
            and talent ecosystem built to help people become valuable GTM
            operators.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              What learners get
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Clear direction from skill-building to opportunity.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              GeniusNimble is being designed to make learning feel practical,
              motivating, and connected to real outcomes.
            </p>
          </div>

          <div className="space-y-4">
            {outcomes.map((item) => (
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Choose the learning plan that matches your stage.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Start free, grow with structure, and move into deeper capability as
            your learning journey expands.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {individualPlans.map((plan) => {
            const Icon = plan.icon;
            const styles = planStyles(plan.accent as "blue" | "orange", plan.featured);

            return (
              <div
                key={plan.name}
                className={`relative overflow-hidden rounded-[32px] border bg-white p-8 shadow-xl transition hover:-translate-y-1 ${styles.border}`}
              >
                {plan.featured && (
                  <div className={`absolute right-5 top-5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${styles.badge}`}>
                    Most popular
                  </div>
                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${styles.bg} opacity-80`} />
                <div className="relative">
                  <div className={`inline-flex rounded-2xl p-3 ${styles.icon}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {plan.description}
                  </p>

                  <div className="mt-8">
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price}
                    </span>
                  </div>

                  <div className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-white p-1 shadow-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        </div>
                        <p className="text-sm leading-6 text-slate-700">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={plan.href}
                    className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold transition ${styles.button}`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            See full pricing details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[32px] bg-gradient-to-r from-blue-600 to-orange-500 p-8 text-white sm:p-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm">
              <Users className="h-4 w-4" />
              Learning + recruitment vision
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Build skills today. Open doors tomorrow.
            </h2>

            <p className="mt-4 text-base leading-8 text-white/90">
              We are creating a platform where people can learn GTM engineering,
              demonstrate progress, and move toward meaningful opportunities in
              growth-focused companies.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register/individual"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Join GeniusNimble
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}