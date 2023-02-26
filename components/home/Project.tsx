import type { NextPage } from "next";
import Link from "next/link";
import FCI from "../../public/assets/project-images/2022-2023/Functions-Creation-and-Integration.png";
import AI from "../../public/assets/project-images/2022-2023/AI-Integration-Mobile-App.png";
import CA from "../../public/assets/project-images/2022-2023/Calendar-App.png";
import HR from "../../public/assets/project-images/2022-2023/hospital-research.png";
import CER from "../../public/assets/project-images/2022-2023/Scope-3-Carbon-Emissions-Research.png";
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
      image: FCI,
      name: "Functions Creation and Integration in Software",
      description:
        "Developing fine-tuning functions in the software used to refine plastic sockets for patients' prosthetics. ",
      link: "https://www.google.com",
    },
    {
      image: CA,
      name: "Calendar App",
      description:
        "Building a fully-featured mobile version for both Android/ IOS users integrating client’s advanced AI triaging and organizational features.",
      link: "https://www.google.com",
    },
    {
      image: AI,
      name: "AI Integration Mobile App",
      description:
        "Modifying frontend and creating engine to sync calendar events and craft a novel user interface for the app.",
      link: "https://www.google.com",
    },
    {
      image: CER,
      name: "Scope 3 Carbon Emissions Research",
      description:
        "Conducting an environmental scan of Scope 3 Carbon emissions produced by the UHN hospitals and facilities and building a tool to estimate the Scope 3 Carbon emissions given a range of factors and costs.",
      link: "https://www.google.com",
    },
    {
      image: HR,
      name: "A Study of Making Hospitals & Research Facilities More Resilient Towards Power Outages.",
      description:
        "Developing an action plan on making the UHN hospitals & research facilities more resilient towards power outages.",
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
            Current Project from 2022-2023
          </h1>
        </div>
        <div
          className="flex justify-center items-center flex-wrap -m-4"
          data-aos="fade-up"
        >
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
