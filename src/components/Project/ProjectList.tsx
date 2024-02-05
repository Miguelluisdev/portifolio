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
    <div className="container mx-auto pt-56 ">
      <div>
        <h1 className='text-2xl font-bold mb-4 font-Montserrat' >Meus Projetos</h1>
        <span className='text-md mb-4 font-Montserrat'>Alguns projetos os quais tive a oportunidade de atuar para por em pratica meus aprendizados e meus conhecimentos.</span>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ProjectInfos.map((projectInfo) => (
          <ProjectCard key={projectInfo.title} project={projectInfo} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
