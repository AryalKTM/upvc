import { Section, TextUnderline, Title } from "@/app/components";

import Residential from "@/assets/images/residential.png";
import { Project } from "@/domain/models/project";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  const projects: Project[] = [
    { title: "Residential", image: "/images/projects/residential.png" },
    { title: "Commercial Complex", image: "/images/projects/residential.png" },
    { title: "Sustainable Housing", image: "/images/projects/SustainableHousing.png" },
    { title: "Office Spaces", image: "/images/projects/OfficeSpaces.png" },
    { title: "Architectural Marvels", image: "/images/projects/ArchitecturalMarvels.png" },
  ];

  return (
    <Section id="projects ">
      <Title>
        Our Recent <TextUnderline>Projects</TextUnderline>
      </Title>

      <div className="lg:grid lg:grid-cols-4 lg:gap-5 lg:grid-rows-2 mx-auto px-6 lg:px-0 gap-10 mt-16 ">
        {/* {projects.map((project, i) => ( */}
          <div className="col-start-1 col-end-3 hover:shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.94)] transition-all hover:shadow-primary rounded-3xl hover:translate-x-3 hover:-translate-y-1 mb-6 lg:mb-0 cursor-pointer">
            <ProjectCard project={projects[0]} />
          </div>
          <div className="col-start-3 col-end-5 hover:shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.94)] transition-all hover:shadow-primary rounded-2xl hover:translate-x-3 hover:-translate-y-1 mb-6 lg:mb-0 cursor-pointer">
            <ProjectCard project={projects[1]}/>
          </div>
          <div className="col-start-1 col-end-2 hover:shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.94)] transition-all hover:shadow-primary rounded-2xl hover:translate-x-3 hover:-translate-y-1 mb-6 lg:mb-0 cursor-pointer">
            <ProjectCard project={projects[2]}/>
          </div>
          <div className="col-start-2 col-end-3 hover:shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.94)] transition-all hover:shadow-primary rounded-2xl hover:translate-x-3 hover:-translate-y-1 mb-6 lg:mb-0 cursor-pointer">
            <ProjectCard project={projects[3]}/>
          </div>
          <div className="col-start-3 col-end-5 hover:shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.94)] transition-all hover:shadow-primary rounded-2xl hover:translate-x-3 hover:-translate-y-1 cursor-pointer">
            <ProjectCard project={projects[4]}/>
          </div>
        {/* ))} */}
      </div>
    </Section>
  );
};

export default Projects;
