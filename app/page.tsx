import Link from "next/link";

const stats = [
  { value: "2 Paths", label: "Learn GTM or get GTM executed" },
  { value: "Modern", label: "Built for startups, operators, and teams" },
  { value: "Fast", label: "Ready for live iteration on Vercel" },
];

const highlights = [
  {
    title: "GeniusNimble",
    description:
      "Learn GTM engineering, build practical skills, and grow into a job-ready operator for modern revenue teams.",
    points: [
      "Structured learning experience",
      "Practical GTM workflows",
      "Talent and recruitment pathway",
    ],
    href: "/geniusnimble",
    cta: "Explore GeniusNimble",
  },
  {
    title: "AskGenim",
    description:
      "For startups that need strategy, systems, execution, and hands-on GTM support without building everything alone.",
    points: [
      "Consulting and implementation",
      "Execution for startup growth",
      "Built to support real business goals",
    ],
    href: "/askgenim",
    cta: "Explore AskGenim",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.18),_transparent_28%)]" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-blue-300 uppercase">
                GTM Platform
              </p>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <a href="#brands" className="transition hover:text-white">
                Brands
              </a>
              <a href="#why" className="transition hover:text-white">
                Why us
              </a>
              <a href="#next" className="transition hover:text-white">
                Next step
              </a>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                Building the future of GTM learning and GTM execution
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                One modern platform for{" "}
                <span className="text-blue-400">training</span>,{" "}
                <span className="text-orange-400">recruitment</span>, and{" "}
                <span className="text-white">startup GTM execution</span>.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                GeniusNimble helps people learn and grow into GTM engineers.
                AskGenim helps startups get GTM systems, strategy, and
                execution done properly. Together, they create a connected
                ecosystem for talent and growth.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#brands"
                  className="inline-flex items-center justify-center rounded-2xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  Explore the platform
                </Link>
                <Link
                  href="#next"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  See what we build next
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                  >
                    <p className="text-2xl font-semibold text-white">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1226] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                        Platform Preview
                      </p>
                      <h2 className="mt-2 text-xl font-semibold">
                        GTM Ecosystem
                      </h2>
                    </div>
                    <div className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-medium text-orange-300">
                      Live Build
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
                      <p className="text-sm font-semibold text-blue-300">
                        GeniusNimble
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        Learn GTM engineering, take courses, complete quizzes,
                        build skill, and grow into opportunities.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-orange-400/20 bg-orange-500/10 p-4">
                      <p className="text-sm font-semibold text-orange-300">
                        AskGenim
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        Help startups plan, launch, and operate their go-to-market
                        efforts with expert support and execution.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                          Focus
                        </p>
                        <p className="mt-2 text-sm font-medium text-white/90">
                          Learning + Services
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                          Goal
                        </p>
                        <p className="mt-2 text-sm font-medium text-white/90">
                          Growth + Talent
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-blue-500/20 blur-3xl sm:block" />
              <div className="absolute -bottom-8 right-0 hidden h-28 w-28 rounded-full bg-orange-500/20 blur-3xl sm:block" />
            </div>
          </div>
        </div>
      </section>

      <section id="brands" className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Two powerful brand directions
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            One shared platform. Two clear journeys.
          </h2>
          <p className="mt-4 text-base leading-8 text-white/70">
            We are designing a system that can teach GTM, recruit GTM talent,
            and also help companies get real GTM execution support.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                {item.description}
              </p>

              <div className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-400" />
                    <p className="text-sm text-white/80">{point}</p>
                  </div>
                ))}
              </div>

              <Link
                href={item.href}
                className="mt-8 inline-flex items-center rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-400/40 hover:bg-blue-500/10"
              >
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 sm:px-10 lg:grid-cols-3 lg:px-12">
          <div className="rounded-3xl border border-white/10 bg-[#0b1226] p-7">
            <h3 className="text-xl font-semibold">Built for credibility</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              We are not building a basic course website. We are building a
              premium GTM platform that can impress directors, partners, clients,
              and learners from the beginning.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0b1226] p-7">
            <h3 className="text-xl font-semibold">Designed for growth</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              The platform will support education, recruitment, consulting,
              subscriptions, dashboards, and future integrations without another
              rebuild.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0b1226] p-7">
            <h3 className="text-xl font-semibold">Ready for fast iteration</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              We will ship visible progress quickly on Vercel so stakeholders can
              keep reviewing the product as it improves.
            </p>
          </div>
        </div>
      </section>

      <section id="next" className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-500/10 via-white/5 to-orange-500/10 p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Next step
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            After this homepage, we build the two branded landing pages.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
            First we make the platform look strong. Then we move into the
            separate GeniusNimble and AskGenim experiences, and after that we
            begin auth, dashboards, and the product foundation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/geniusnimble"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Build GeniusNimble next
            </Link>
            <Link
              href="/askgenim"
              className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Build AskGenim next
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}