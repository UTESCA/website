import type { NextPage } from "next";
import Link from "next/link";
import torontoPic from "../../public/assets/toronto.jpg";
import ProjectCard from "../cards/ProjectCard";
type projectProps = {
  image: any;
  name: string;
  description: string;
  link: string;
};
const Project: NextPage = () => {
  const projects: projectProps[] = [
    {
      image: torontoPic,
      name: "Project 1",
      description: "Proj description 1",
      link: "https://www.google.com",
    },
    {
      image: torontoPic,
      name: "Project 2",
      description: "Proj description 2",
      link: "https://www.google.com",
    },
  ];
  return (
    // image: string,
    // name: string,
    // description: string,
    // link: string
    <section className="text-gray-700 body-font border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2
            className="text-xs text-rose-500 tracking-widest font-medium title-font mb-1"
            data-aos="zoom-in-up"
          >
            PROJECTS
          </h2>
          <h1
            className="sm:text-3xl text-2xl font-medium title-font text-gray-900"
            data-aos="zoom-in-up"
          >
            Past Project from 2021-2022
          </h1>
        </div>
        <div className="flex flex-wrap -m-4" data-aos="fade-up">
          {projects.map((project) => (
            <ProjectCard
              image={project.image}
              name={project.name}
              description={project.description}
              key={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Project;
