import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  Crown,
  Sparkles,
  Users,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const individualPlans = [
  {
    name: "Starter",
    price: "Free",
    description:
      "A strong starting point for individuals exploring GTM engineering and platform learning.",
    icon: Sparkles,
    accent: "blue",
    featured: false,
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
    accent: "orange",
    featured: true,
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
    accent: "blue",
    featured: false,
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

const companyPlans = [
  {
    name: "Team",
    price: "£99/mo",
    subtitle: "For early-stage teams",
    features: [
      "Up to 10 team members",
      "Company learning workspace",
      "Shared progress visibility",
      "Team learning management",
    ],
  },
  {
    name: "Growth",
    price: "£249/mo",
    subtitle: "For scaling companies",
    features: [
      "Up to 30 team members",
      "Enhanced learning visibility",
      "Priority support",
      "Stronger team enablement workflows",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    subtitle: "For advanced organisational needs",
    features: [
      "Custom user volume",
      "Tailored onboarding",
      "Dedicated support model",
      "Custom engagement structure",
    ],
  },
];

const faqs = [
  {
    q: "Can individuals upgrade later?",
    a: "Yes. Individual learners can start small and move into a fuller subscription experience as their learning needs grow.",
  },
  {
    q: "Can companies start with a smaller team?",
    a: "Yes. Company plans are structured to support growing teams and can expand as your organisation’s learning needs increase.",
  },
  {
    q: "Is AskGenim included in GeniusNimble pricing?",
    a: "No. AskGenim is structured separately as a service engagement for startups that need GTM strategy and execution support.",
  },
];

function accentClasses(accent: "blue" | "orange", featured?: boolean) {
  if (accent === "orange") {
    return {
      iconWrap: "bg-orange-100 text-orange-500",
      badge: "bg-orange-100 text-orange-700",
      button: featured
        ? "bg-orange-500 hover:bg-orange-400 text-white"
        : "bg-slate-900 hover:bg-slate-800 text-white",
      glow: "from-orange-100 via-white to-blue-50",
      ring: featured ? "border-orange-300 shadow-orange-100/80" : "border-slate-200",
    };
  }

  return {
    iconWrap: "bg-blue-100 text-blue-600",
    badge: "bg-blue-100 text-blue-700",
    button: "bg-slate-900 hover:bg-slate-800 text-white",
    glow: "from-blue-100 via-white to-orange-50",
    ring: "border-slate-200",
  };
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_28%),linear-gradient(to_bottom_right,#fff,#fff7ed,#eff6ff)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <Crown className="h-4 w-4 text-orange-500" />
              Pricing for GeniusNimble learning
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Pricing designed for
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                {" "}
                individuals and teams
              </span>
              .
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Choose a learning plan that matches your stage, whether you are
              developing GTM capability as an individual or enabling structured
              learning across a team.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {individualPlans.map((plan) => {
              const Icon = plan.icon;
              const styles = accentClasses(plan.accent as "blue" | "orange", plan.featured);

              return (
                <div
                  key={plan.name}
                  className={`relative overflow-hidden rounded-[32px] border bg-white p-8 shadow-xl transition hover:-translate-y-1 ${styles.ring}`}
                >
                  {plan.featured && (
                    <div className="absolute right-5 top-5 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      Most popular
                    </div>
                  )}

                  <div className={`absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-70`} />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className={`inline-flex rounded-2xl p-3 ${styles.iconWrap}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <h2 className="mt-5 text-2xl font-bold">{plan.name}</h2>
                        <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                          {plan.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex items-end gap-2">
                      <span className="text-5xl font-bold tracking-tight">
                        {plan.price}
                      </span>
                    </div>

                    <div className="mt-8 space-y-4">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="mt-0.5 rounded-full bg-white p-1 shadow-sm">
                            <Check className="h-4 w-4 text-emerald-600" />
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
            <Building2 className="h-4 w-4 text-orange-500" />
            Company learning plans
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Structured options for teams and organisations.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Company plans are designed for businesses that want to build
            capability across a team with stronger visibility, coordination, and
            long-term learning structure.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {companyPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-[30px] border bg-white p-8 shadow-lg ${
                index === 1 ? "border-orange-300 shadow-orange-100/70" : "border-slate-200"
              }`}
            >
              {index === 1 && (
                <div className="absolute right-5 top-5 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
                  Recommended
                </div>
              )}

              <div
                className={`absolute inset-0 ${
                  index === 1
                    ? "bg-gradient-to-br from-orange-50 via-white to-blue-50"
                    : "bg-gradient-to-br from-slate-50 to-white"
                } opacity-90`}
              />

              <div className="relative">
                <div
                  className={`inline-flex rounded-2xl p-3 ${
                    index === 1
                      ? "bg-orange-100 text-orange-500"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {index === 2 ? <Briefcase className="h-6 w-6" /> : <Users className="h-6 w-6" />}
                </div>

                <h3 className="mt-5 text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {plan.subtitle}
                </p>
                <p className="mt-6 text-4xl font-bold">{plan.price}</p>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-white p-1 shadow-sm">
                        <Check className="h-4 w-4 text-orange-500" />
                      </div>
                      <p className="text-sm leading-6 text-slate-700">{feature}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold transition ${
                    index === 1
                      ? "bg-orange-500 text-white hover:bg-orange-400"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact us" : "Talk to sales"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Quick comparison
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  Choose the right path for your growth stage.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Individuals can build skill and momentum through GeniusNimble,
                  while companies can create a stronger team learning
                  environment with structured access and visibility.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-blue-50 p-6">
                  <h3 className="text-xl font-bold text-slate-900">Individual</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Best for personal learning, assessments, progress tracking,
                    and long-term skill development.
                  </p>
                </div>

                <div className="rounded-3xl bg-orange-50 p-6">
                  <h3 className="text-xl font-bold text-slate-900">Company</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Best for teams that want organised learning, company
                    visibility, and structured enablement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Frequently asked questions
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            A few important things to know.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[36px] bg-gradient-to-r from-blue-600 to-orange-500 p-8 text-white shadow-xl sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
              Ready to begin
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Start with the plan that matches your next step.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/90">
              Whether you are learning individually or enabling a team, the
              platform is structured to grow with your goals.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register/individual"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Start as individual
              </Link>
              <Link
                href="/register/company"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Start as company
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}