import {
  ArrowRightIcon,
  ShieldCheckIcon,
  UserRoundIcon,
  UsersIcon,
} from "lucide-react";
import LoginLeftSide from "../components/LoginLeftSide";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import Loading from "../components/Loading";

const LoginLanding = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;
  if (user) return <Navigate to="/" />;

  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description:
        "Manage employees, departments, payroll, and system configurations.",
      icon: ShieldCheckIcon,
      label: "ADMINISTRATOR ACCESS",
      iconStyle: "bg-indigo-100 text-indigo-600",
      hoverStyle: "group-hover:border-indigo-300",
      arrowStyle: "group-hover:text-indigo-600",
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description:
        "View your profile, track attendance, request time off, and access payslips.",
      icon: UserRoundIcon,
      label: "EMPLOYEE ACCESS",
      iconStyle: "bg-sky-100 text-sky-600",
      hoverStyle: "group-hover:border-sky-300",
      arrowStyle: "group-hover:text-sky-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <LoginLeftSide />

      <main className="relative w-full md:w-1/2 min-h-screen flex items-center justify-center px-5 py-12 sm:px-10 lg:px-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-28 -right-28 w-80 h-80 rounded-full bg-indigo-50/70 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -left-28 w-72 h-72 rounded-full bg-sky-50/70 blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-md animate-fade-in">
          {/* Brand label */}

          {/* Header */}
          <div className="mb-9">

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
              Welcome Back
            </h1>

            <p className="text-sm sm:text-base leading-7 text-slate-500 max-w-sm">
              Your workspace, all in one place. Choose your portal to continue
              securely.
            </p>
          </div>

          {/* Portal cards */}
          <div className="space-y-4">
            {portalOptions.map((portal) => {
              const PortalIcon = portal.icon;

              return (
                <Link
                  key={portal.to}
                  to={portal.to}
                  className={`group block rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${portal.hoverStyle}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${portal.iconStyle}`}
                    >
                      <PortalIcon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold tracking-widest text-slate-400">
                        {portal.label}
                      </span>

                      <h2 className="text-lg font-semibold text-slate-800 mt-1 mb-1 group-hover:text-indigo-600 transition-colors">
                        {portal.title}
                      </h2>

                      <p className="text-sm leading-6 text-slate-500">
                        {portal.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="w-9 h-9 shrink-0 rounded-full bg-slate-50 flex items-center justify-center mt-3 group-hover:bg-indigo-50 transition-colors">
                      <ArrowRightIcon
                        className={`w-4 h-4 text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 ${portal.arrowStyle}`}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Security note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheckIcon className="w-4 h-4 text-emerald-500" />
            <span>Your account and data are securely protected.</span>
          </div>

          {/* Footer */}
          <p className="mt-10 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Employee Management System
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginLanding;
