interface Project {
  link: string;
  capa: string;
  title: string;
  techImages: string[];
}

interface ProjectCardProps {
  project: Project; // Defina a propriedade project com o tipo correto
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <li className="rounded-md shadow-md overflow-hidden border border-branco">
      <a href={project.link} target="_blank">
        <img src={project.capa} alt={project.title} className="w-full h-50 object-cover rounded-sm" />
      </a>
      <div className="p-4">
        <h3 className="text-xl font-bold font-Montserrat text-branco">
          {project.title}
        </h3>
        <ul className="flex flex-wrap gap-2 mt-2">
          {project.techImages.map((techImage: string) => (
            <li key={techImage}>
              <img src={techImage} alt={techImage} className="w-10 h-10" />
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ProjectCard;
