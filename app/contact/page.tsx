import Link from "next/link";
import {
  ArrowRight,
  Building2,
 CheckCircle2,
  Headphones,
  Mail,
  MessageSquare,
  Phone,
  UserRound,
  Mic,
  BadgeHelp,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const contactPoints = [
  "Discuss GTM strategy and execution needs",
  "Explore support for startup growth initiatives",
  "Understand how AskGenim can support your team",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader showBackHome />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                <MessageSquare className="h-4 w-4 text-orange-500" />
                AskGenim contact
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Start the conversation about your GTM growth goals.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Whether you need strategic clarity, stronger systems, or hands-on
                GTM execution support, AskGenim is built to help startups move with
                more structure, focus, and momentum.
              </p>
            </div>

            <div className="relative min-h-[360px] lg:min-h-[420px]">
              <div className="absolute left-10 top-4 h-28 w-28 rounded-full bg-orange-100/70 blur-3xl" />
              <div className="absolute right-10 top-14 h-24 w-24 rounded-full bg-blue-100/70 blur-3xl" />
              <div className="absolute bottom-12 left-20 h-24 w-24 rounded-full bg-emerald-100/60 blur-3xl" />
              <div className="absolute bottom-6 right-12 h-28 w-28 rounded-full bg-violet-100/60 blur-3xl" />

              <div className="absolute left-2 top-8 rounded-2xl bg-white/80 p-3 text-blue-600 shadow-sm backdrop-blur">
                <Phone className="h-5 w-5" />
              </div>

              <div className="absolute left-20 top-0 rounded-2xl bg-white/80 p-3 text-orange-500 shadow-sm backdrop-blur">
                <Mail className="h-5 w-5" />
              </div>

              <div className="absolute right-20 top-6 rounded-2xl bg-white/80 p-3 text-emerald-600 shadow-sm backdrop-blur">
                <MessageSquare className="h-5 w-5" />
              </div>

              <div className="absolute right-4 top-28 rounded-2xl bg-white/80 p-3 text-violet-600 shadow-sm backdrop-blur">
                <UserRound className="h-5 w-5" />
              </div>

              <div className="absolute left-12 top-44 rounded-2xl bg-white/80 p-3 text-sky-600 shadow-sm backdrop-blur">
                <Mic className="h-5 w-5" />
              </div>

              <div className="absolute right-28 top-56 rounded-2xl bg-white/80 p-3 text-amber-600 shadow-sm backdrop-blur">
                <BadgeHelp className="h-5 w-5" />
              </div>

              <div className="absolute left-6 bottom-20 rounded-2xl bg-white/80 p-3 text-rose-500 shadow-sm backdrop-blur">
                <Mail className="h-5 w-5" />
              </div>

              <div className="absolute left-32 bottom-6 rounded-2xl bg-white/80 p-3 text-orange-500 shadow-sm backdrop-blur">
                <Phone className="h-5 w-5" />
              </div>

              <div className="absolute right-8 bottom-10 rounded-2xl bg-white/80 p-3 text-blue-600 shadow-sm backdrop-blur">
                <MessageSquare className="h-5 w-5" />
              </div>

              <div className="absolute right-36 bottom-28 rounded-2xl bg-white/80 p-3 text-emerald-600 shadow-sm backdrop-blur">
                <UserRound className="h-5 w-5" />
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 via-white to-blue-100 shadow-lg ring-8 ring-white/50">
                <Headphones className="h-16 w-16 text-orange-500" />
              </div>

              <div className="absolute left-1/2 top-[68%] w-full max-w-[280px] -translate-x-1/2 text-center">
                <h3 className="text-xl font-semibold">Talk to our team</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Speak directly with a GTM specialist to explore your growth
                  strategy and support needs.
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-emerald-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Available for consultation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-orange-50 p-3 text-orange-500">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Work with AskGenim</h2>
                  <p className="text-sm text-slate-600">
                    Built for startups that want clearer GTM direction and
                    stronger execution support.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {contactPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-500" />
                    <p className="text-sm text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold">Other contact options</h2>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Mail className="mt-0.5 h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-slate-600">hello@askgenim.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Phone className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-slate-600">
                      Available for scheduled business conversations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <MessageSquare className="mt-0.5 h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-medium">Consultation</p>
                    <p className="text-sm text-slate-600">
                      Share your current GTM challenge and we’ll respond with the
                      next best step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Contact form
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  Tell us about your business needs
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Share a few details about your startup, your goals, and where
                  you need GTM support.
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Enter your company name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your work email"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your GTM goals, challenges, or the support you are looking for"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
                >
                  Submit inquiry
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-6 text-sm text-slate-600">
                Looking to learn GTM instead?{" "}
                <Link
                  href="/geniusnimble"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Explore GeniusNimble
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}