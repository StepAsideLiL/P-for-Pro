import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import JobRoleFrom from "./forms/JobRoleForm";
import OptionCard from "@/components/custom-ui/OptionCard";

const JobRoles = () => {
  const roles = [
    {
      id: "1",
      title: "Front-end Developer",
    },
    {
      id: "2",
      title: "Full-stack Developer",
    },
    {
      id: "3",
      title: "UI/UX Designer",
    },
    {
      id: "4",
      title: "Accountant",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Job Roles</CardTitle>
        <CardDescription>
          Add different job roles for user to select
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <JobRoleFrom />

        <div className="space-y-1">
          <h1 className="text-lg font-medium">List of Skills</h1>

          <div className="flex flex-wrap items-center gap-3">
            {roles.map((role) => (
              <OptionCard key={role.id} option={role} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobRoles;
