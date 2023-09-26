import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import OptionCard from "@/components/custom-ui/OptionCard";
import CompanyCategoryForm from "./forms/CompanyCategoryForm";

const CompanyCategories = () => {
  const skills = [
    {
      id: "1",
      title: "Information Technology",
    },
    {
      id: "2",
      title: "Manufacturing",
    },
    {
      id: "3",
      title: "Entertainment",
    },
    {
      id: "4",
      title: "Gaming",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Company Categories</CardTitle>
        <CardDescription>
          Add different company categories for company to select
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <CompanyCategoryForm />

        <div className="space-y-1">
          <h1 className="text-lg font-medium">List of Skills</h1>

          <div className="flex flex-wrap items-center gap-3">
            {skills.map((skill) => (
              <OptionCard key={skill.id} option={skill} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCategories;
