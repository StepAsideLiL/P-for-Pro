import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import JobAgreementFrom from "./forms/JobAgreementFrom";
import OptionCard from "@/components/custom-ui/OptionCard";

const WorkAgreements = () => {
  const agreements = [
    {
      id: "1",
      title: "Full-time",
    },
    {
      id: "2",
      title: "Part-time",
    },
    {
      id: "3",
      title: "intern",
    },
    {
      id: "4",
      title: "Freelance",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Job Agreement</CardTitle>
        <CardDescription>
          Add different job greement types for user to select
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <JobAgreementFrom />

        <div className="space-y-1">
          <h1 className="text-lg font-medium">List of Skills</h1>

          <div className="flex flex-wrap items-center gap-3">
            {agreements.map((agreement) => (
              <OptionCard key={agreement.id} option={agreement} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkAgreements;
