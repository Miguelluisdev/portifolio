import React from "react";
import { ProjectInfos } from "../../modules/ProjectInfos";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  project: {
    link: string;
    capa: string;
    title: string;
    techImages: string[];
  }
}

const ProjectList: React.FC<ProjectListProps> = () => {
  return (
    <div className="container mx-auto pt-60   ">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ProjectInfos.map((projectInfo) => (
          <ProjectCard key={projectInfo.title} project={projectInfo} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
