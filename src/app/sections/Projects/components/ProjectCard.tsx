import { Project } from "@/domain/models/project";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  project: Project;
};

export default function ProjectCard({project}: Props) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover rounded-xl border-primary border-2"
        width={400}
        height={400}
      />
      <p className="absolute bg-white bottom-6 font-medium text-2xl text-primary p-2 w-full text-center">
        {project.title}
      </p>
    </div>
  );
}
