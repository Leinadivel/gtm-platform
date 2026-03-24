import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">GTM Platform</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              A modern platform for GTM learning, recruitment, and execution.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Platform
            </h4>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <Link href="/" className="block hover:text-slate-900">
                Home
              </Link>
              <Link href="/login" className="block hover:text-slate-900">
                Login
              </Link>
              <Link href="/register" className="block hover:text-slate-900">
                Register
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Brands
            </h4>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <Link href="/geniusnimble" className="block hover:text-blue-600">
                GeniusNimble
              </Link>
              <Link href="/askgenim" className="block hover:text-orange-500">
                AskGenim
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Focus
            </h4>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>GTM education</p>
              <p>Talent development</p>
              <p>Startup execution support</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 GeniusNimble Platform. Built for modern GTM growth.
        </div>
      </div>
    </footer>
  );
}