interface Project {
  link: string;
  capa: string;
  title: string;
  techImages: string[];
  description: string;
}

interface ProjectCardProps {
  project: Project; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <li className="rounded-md shadow-md overflow-hidden border border-branco hover:border-az hover:bg-azul-celeste animate-fade-left animate-once animate-duration-[2000ms] animate-ease-linear">
  
        <img src={project.capa} alt={project.title} className="w-full h-50 object-cover rounded-sm" />
      
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
        <p className="text-md text-branco font-Montserrat" >{project.description}</p>
        <a href={project.link} target="_blank" ><button className="bg-AzulEscuro shadow-sm shadow-ab hover:shadow-AzulEscuro text-white font-bold py-2 px-4 rounded-full w-36 hover:bg-gradient-to-r from-azul-celeste to-ab flex flex-row justify-around items-center animate-fade-right mt-5 hover:animate-wiggle animate-once animate-duration-[2000ms] animate-delay-300 animate-ease-out animate-normal" >Repositorio do Site</button></a>
        
      </div>
    </li>
  );
};

export default ProjectCard;
