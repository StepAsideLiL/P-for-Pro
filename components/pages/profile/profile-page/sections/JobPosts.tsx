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

const JobPosts = () => {
  const jobs = [
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
      deadline: "20-11-2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est vero praesentium eaque tenetur dicta ipsum eos! Aliquid quam itaque labore pariatur quasi ea rem, reprehenderit quod nemo recusandae laudantium iure. Sit quidem quam dignissimos a quis error sapiente itaque explicabo delectus eaque laboriosam tenetur, accusamus fuga quibusdam quia voluptatem doloribus nulla, amet et, saepe eligendi doloremque tempora quod? Officia obcaecati explicabo praesentium corporis, quidem placeat in expedita impedit repellendus excepturi dicta. Quos sint, aliquid veniam quas animi delectus? Ratione ex, illo nesciunt quasi, odio laudantium illum nemo vero voluptatem possimus assumenda perspiciatis neque tempora architecto qui omnis id molestiae!",
    },
  ];

  return (
    <div className="space-y-2">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

const JobCard = ({
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
    deadline: string;
    description: string;
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
    deadline,
    description,
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

        <div>{description}</div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button>Apply</Button>
        <Button variant={"outline"}>Edit</Button>
      </CardFooter>
    </Card>
  );
};

export default JobPosts;
