import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CourseAndCertification = () => {
  const courses = [
    {
      id: "1",
      courseName: "Web Developement",
      institutionName: "P Hero",
      startDate: "12-03-2022",
      finishDate: "19-12-2022",
      certificateLink: "https://google.com",
      description:
        "lorem ipsum dolor sit amet con et just sed diam non pro id el elementum",
    },
  ];

  return (
    <div className="space-y-2">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

const CourseCard = ({
  course,
}: {
  course: {
    id: string;
    courseName: string;
    institutionName: string;
    startDate: string;
    finishDate: string;
    certificateLink: string;
    description: string;
  };
}) => {
  const {
    id,
    courseName,
    institutionName,
    startDate,
    finishDate,
    certificateLink,
    description,
  } = course;

  return (
    <div>
      <div>
        <span>
          {startDate} - {finishDate}
        </span>
      </div>

      <h1 className="text-xl font-medium">{courseName}</h1>
      <p className="font-medium">{institutionName}</p>

      <Button variant={"link"} asChild className="h-0 p-0">
        <Link href={certificateLink}>Certificate</Link>
      </Button>

      <p className="text-sm">{description}</p>
    </div>
  );
};

export default CourseAndCertification;
