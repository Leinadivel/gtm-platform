import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Compass,
  Rocket,
  Target,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "GTM Strategy",
    description:
      "We help startups clarify positioning, customer journey, growth priorities, and execution direction.",
  },
  {
    icon: Rocket,
    title: "GTM Execution",
    description:
      "From systems to campaigns and operating workflows, we help put the work into motion with structure.",
  },
  {
    icon: Building2,
    title: "Startup Support",
    description:
      "AskGenim is designed for founders and teams that need practical go-to-market help without wasting time.",
  },
];

const outcomes = [
  "Create a clearer GTM direction for the business",
  "Set up practical systems and operating structure",
  "Move faster with better execution support",
  "Build momentum without carrying everything internally",
];

export default function AskGenimPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm text-orange-700 shadow-sm">
                <Target className="h-4 w-4" />
                Consulting and GTM execution for startups
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Get your go-to-market work done with more clarity and speed.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                AskGenim is the execution side of the platform. We help startup
                teams with GTM strategy, systems, structure, and hands-on
                implementation so growth work becomes clearer and more effective.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
                >
                  Work With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  View Services
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-slate-900">Plan</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Clarify your GTM direction
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-slate-900">Build</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Put systems and workflows in place
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-2xl font-bold text-slate-900">Grow</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Execute with stronger momentum
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
              <div className="rounded-[24px] bg-slate-50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Startup GTM Support
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">
                      From direction to execution
                    </h2>
                  </div>
                  <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    Live Preview
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-orange-100 p-2 text-orange-600">
                        <Compass className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Direction</p>
                        <p className="text-sm text-slate-600">
                          Clarify positioning, goals, and GTM priorities
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-blue-100 p-2 text-blue-700">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Systems</p>
                        <p className="text-sm text-slate-600">
                          Set up workflows, structure, and operational support
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-emerald-100 p-2 text-emerald-600">
                        <Rocket className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Execution</p>
                        <p className="text-sm text-slate-600">
                          Move faster with implementation support that works
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-violet-100 p-2 text-violet-600">
                        <BadgeCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Progress</p>
                        <p className="text-sm text-slate-600">
                          Build momentum with clearer GTM decision-making
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Why AskGenim
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            A practical GTM partner for startups that need real support.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            AskGenim is being built to help founders and teams avoid scattered
            GTM efforts by bringing strategy, systems, and execution into one
            stronger working model.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
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
              What startups get
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Clearer structure for better GTM execution.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              AskGenim is designed to help companies move from uncertainty and
              scattered actions into clearer GTM decisions and stronger execution.
            </p>
          </div>

          <div className="space-y-4">
            {outcomes.map((item) => (
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
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm">
              <Users className="h-4 w-4" />
              Startup consulting + GTM execution
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Let your team focus better while the GTM work gets stronger.
            </h2>

            <p className="mt-4 text-base leading-8 text-white/90">
              We are building AskGenim to support startups with practical
              go-to-market direction, structured support, and meaningful execution.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Talk to AskGenim
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Back to Main Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}