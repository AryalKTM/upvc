import { Section, TextUnderline, Title } from "@/app/components";

import Residential from "@/assets/images/residential.png";
import { Project } from "@/domain/models/project";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  const projects: Project[] = [
    { title: "Residential", image: "/images/projects/residential.png" },
    { title: "Residential", image: "/images/projects/residential.png" },
    { title: "Residential", image: "/images/projects/residential.png" },
    { title: "Residential", image: "/images/projects/residential.png" },
  ];

  return (
    <Section id="projects">
      <Title>
        Our Recent <TextUnderline>Projects</TextUnderline>
      </Title>

      <div className="flex flex-row flex-wrap mx-auto  mt-16">
        {projects.map((project, i) => (
          <div key={project.title + "-" + i} className="p-5">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
