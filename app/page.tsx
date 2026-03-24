import Link from "next/link";
import SiteHeader from "@/components/site-header";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers3,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-10">
          <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
                <BadgeCheck className="h-4 w-4" />
                Practical GTM learning + real GTM execution
              </div>

              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Build, learn, and execute{" "}
                <span className="text-blue-600">Go-To-Market</span>{" "}
                the right way.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                A complete platform where individuals master GTM engineering and
                companies get structured GTM systems, strategy, and execution
                support that actually moves growth forward.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/geniusnimble"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-500"
                >
                  Learn GTM (GeniusNimble)
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/askgenim"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-800 transition hover:bg-gray-50"
                >
                  Get GTM Done (AskGenim)
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <StatCard
                  title="For learners"
                  value="Hands-on"
                  desc="Real-world GTM knowledge, not just theory."
                  icon={<GraduationCap className="h-4 w-4" />}
                  accent="blue"
                />
                <StatCard
                  title="For startups"
                  value="Structured"
                  desc="Clear systems for planning and execution."
                  icon={<Rocket className="h-4 w-4" />}
                  accent="orange"
                />
                <StatCard
                  title="For teams"
                  value="Practical"
                  desc="A bridge between education and outcomes."
                  icon={<Users className="h-4 w-4" />}
                  accent="blue"
                />
              </div>
            </div>

            {/* HERO SIDE PANEL */}
            <div className="relative">
              <div className="rounded-3xl border border-gray-200 bg-white/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Why this platform stands out
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      More than a course. More than a service.
                    </p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    GTM-first
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <FeaturePoint
                    icon={<Compass className="h-4 w-4" />}
                    title="Clear direction"
                    desc="The platform gives people and companies a clearer path into modern GTM work."
                  />
                  <FeaturePoint
                    icon={<Layers3 className="h-4 w-4" />}
                    title="Systems thinking"
                    desc="Instead of random tactics, it focuses on repeatable systems and structured execution."
                  />
                  <FeaturePoint
                    icon={<Target className="h-4 w-4" />}
                    title="Outcome driven"
                    desc="Every part of the experience is designed around skill growth and business impact."
                  />
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-5 text-white">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Sparkles className="h-4 w-4" />
                    One ecosystem, two paths
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    Whether you want to learn GTM deeply or need GTM execution
                    delivered for your company, the platform gives you a focused
                    path forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Two focused paths for growth
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            The GTM Platform is designed around two strong directions. One helps
            individuals become highly valuable in modern growth environments.
            The other helps startups and companies implement GTM systems with
            expert support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* GeniusNimble */}
          <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">
              <GraduationCap className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-2xl font-semibold text-blue-600">
              GeniusNimble
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Learn GTM engineering, build practical capability, and position
              yourself for opportunities inside modern growth teams. This path
              is built for people who want a deeper, more useful understanding
              of GTM systems and execution.
            </p>

            <div className="mt-6 grid gap-3">
              <ListItem text="Structured learning experience" />
              <ListItem text="Practical GTM systems and workflows" />
              <ListItem text="Applied knowledge, not surface-level theory" />
              <ListItem text="Recruitment and opportunity pathway" />
            </div>

            <div className="mt-8 flex items-center justify-between rounded-2xl bg-gray-50 p-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">Best for</p>
                <p className="mt-1 text-sm text-gray-600">
                  Learners, operators, aspiring GTM talent
                </p>
              </div>
              <Link
                href="/geniusnimble"
                className="inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:translate-x-1"
              >
                Explore
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* AskGenim */}
          <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="inline-flex rounded-2xl bg-orange-50 p-3 text-orange-500">
              <Briefcase className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-2xl font-semibold text-orange-500">
              AskGenim
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-600">
              We help startups and companies plan, launch, and execute GTM
              strategies with real structure. This is for teams that do not just
              need ideas, but want practical GTM support, systems, and
              execution that can move the business forward.
            </p>

            <div className="mt-6 grid gap-3">
              <ListItem text="GTM consulting and advisory" />
              <ListItem text="Execution support with structure" />
              <ListItem text="Startup growth systems and workflows" />
              <ListItem text="Strategy translated into action" />
            </div>

            <div className="mt-8 flex items-center justify-between rounded-2xl bg-gray-50 p-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">Best for</p>
                <p className="mt-1 text-sm text-gray-600">
                  Founders, growth teams, startups, operators
                </p>
              </div>
              <Link
                href="/askgenim"
                className="inline-flex items-center gap-2 font-semibold text-orange-500 transition group-hover:translate-x-1"
              >
                Explore
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              One platform. Two powerful outcomes.
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Learn GTM skills and deploy them in real-world business scenarios.
              The platform connects education, talent development, and execution
              into one practical system built for modern growth work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ValueCard
              icon={<Building2 className="h-5 w-5" />}
              title="Built for modern companies"
              desc="The platform reflects the real needs of startups and growth teams that need clearer GTM systems."
            />
            <ValueCard
              icon={<Users className="h-5 w-5" />}
              title="Built for modern talent"
              desc="Learners gain more than information. They gain practical GTM understanding that can translate into opportunity."
            />
            <ValueCard
              icon={<Rocket className="h-5 w-5" />}
              title="Built for real execution"
              desc="Everything is oriented toward useful outcomes, whether that is learning, hiring, planning, or shipping GTM work."
            />
          </div>
        </div>
      </section>

      {/* PROCESS / DIRECTIONS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Clear directions for different kinds of users
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Not everyone comes to the platform for the same reason. Some want to
            grow their skills. Some want to solve business growth challenges.
            This page now makes those directions more obvious so users can
            understand exactly where to go next.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <DirectionCard
            title="If you want to learn"
            desc="Choose GeniusNimble to build GTM capability, sharpen your practical understanding, and prepare for real roles and projects."
            accent="blue"
          />
          <DirectionCard
            title="If you need execution"
            desc="Choose AskGenim if your company needs GTM thinking, systems, and hands-on support to move from plan to progress."
            accent="orange"
          />
          <DirectionCard
            title="If you want both"
            desc="The platform is positioned to connect learning and execution, making it useful for talent, teams, and businesses alike."
            accent="blue"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12 text-center text-white shadow-lg">
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready to start your GTM journey?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
              Whether you want to learn GTM deeply or work with a team that can
              help you execute GTM more effectively, the next step is clear.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/geniusnimble"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/askgenim"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
              >
                Work With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  title,
  value,
  desc,
  icon,
  accent,
}: {
  title: string;
  value: string;
  desc: string;
  icon: React.ReactNode;
  accent: "blue" | "orange";
}) {
  const accentClass =
    accent === "orange"
      ? "bg-orange-50 text-orange-600"
      : "bg-blue-50 text-blue-600";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className={`inline-flex rounded-xl p-2 ${accentClass}`}>{icon}</span>
        <p className="text-xs font-medium text-gray-500">{title}</p>
      </div>
      <p className="mt-3 text-lg font-semibold text-gray-900">{value}</p>
      <p className="mt-1 text-xs leading-5 text-gray-600">{desc}</p>
    </div>
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
    <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4">
      <span className="inline-flex rounded-xl bg-blue-50 p-2 text-blue-600">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="mt-1 text-xs leading-5 text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
      <span className="text-sm text-gray-700">{text}</span>
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
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <span className="inline-flex rounded-2xl bg-white p-3 text-blue-600 shadow-sm ring-1 ring-gray-100">
        {icon}
      </span>
      <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-gray-600">{desc}</p>
    </div>
  );
}

function DirectionCard({
  title,
  desc,
  accent,
}: {
  title: string;
  desc: string;
  accent: "blue" | "orange";
}) {
  const titleClass = accent === "orange" ? "text-orange-500" : "text-blue-600";
  const badgeClass =
    accent === "orange"
      ? "bg-orange-50 text-orange-600"
      : "bg-blue-50 text-blue-600";

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}>
        Path
      </span>
      <h3 className={`mt-4 text-xl font-semibold ${titleClass}`}>{title}</h3>
      <p className="mt-3 text-sm leading-7 text-gray-600">{desc}</p>
    </div>
  );
}