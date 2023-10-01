import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const AppliedJobs = () => {
  const appliedJobs = [
    {
      id: "1",
      jobTitle: "React Developer",
      companyName: "A Company",
      skills: ["React", "Nextjs", "TailwindCSS"],
      jobRole: "Front-end Developer",
      employmentStatus: "Full-time",
      workPlace: "On-site",
      location: "Dhaka",
      salary: [20000, 40000],
    },
    {
      id: "2",
      jobTitle: "React Developer",
      companyName: "A Company",
      skills: ["React", "Nextjs", "TailwindCSS"],
      jobRole: "Front-end Developer",
      employmentStatus: "Full-time",
      workPlace: "On-site",
      location: "Dhaka",
      salary: [20000, 40000],
    },
  ];

  return (
    <div>
      {appliedJobs.map((job) => (
        <AppliedJobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

const AppliedJobCard = ({
  job,
}: {
  job: {
    id: string;
    jobTitle: string;
    companyName: string;
    skills: string[];
    jobRole: string;
    employmentStatus: string;
    workPlace: string;
    location: string;
    salary: number[];
  };
}) => {
  const {
    id,
    jobTitle,
    companyName,
    skills,
    jobRole,
    employmentStatus,
    workPlace,
    location,
    salary,
  } = job;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{jobTitle}</CardTitle>
        <CardDescription>{companyName}</CardDescription>
      </CardHeader>

      <CardContent>
        <div>
          <p>Job Role: {jobRole}</p>
          <p>Skills: {skills.join(", ")}</p>
          <p>Employment Status: {employmentStatus}</p>
          <p>Work Place: {workPlace}</p>
          <p>Location: {location}</p>
          <p>
            Salary: {salary[0].toLocaleString()} - {salary[1].toLocaleString()}
          </p>
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button variant={"outline"}>Details</Button>
      </CardFooter>
    </Card>
  );
};

export default AppliedJobs;
