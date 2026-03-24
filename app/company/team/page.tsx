import Link from "next/link";
import {
  Building2,
  Mail,
  Plus,
  ShieldCheck,
  UserPlus,
  Users,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Growth Lead",
    status: "Active",
    email: "sarah@company.com",
  },
  {
    name: "Michael Reed",
    role: "Marketing Manager",
    status: "Active",
    email: "michael@company.com",
  },
  {
    name: "Tolu Adebayo",
    role: "Operations Associate",
    status: "Pending",
    email: "tolu@company.com",
  },
  {
    name: "Grace Ekanem",
    role: "Revenue Analyst",
    status: "Active",
    email: "grace@company.com",
  },
];

const teamStats = [
  { label: "Total Team Members", value: "24" },
  { label: "Active Learners", value: "18" },
  { label: "Pending Invites", value: "03" },
];

export default function CompanyTeamPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader showBackHome />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                <Users className="h-4 w-4 text-orange-500" />
                Company team
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Manage your team learning environment.
              </h1>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                View team members, support access across your organisation, and
                prepare your company workspace for structured learning at scale.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {teamStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Team members</h2>
                <p className="mt-1 text-sm text-slate-600">
                  A view of the people currently connected to your company
                  learning workspace.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                <UserPlus className="h-4 w-4" />
                Invite team member
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {teamMembers.map((member) => (
                <div
                  key={member.email}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {member.role}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                        <Mail className="h-4 w-4 text-blue-600" />
                        {member.email}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          member.status === "Active"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {member.status}
                      </span>

                      <button
                        type="button"
                        className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="rounded-2xl bg-orange-50 p-3 text-orange-500 w-fit">
                <Building2 className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-bold">Organisation overview</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Your team workspace is designed to support controlled access,
                learning visibility, and a more organised capability-building
                process.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600 w-fit">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-bold">Team access controls</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                As backend functionality is connected, this area will support
                live invitations, role control, and real member management.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-bold">Quick links</h2>

              <div className="mt-5 space-y-3">
                <Link
                  href="/company/dashboard"
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Return to dashboard
                </Link>
                <Link
                  href="/courses"
                  className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  View learning catalogue
                </Link>
                <button
                  type="button"
                  className="flex w-full items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  <Plus className="h-4 w-4" />
                  Add team member
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}