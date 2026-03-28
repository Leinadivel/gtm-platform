import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  CheckCircle2,
  Filter,
  GraduationCap,
  Layers3,
  PlayCircle,
  Search,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const categoryFilters = [
  "All Courses",
  "Sales",
  "Account Management",
  "Negotiation",
  "Communication",
  "Customer Success",
  "Leadership",
];

const featuredCourses = [
  {
    title: "Sales Fundamentals for Modern Professionals",
    level: "Beginner",
    duration: "6 modules",
    category: "Sales",
    description:
      "Build a strong understanding of the core principles behind effective selling, buyer conversations, and consistent execution.",
    accent: "blue" as const,
  },
  {
    title: "Account Growth and Relationship Development",
    level: "Intermediate",
    duration: "8 modules",
    category: "Account Management",
    description:
      "Learn how to manage client relationships better, strengthen retention, and grow account value through structured engagement.",
    accent: "orange" as const,
    featured: true,
  },
  {
    title: "AI-Assisted Sales Productivity",
    level: "Intermediate",
    duration: "5 modules",
    category: "Sales",
    description:
      "Learn how AI can support sales preparation, workflow efficiency, communication, and smarter day-to-day execution.",
    accent: "blue" as const,
  },
];

const courseCards = [
  {
    title: "Prospecting and Pipeline Building",
    tag: "Sales",
    level: "Beginner",
    duration: "4 modules",
    description:
      "Learn how to approach outreach, identify opportunities, and build a healthier pipeline with more structure.",
    accent: "blue" as const,
  },
  {
    title: "Discovery and Qualification Skills",
    tag: "Sales",
    level: "Beginner",
    duration: "5 modules",
    description:
      "Build stronger discovery habits, qualify opportunities better, and ask more useful questions during sales conversations.",
    accent: "orange" as const,
  },
  {
    title: "Strategic Account Management",
    tag: "Account Management",
    level: "Intermediate",
    duration: "6 modules",
    description:
      "Develop the skills required to manage important accounts, maintain trust, and identify opportunities for long-term growth.",
    accent: "blue" as const,
  },
  {
    title: "Negotiation for Revenue Growth",
    tag: "Negotiation",
    level: "Intermediate",
    duration: "6 modules",
    description:
      "Improve how you prepare for negotiations, manage objections, and close discussions with more confidence and clarity.",
    accent: "orange" as const,
  },
  {
    title: "Professional Communication for Sales Teams",
    tag: "Communication",
    level: "Beginner",
    duration: "4 modules",
    description:
      "Strengthen verbal and written communication skills for outreach, meetings, account handling, and team collaboration.",
    accent: "blue" as const,
  },
  {
    title: "Customer Success and Retention Excellence",
    tag: "Customer Success",
    level: "Intermediate",
    duration: "7 modules",
    description:
      "Learn how to improve retention, support stronger client outcomes, and create better post-sale experiences.",
    accent: "orange" as const,
  },
  {
    title: "Sales Performance Habits",
    tag: "Sales",
    level: "Beginner",
    duration: "4 modules",
    description:
      "Develop stronger habits for consistency, confidence, follow-through, and continuous improvement in your sales journey.",
    accent: "blue" as const,
  },
  {
    title: "Leadership for Sales Growth",
    tag: "Leadership",
    level: "Intermediate",
    duration: "7 modules",
    description:
      "Support stronger team performance through leadership habits that improve accountability, coaching, and sales culture.",
    accent: "orange" as const,
  },
  {
    title: "Client Retention and Expansion Strategy",
    tag: "Account Management",
    level: "Intermediate",
    duration: "5 modules",
    description:
      "Explore ways to protect revenue, deepen account engagement, and identify practical opportunities for expansion.",
    accent: "blue" as const,
  },
];

const learningBenefits = [
  {
    title: "Structured course journeys",
    description:
      "Learners move through clearer development paths instead of scattered training experiences.",
    icon: <Layers3 className="h-5 w-5" />,
    accent: "blue" as const,
  },
  {
    title: "Practical sales growth focus",
    description:
      "Course content is positioned around real sales capability, account development, and performance improvement.",
    icon: <Target className="h-5 w-5" />,
    accent: "orange" as const,
  },
  {
    title: "Built for individuals and companies",
    description:
      "The learning experience is designed to support both personal development and team-wide enablement.",
    icon: <Users className="h-5 w-5" />,
    accent: "blue" as const,
  },
];

const audiencePaths = [
  {
    title: "For Individual Learners",
    description:
      "Perfect for people who want to build confidence, strengthen sales knowledge, and grow through a more guided learning path.",
    bullets: [
      "Personal learning access",
      "Progress-driven experience",
      "Flexible subscription options",
    ],
    href: "/register/individual",
    cta: "Start as an Individual",
    accent: "blue" as const,
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: "For Companies",
    description:
      "Ideal for organisations that want a more structured way to support staff learning and sales capability development.",
    bullets: [
      "Multi-staff onboarding path",
      "Company-based learning access",
      "Per-staff subscription structure",
    ],
    href: "/register/company",
    cta: "Start as a Company",
    accent: "orange" as const,
    icon: <Building2 className="h-6 w-6" />,
  },
];

