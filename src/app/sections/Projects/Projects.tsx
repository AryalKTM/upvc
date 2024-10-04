import { Section, Title } from "@/app/components";
import { Project } from "@/domain/models/project";
import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  const projects: Project[] = [
    { title: "Bhatbhateni Supermarket", image: "/images/projects/BhatbhateniProject.jpeg" },
    { title: "Hotel De'l Annapurna", image: "/images/projects/HotelAnnapurna.jpg" },
    { title: "Roadhshow Housing", image: "/images/projects/RoadhshowHousing.jpg" },
    { title: "Bhatbhateni Apartments", image: "/images/projects/Apartment.jpg" },
    { title: "Annapurna Cable Car", image: "/images/projects/AnnarpurnaCableCar.jpeg" },
    { title: "Valley Homes", image: "/images/projects/ResidentialPic.jpg" },
    { title: "Deep Housing, Pokhara", image: "/images/projects/DeepHousing1.jpg" },
  ];

  return (
    <Section id="projects">
      <Title>
        OUR PROJECTS
      </Title>

      <div className="lg:grid lg:grid-cols-4 lg:gap-5 lg:grid-rows-2 flex flex-col mx-auto px-6 lg:px-0 gap-10 mt-16 ">
        <div className="col-start-1 col-end-3 mb-6 lg:mb-0 cursor-pointer">
          <ProjectCard project={projects[0]} />
        </div>
        <div className="col-start-3 col-end-5 mb-6 lg:mb-0 cursor-pointer">
          <ProjectCard project={projects[1]} />
        </div>
        <div className="col-start-1 col-end-2 mb-6 lg:mb-0 cursor-pointer">
          <ProjectCard project={projects[2]} />
        </div>
        <div className="col-start-2 col-end-3 mb-6 lg:mb-0 cursor-pointer">
          <ProjectCard project={projects[3]} />
        </div>
        <div className="col-start-3 col-end-5 mb-6 lg:mb-0 cursor-pointer">
          <ProjectCard project={projects[4]} />
        </div>
        <div className="col-start-1 col-end-3 mb-6 lg:mb-0 cursor-pointer">
          <ProjectCard project={projects[5]} />
        </div>
        <div className="col-start-3 col-end-5 mb-6 lg:mb-0 cursor-pointer">
          <ProjectCard project={projects[6]} />
        </div>
      </div>
    </Section>
  );
};

export default Projects;
