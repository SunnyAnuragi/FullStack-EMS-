import {
  ArrowRightIcon,
  CalendarIcon,
  DollarSignIcon,
  FileTextIcon,
} from "lucide-react";
import { createElement } from "react";
import { Link } from "react-router-dom";

// Local StatCard component for consistency
const StatCard = ({ icon, title, subtitle, value }) => (
  <div className="card card-hover p-5 sm:p-6 relative overflow-hidden group flex items-center justify-between shadow-sm rounded-lg">
    <div>
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-indigo-600/30 group-hover:bg-indigo-500/70" />
      <p className="text-sm font-medium text-slate-700 group-hover:text-indigo-600">
        {title}
      </p>
      <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
      <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
    </div>

    {createElement(icon, {
      className:
        "size-10 p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-200",
    })}
  </div>
);

const EmployeeDashboard = ({ data }) => {
  const emp = data.employee;

  const cards = [
    {
      icon: CalendarIcon,
      value: data.currentMonthAttendance,
      title: "Days Present",
      subtitle: "This month",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      title: "Pending Leaves",
      subtitle: "Awaiting approval",
    },
    {
      icon: DollarSignIcon,
      value: data.latestPayslip
        ? `$${data.latestPayslip.netSalary?.toLocaleString()}`
        : "N/A",
      title: "Latest Payslip",
      subtitle: "Most recent payout",
    },
  ];
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Welcome, {emp?.firstName}!</h1>
        <p className="page-subtitle">
          {emp?.position} - {emp?.department || "No Department"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
        {cards.map((card, index) => (
          <StatCard
            key={index}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            value={card.value}
          />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/attendance"
          className="btn-primary text-center inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-500 hover:shadow-md"
        >
          Mark Attendance <ArrowRightIcon className="w-4 h-4" />
        </Link>

        <Link
          to="/leave"
          className="btn-secondary text-center focus-visible:ring-2 focus-visible:ring-indigo-500 hover:shadow-md"
        >
          Apply for Leave
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
