import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
type Props = {
  name: string;
  description: string;
  link: string;
  icon: JSX.Element;
};
const AboutCard: NextPage<Props> = ({ name, description, link, icon }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-rose-500 text-white flex-shrink-0">
            {icon}
          </div>
          <h2 className="text-gray-900 text-2xl font-bold title-font">
            {name}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">{description}</p>
          {/* <Link
            href={link}
            className="mt-3 text-rose-500 inline-flex items-center"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link> */}
        </div>
      </div>
    </div>
  );
};
export default AboutCard;
