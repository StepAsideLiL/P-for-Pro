import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PenBox, Trash } from "lucide-react";
import React from "react";

const Skills = () => {
  const skills = [
    {
      id: "1",
      title: "React",
      level: "Expert",
    },
    {
      id: "2",
      title: "TailwindCSS",
      level: "Intermediate",
    },
    {
      id: "3",
      title: "Typescript",
      level: "Basic",
    },
    {
      id: "4",
      title: "Nextjs",
      level: "Expert",
    },
    {
      id: "5",
      title: "Shadcn",
      level: "Intermediate",
    },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

const SkillCard = ({
  skill,
}: {
  skill: { id: string; title: string; level: string };
}) => {
  return (
    <div className="flex items-center gap-1 p-2 border rounded border-muted-foreground">
      <span>{skill.title}</span>

      <Separator orientation="vertical" className="h-5" />

      <Button
        variant={"ghost"}
        className="h-0 p-0 text-muted-foreground hover:text-primary"
      >
        <PenBox size={"16px"} />
      </Button>

      <Separator orientation="vertical" className="h-5" />

      <Button
        variant={"ghost"}
        className="h-0 p-0 text-muted-foreground hover:text-primary"
      >
        <Trash size={"16px"} />
      </Button>
    </div>
  );
};

export default Skills;
