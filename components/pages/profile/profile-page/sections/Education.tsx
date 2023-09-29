import React from "react";

const Education = () => {
  const educations = [
    {
      id: "1",
      institutionName: "BD University",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      startDate: "12-02-2019",
      finishDate: "28-12-2023",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto vitae, corrupti quidem distinctio aliquid tempora esse modi suscipit omnis dolorum?",
      grade: "3.22",
      maxGrade: "4",
    },
    {
      id: "2",
      institutionName: "BD College",
      degree: "",
      fieldOfStudy: "Science",
      startDate: "24-11-2016",
      finishDate: "13-08-2018",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto vitae, corrupti quidem distinctio aliquid tempora esse modi suscipit omnis dolorum?",
      grade: "5",
      maxGrade: "5",
    },
  ];

  return (
    <div className="space-y-2">
      {educations.map((education) => (
        <EducationCard key={education.id} education={education} />
      ))}
    </div>
  );
};

const EducationCard = ({
  education,
}: {
  education: {
    id: string;
    institutionName: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    finishDate: string;
    grade: string;
    description: string;
    maxGrade: string;
  };
}) => {
  const {
    id,
    institutionName,
    degree,
    fieldOfStudy,
    startDate,
    finishDate,
    description,
    grade,
    maxGrade,
  } = education;

  return (
    <div>
      <div>
        <span>
          {startDate} - {finishDate}
        </span>
      </div>

      <h1 className="text-xl font-medium">{institutionName}</h1>
      {degree || fieldOfStudy ? (
        <p className="font-medium">
          {degree ? `${degree} - ${fieldOfStudy}` : `${fieldOfStudy}`}
        </p>
      ) : (
        ""
      )}

      <p>
        {grade} out of {maxGrade}
      </p>

      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Education;
