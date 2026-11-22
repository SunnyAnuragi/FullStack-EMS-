import {
  UsersRoundIcon,
  ShieldCheckIcon,
  Clock3Icon,
  WalletCardsIcon,
  ArrowUpRightIcon,
} from "lucide-react";

const LoginLeftSide = () => {
  return (
    <section className="hidden md:flex md:w-1/2 h-screen relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-900" />

      <div className="absolute -top-40 -left-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 flex flex-col justify-between w-full h-full px-10 py-8 lg:px-14 xl:px-16">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-900/40">
            <UsersRoundIcon className="w-5 h-5 text-white" />
          </div>

          <div>
            <h2 className="text-white font-semibold tracking-wide">
              Workforce
            </h2>
            <p className="text-xs text-indigo-300 tracking-wider">
              MANAGEMENT SYSTEM
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-xl my-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-400/20 bg-indigo-400/10 text-indigo-200 text-xs font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            SMARTER WORKFORCE MANAGEMENT
          </div>

          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Manage your team.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">
              Simplify your work.
            </span>
          </h1>

          <p className="text-slate-300 text-sm lg:text-base leading-7 max-w-lg">
            Everything your organization needs to manage employees, track
            attendance, handle payroll, and keep your workforce connected.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <div className="w-9 h-9 shrink-0 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5 text-indigo-300" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Secure Access</p>
                <p className="text-xs text-slate-400">Role-based portals</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <div className="w-9 h-9 shrink-0 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <Clock3Icon className="w-5 h-5 text-violet-300" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Attendance</p>
                <p className="text-xs text-slate-400">Effortless tracking</p>
              </div>
            </div>
          </div>

          {/* Compact dashboard preview */}
          <div className="mt-5 max-w-md rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-4 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[10px] tracking-wider text-slate-400">
                  WORKSPACE OVERVIEW
                </p>
                <p className="text-white text-sm font-semibold mt-1">
                  Your workforce, at a glance
                </p>
              </div>

              <ArrowUpRightIcon className="w-5 h-5 text-indigo-300" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-white/[0.06] p-2.5 flex items-center gap-2">
                <UsersRoundIcon className="w-4 h-4 shrink-0 text-indigo-300" />
                <span className="text-xs text-slate-300">Team Management</span>
              </div>

              <div className="rounded-lg bg-white/[0.06] p-2.5 flex items-center gap-2">
                <WalletCardsIcon className="w-4 h-4 shrink-0 text-violet-300" />
                <span className="text-xs text-slate-300">Payroll</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-4 flex items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            Built for better workforce management.
          </p>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
};

export default LoginLeftSide;