function FeaturedCourseCard({
  title,
  level,
  duration,
  category,
  description,
  accent,
  featured,
}: {
  title: string;
  level: string;
  duration: string;
  category: string;
  description: string;
  accent: "blue" | "orange";
  featured?: boolean;
}) {
  const isOrange = accent === "orange";

  return (
    <div
      className={`relative rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7 ${
        featured
          ? isOrange
            ? "border-orange-300 ring-1 ring-orange-100"
            : "border-blue-300 ring-1 ring-blue-100"
          : "border-slate-200"
      }`}
    >
      {featured && (
        <div
          className={`absolute -top-3 left-6 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg ${
            isOrange ? "bg-orange-500" : "bg-blue-600"
          }`}
        >
          <Sparkles className="mr-1.5 h-3.5 w-3.5" />
          Featured Course
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            isOrange
              ? "bg-orange-50 text-orange-600"
              : "bg-blue-50 text-blue-600"
          }`}
        >
          {category}
        </span>
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {level}
        </span>
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {duration}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>

      <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <PlayCircle className="h-4 w-4" />
          Structured learning path
        </div>

        <Link
          href="/register/individual"
          className={`inline-flex items-center gap-2 text-sm font-semibold ${
            isOrange ? "text-orange-500" : "text-blue-600"
          }`}
        >
          Access course
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function CourseCard({
  title,
  tag,
  level,
  duration,
  description,
  accent,
}: {
  title: string;
  tag: string;
  level: string;
  duration: string;
  description: string;
  accent: "blue" | "orange";
}) {
  const isOrange = accent === "orange";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            isOrange
              ? "bg-orange-50 text-orange-600"
              : "bg-blue-50 text-blue-600"
          }`}
        >
          {tag}
        </span>
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {level}
        </span>
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {duration}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>

      <div className="mt-6 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-sm text-slate-500">
          <BookOpen className="h-4 w-4" />
          Course preview
        </div>

        <Link
          href="/pricing"
          className={`inline-flex items-center gap-2 text-sm font-semibold ${
            isOrange ? "text-orange-500" : "text-blue-600"
          }`}
        >
          Learn more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function AudiencePathCard({
  title,
  description,
  bullets,
  href,
  cta,
  accent,
  icon,
}: {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
  accent: "blue" | "orange";
  icon: React.ReactNode;
}) {
  const isOrange = accent === "orange";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`inline-flex rounded-2xl p-3 ${
          isOrange
            ? "bg-orange-50 text-orange-500"
            : "bg-blue-50 text-blue-600"
        }`}
      >
        {icon}
      </div>

      <h3
        className={`mt-5 text-2xl font-semibold ${
          isOrange ? "text-orange-500" : "text-blue-600"
        }`}
      >
        {title}
      </h3>

      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>

      <div className="mt-6 grid gap-3">
        {bullets.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <span className="text-sm text-slate-700">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href={href}
          className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold text-white transition ${
            isOrange
              ? "bg-orange-500 hover:bg-orange-400"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <BadgeCheck className="h-4 w-4" />
              Explore Genim courses
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Courses built for practical
              <span className="block bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                sales capability growth
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Genim is designed to help individuals and companies access a more
              structured learning experience across sales, account management,
              communication, leadership, and performance development.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/register/individual"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-500"
              >
                Start learning
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                View pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
              <div className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-600" />
                Structured learning paths
              </div>
              <div className="inline-flex items-center gap-2">
                <Bot className="h-4 w-4 text-blue-600" />
                AI-powered experience
              </div>
              <div className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600" />
                Built for individuals and teams
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Featured learning paths
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Highlighted courses that position Genim as a serious sales learning
            platform while still leaving room to connect real course data later.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <FeaturedCourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight">
                Browse by category
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Clear category-based discovery for different areas of sales
                growth. This UI can later be connected to real filtering logic.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
              <Filter className="h-4 w-4" />
              Category filters ready for logic
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                  <Search className="h-4 w-4" />
                </span>
                <input
                  type="text"
                  placeholder="Search courses"
                  className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {categoryFilters.map((category, index) => (
                  <button
                    key={category}
                    type="button"
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      index === 0
                        ? "bg-blue-600 text-white"
                        : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courseCards.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            What makes the learning experience stronger
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Genim is being positioned as more than just a course website. The
            goal is a modern learning environment built around useful sales
            growth and practical development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {learningBenefits.map((item) => {
            const isOrange = item.accent === "orange";

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span
                  className={`inline-flex rounded-2xl p-3 ${
                    isOrange
                      ? "bg-orange-50 text-orange-500"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {item.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Choose the path that fits you
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Genim supports both personal learning and company-wide staff
              enablement, so the course experience can branch naturally into the
              right onboarding path.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {audiencePaths.map((path) => (
              <AudiencePathCard key={path.title} {...path} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12 text-center text-white shadow-lg">
            <h2 className="text-3xl font-semibold tracking-tight">
              Start exploring Genim courses today
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
              Whether you are learning alone or enabling a team, Genim is being
              built to give you a clearer, stronger, and more modern way to grow
              sales capability across important areas of performance.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/register/individual"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Start Individual Trial
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/register/company"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
              >
                Start Company Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-blue-100">
              <div className="inline-flex items-center gap-2">
                <Star className="h-4 w-4" />
                7-day free trial available
              </div>
              <div className="inline-flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Built for real sales capability growth
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}