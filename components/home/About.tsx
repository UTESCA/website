import type { NextPage } from "next";
import Image from "next/image";
import torontoPic from "../../public/assets/toronto.jpg";
import AboutUsCard from "../cards/AboutUsCard";
import Title from "../decoration/Title";
import Link from "next/link";
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
            <span className="inline-flex justify-start w-auto">
              <Link href="https://www.facebook.com/uoftesca/" target="_blank">
                <button className="ml-3 text-rose-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </button>
              </Link>
              <Link href="https://www.instagram.com/utesca/" target="_blank">
                <button className="ml-3 text-rose-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </button>
              </Link>
              <Link
                href="https://www.linkedin.com/company/utescaconsulting/?originalSubdomain=ca"
                className="ml-3"
                target="_blank"
              >
                <button className="ml-3 text-rose-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </button>
              </Link>
            </span>
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
          <div className="flex flex-col text-center w-full mb-10">
            <h2
              className="text-2xl text-rose-500 tracking-widest font-medium title-font mb-1"
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
          
          <div className="py-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex flex-wrap justify-around items-start"> 
    <div className="w-full md:w-[calc(33.333%-1rem)] p-4"> 
      <AboutUsCard
        title="Professional Development Event"
        description="Build mentorships with consultants through network opportunities and bridge the gap between academia and industry with our professional development events."
        iconSrc="/assets/about1.svg"
      />
    </div>
    <div className="w-full md:w-[calc(33.333%-1rem)] p-4"> 
      <AboutUsCard
        title="Consulting Engineering Project (CEP)"
        description="Teams of 4-5 students paired with a professional consultant to create values and impacts for local businesses. Solve technical engineering problems and develop the best engineering-based solution with our pro-bono service."
        iconSrc="/assets/about2.svg"
      />
    </div>
    <div className="w-full md:w-[calc(33.333%-1rem)] p-4"> 
      <AboutUsCard
        title="Case competition"
        description="Train with fellow aspiring consultants on real industry cases and compete with other competition teams at the national and global levels."
        iconSrc="/assets/about3.svg"
      />
    </div>
  </div>
</div>

    </div>

        </div>
      </div>
    </div>
  );
};
export default About;
