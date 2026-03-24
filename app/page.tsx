import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          {/* NAV */}
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">GTM Platform</h1>

            <div className="hidden gap-6 text-sm text-gray-600 md:flex">
              <span>GeniusNimble</span>
              <span>AskGenim</span>
            </div>
          </div>

          {/* HERO CONTENT */}
          <div className="mt-16 max-w-4xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              Build, learn and execute{" "}
              <span className="text-blue-600">Go-To-Market</span>{" "}
              the right way.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-600">
              A complete platform where individuals learn GTM engineering and
              companies get GTM systems, strategy and execution done for them.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/geniusnimble"
                className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-500 transition"
              >
                Learn GTM (GeniusNimble)
              </Link>

              <Link
                href="/askgenim"
                className="rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100 transition"
              >
                Get GTM Done (AskGenim)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {/* GeniusNimble */}
          <div className="rounded-2xl border bg-white p-8 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-blue-600">
              GeniusNimble
            </h2>
            <p className="mt-4 text-gray-600">
              Learn GTM engineering, build real-world skills, and position
              yourself for opportunities in modern growth teams.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>• Structured courses</li>
              <li>• Practical GTM systems</li>
              <li>• Recruitment pathway</li>
            </ul>

            <Link
              href="/geniusnimble"
              className="mt-6 inline-block text-blue-600 font-semibold"
            >
              Explore →
            </Link>
          </div>

          {/* AskGenim */}
          <div className="rounded-2xl border bg-white p-8 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-orange-500">
              AskGenim
            </h2>
            <p className="mt-4 text-gray-600">
              We help startups plan, launch and execute GTM strategies with real
              systems, real structure and real results.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              <li>• GTM consulting</li>
              <li>• Execution support</li>
              <li>• Startup growth systems</li>
            </ul>

            <Link
              href="/askgenim"
              className="mt-6 inline-block text-orange-500 font-semibold"
            >
              Explore →
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-semibold">
            One platform. Two powerful outcomes.
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Learn GTM skills and deploy them in real-world business scenarios.
            We connect education, talent, and execution into one system.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold">
          Ready to start your GTM journey?
        </h2>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/geniusnimble"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500"
          >
            Start Learning
          </Link>

          <Link
            href="/askgenim"
            className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-400"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </main>
  );
}