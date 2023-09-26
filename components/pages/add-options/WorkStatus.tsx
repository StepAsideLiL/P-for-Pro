import OptionCard from "@/components/custom-ui/OptionCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WorkStatusForm from "./forms/WorkStatusForm";

const WorkStatus = () => {
  const skills = [
    {
      id: "1",
      title: "Open-to-Work",
    },
    {
      id: "2",
      title: "Hiring",
    },
    {
      id: "3",
      title: "Hunting",
    },
    {
      id: "4",
      title: "Not-Looking",
    },
    {
      id: "5",
      title: "Employed",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Status</CardTitle>
        <CardDescription>
          Add different work status for user to select
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <WorkStatusForm />

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

export default WorkStatus;
