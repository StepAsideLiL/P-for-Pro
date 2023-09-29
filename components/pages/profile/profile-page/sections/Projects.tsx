import React from "react";

const Projects = () => {
  const projects = [
    {
      id: "1",
      projectName: "P for Pro",
      startDate: "16-09-2023",
      finishDate: "18-10-2023",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo harum obcaecati sint optio natus expedita eveniet magni illo voluptate nam at odit minus, eum reprehenderit vel corrupti, exercitationem delectus soluta sed incidunt. Repellendus, est dolorum. Veniam, magnam?",
    },
  ];

  return (
    <div className="space-y-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

const ProjectCard = ({
  project,
}: {
  project: {
    id: string;
    projectName: string;
    startDate: string;
    finishDate: string;
    description: string;
  };
}) => {
  const { id, projectName, startDate, finishDate, description } = project;

  return (
    <div>
      <div>
        <span>
          {startDate} - {finishDate}
        </span>
      </div>

      <h1 className="text-xl font-medium">{projectName}</h1>

      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Projects;
