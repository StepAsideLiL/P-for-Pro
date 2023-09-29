import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: "1",
      institutionName: "Company One",
      startDate: "12-02-2015",
      finishDate: "23-05-2016",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto vitae, corrupti quidem distinctio aliquid tempora esse modi suscipit omnis dolorum?",
      jobRole: "Front-end Developer",
      workAgreement: "Full-time",
    },
    {
      id: "2",
      institutionName: "Company Two",
      startDate: "04-07-2016",
      finishDate: "19-04-2018",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto vitae, corrupti quidem distinctio aliquid tempora esse modi suscipit omnis dolorum?",
      jobRole: "Full-stack Developer",
      workAgreement: "Full-time",
    },
  ];

  return (
    <div className="space-y-2">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

const ExperienceCard = ({
  experience,
}: {
  experience: {
    id: string;
    institutionName: string;
    startDate: string;
    finishDate: string;
    description: string;
    jobRole: string;
    workAgreement: string;
  };
}) => {
  const {
    institutionName,
    startDate,
    finishDate,
    description,
    jobRole,
    workAgreement,
  } = experience;

  return (
    <div>
      <div>
        <span>
          {startDate} - {finishDate}
        </span>
      </div>

      <h1 className="text-xl font-medium">{institutionName}</h1>
      <p className="font-medium">{jobRole}</p>

      <p>{workAgreement}</p>

      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Experience;
