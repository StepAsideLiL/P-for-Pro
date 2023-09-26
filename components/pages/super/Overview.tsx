import AdminOverviewCard from "@/components/custom-ui/AdminOverviewCard";
import { Briefcase, Building2, Pen, User, UserSquare } from "lucide-react";

const Overview = () => {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-medium">Total Overview</h1>

      <div className="grid w-full grid-cols-2 gap-5 lg:grid-cols-4">
        <AdminOverviewCard
          title="Users"
          number={1234087}
          icon={<User size="24px" />}
        />
        <AdminOverviewCard
          title="Posts"
          number={123000}
          icon={<Pen size="24px" />}
        />
        <AdminOverviewCard
          title="Open Jobs"
          number={140500}
          icon={<Briefcase size="24px" />}
        />
        <AdminOverviewCard
          title="Recruiters"
          number={10890}
          icon={<UserSquare size="24px" />}
        />
        <AdminOverviewCard
          title="Total Company"
          number={5890}
          icon={<Building2 size="24px" />}
        />
      </div>
    </section>
  );
};

export default Overview;
