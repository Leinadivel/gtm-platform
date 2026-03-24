import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Compass,
  Layers3,
  MessageSquare,
  Rocket,
  Target,
  Workflow,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const services = [
  {
    title: "GTM Strategy",
    description:
      "Clarify positioning, audience direction, growth priorities, and the strategic path required to move the business forward with more confidence.",
    icon: Compass,
  },
  {
    title: "GTM Systems Design",
    description:
      "Build the workflows, structures, and supporting systems that make go-to-market execution more organised and more scalable.",
    icon: Layers3,
  },
  {
    title: "Execution Support",
    description:
      "Move from ideas to action with practical implementation support across the areas that matter most to your growth efforts.",
    icon: Rocket,
  },
  {
    title: "Growth Visibility",
    description:
      "Create stronger visibility into progress, team coordination, and performance signals that support better decisions over time.",
    icon: BarChart3,
  },
];

const capabilities = [
  "Startup GTM planning and decision support",
  "Workflow and operational structure design",
  "Cross-functional execution support",
  "Improved visibility for team progress and momentum",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                <Building2 className="h-4 w-4 text-orange-500" />
                AskGenim services
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Practical GTM support designed for startup growth.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                AskGenim helps startups build clearer go-to-market direction,
                stronger systems, and more effective execution. The goal is not
                just activity, but progress that is structured, measurable, and
                aligned with business growth.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
                >
                  Talk to AskGenim
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/askgenim"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Back to AskGenim
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-orange-50 p-5">
                  <Target className="h-6 w-6 text-orange-500" />
                  <h3 className="mt-4 text-lg font-semibold">Clarity</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Define the right GTM priorities before execution begins.
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-5">
                  <Workflow className="h-6 w-6 text-blue-600" />
                  <h3 className="mt-4 text-lg font-semibold">Structure</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Build systems and workflows that support sustainable growth.
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-5">
                  <Rocket className="h-6 w-6 text-emerald-600" />
                  <h3 className="mt-4 text-lg font-semibold">Execution</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Move faster with practical implementation support.
                  </p>
                </div>

                <div className="rounded-2xl bg-violet-50 p-5">
                  <MessageSquare className="h-6 w-6 text-violet-600" />
                  <h3 className="mt-4 text-lg font-semibold">Support</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Work through growth challenges with focused GTM guidance.
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
            Core service areas
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What AskGenim helps startups do better.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            AskGenim is designed to help companies move from scattered GTM
            effort to a more connected and effective operating model.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="inline-flex rounded-2xl bg-orange-50 p-3 text-orange-500">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              How we help
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Support built around real startup needs.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The service model is designed to support founders and teams that
              need clearer GTM direction, stronger operating structure, and more
              confident execution.
            </p>
          </div>

          <div className="space-y-4">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-500" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[32px] bg-gradient-to-r from-orange-500 to-blue-600 p-8 text-white sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Ready to talk
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Let’s explore the next best GTM move for your business.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/90">
              If your startup needs support with GTM direction, systems, or
              execution, AskGenim provides a practical starting point for the
              conversation.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Contact AskGenim
              </Link>
              <Link
                href="/askgenim"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Back to AskGenim
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}