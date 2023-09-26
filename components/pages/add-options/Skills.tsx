import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import SkillFrom from "./forms/SkillFrom";
import OptionCard from "@/components/custom-ui/OptionCard";

const Skills = () => {
  const skills = [
    {
      id: "1",
      title: "React",
    },
    {
      id: "2",
      title: "Nextjs",
    },
    {
      id: "3",
      title: "UI/UX",
    },
    {
      id: "4",
      title: "Account",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Skills</CardTitle>
        <CardDescription>
          Add different skill sets for user to select
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <SkillFrom />

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

export default Skills;
