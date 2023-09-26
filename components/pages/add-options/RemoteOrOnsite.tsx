import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import OptionCard from "@/components/custom-ui/OptionCard";
import RemoteOrOnsiteForm from "./forms/RemoteOrOnsiteForm";

const RemoteOrOnsite = () => {
  const remoteOptions = [
    {
      id: "1",
      title: "Remote",
    },
    {
      id: "2",
      title: "On-site",
    },
    {
      id: "3",
      title: "Hybrid",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Remote/On-site</CardTitle>
        <CardDescription>
          Add work location for recruiter to select from
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <RemoteOrOnsiteForm />

        <div className="space-y-1">
          <h1 className="text-lg font-medium">List of Skills</h1>

          <div className="flex flex-wrap items-center gap-3">
            {remoteOptions.map((remoteOption) => (
              <OptionCard key={remoteOption.id} option={remoteOption} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RemoteOrOnsite;
