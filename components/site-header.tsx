import Link from "next/link";

type SiteHeaderProps = {
  showBackHome?: boolean;
};

export default function SiteHeader({
  showBackHome = false,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
            Genim
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <Link href="/pricing" className="transition hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/courses" className="transition hover:text-blue-600">
              Courses
            </Link>
            <Link href="/contact" className="transition hover:text-green-500">
              Contact
            </Link>
            <Link href="/services" className="transition hover:text-orange-500">
              Services
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {showBackHome && (
            <Link
              href="/"
              className="hidden rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:inline-flex"
            >
              Home
            </Link>
          )}

          <Link
            href="/login"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}