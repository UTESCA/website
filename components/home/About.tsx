import type { NextPage } from "next";
import Image from "next/image";
import torontoPic from "../../public/assets/toronto.jpg";
import SquareButton from "../buttons/SquareButton";
import AboutCard from "../cards/AboutCard";
const About: NextPage = () => {
  const aboutPoints = [
    {
      name: "Professional Development Events",
      description: "About Description 1",
      link: "/",
    },
    {
      name: "Consulting Engineering Projects (CEP)",
      description: "About Description 2",
      link: "/",
    },
    {
      name: "About Point 3",
      description: "About Description 3",
      link: "/",
    },
  ];
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            data-aos="fade-up-right"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              University of Toronto
              <br className="inline-block" />
              Engineering Student Consulting Associatoin
            </h1>
            <p className="mb-8 text-lg leading-relaxed">
              At UTESCA, we strive to make a meaningful contribution to our
              local community and assist students in developing their careers in
              engineering and management consulting.
            </p>
            <div className="flex justify-center gap-5">
              <SquareButton colour="rose" text={<div>Button 1</div>} />
              <SquareButton colour="rose" text={<div>Button 2 Join Us</div>} />
            </div>
          </div>
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            data-aos="fade-up-left"
          >
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={torontoPic}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2
              className="text-xs text-rose-500 tracking-widest font-medium title-font mb-1"
              data-aos="zoom-in-up"
            >
              ABOUT US
            </h2>
            <h1
              className="sm:text-3xl text-2xl font-medium title-font text-gray-900"
              data-aos="zoom-in-up"
            >
              What UTESCA do
            </h1>
          </div>
          <div className="flex flex-wrap -m-4" data-aos="fade-up">
            {aboutPoints.map((aboutPoint) => (
              <AboutCard
                key={aboutPoint.name}
                link={aboutPoint.link}
                name={aboutPoint.name}
                description={aboutPoint.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
