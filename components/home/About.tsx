import type { NextPage } from "next";
import Image from "next/image";
import torontoPic from "../../public/assets/toronto.jpg";
import SquareButton from "../buttons/SquareButton";
import AboutCard from "../cards/AboutCard";
const About: NextPage = () => {
  const aboutPoints = [
    {
      name: "Professional Development Events",
      description: "Learn more about the career on consulting",
      link: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-white"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
        </svg>
      ),
    },
    {
      name: "Consulting Engineering Projects (CEP)",
      description:
        "Helping engineering students create value for local businesses",
      link: "/",
      icon: (
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 512 512"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-white"
        >
          <g>
            <g id="Combined-Shape" transform="translate(64.000000, 34.346667)">
              <path d="M192,-7.10542736e-15 L384,110.851252 L384,242.986 L341.333,242.986 L341.333,157.655 L213.333,231.555 L213.333,431.088 L192,443.405007 L0,332.553755 L0,110.851252 L192,-7.10542736e-15 Z M341.333333,264.32 L341.333,328.32 L405.333333,328.32 L405.333333,370.986667 L341.333,370.986 L341.333333,434.986667 L298.666667,434.986667 L298.666,370.986 L234.666667,370.986667 L234.666667,328.32 L298.666,328.32 L298.666667,264.32 L341.333333,264.32 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z"></path>
            </g>
          </g>
        </svg>
      ),
    },
  ];
  return (
    <div>
      <div className="text-gray-700 body-font">
        <div className="container mx-auto flex px-20 py-[130px] md:flex-row flex-col items-center">
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            data-aos="fade-up-right"
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              University of Toronto
              <br className="inline-block" />
              Engineering Student Consulting Association
            </h1>
            <p className="mb-8 text-lg leading-relaxed">
              At UTESCA, we strive to make a meaningful contribution to our
              local community and assist students in developing their careers in
              engineering and management consulting.
            </p>
            {/* <div className="flex justify-center gap-5">
              <SquareButton colour="rose" text={<div>Button 1</div>} />
              <SquareButton colour="rose" text={<div>Button 2 Join Us</div>} />
            </div> */}
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
      </div>
      <div className="text-gray-700 body-font border-t border-gray-200">
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
              What does UTESCA do
            </h1>
          </div>
          <div
            className="flex flex-wrap -m-4 justify-around"
            data-aos="fade-up"
          >
            {aboutPoints.map((aboutPoint) => (
              <AboutCard
                key={aboutPoint.name}
                link={aboutPoint.link}
                name={aboutPoint.name}
                description={aboutPoint.description}
                icon={aboutPoint.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
