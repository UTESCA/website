import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
type Props = {
  image: any;
  name: string;
  description: string;
  link: string;
};
const ProjectCard: NextPage<Props> = ({ image, name, description, link }) => {
  return (
    <div className="relative flex flex-col m-3 md:w-1/4 hover:bg-gray-200 bg-gray-100 rounded-lg transition duration-300">
      <Image alt="project2" src={image} className="rounded-t-lg w-full" />
      <div className="flex-grow p-6">
        <h2 className="font-bold mb-2 text-xl text-gray-800">{name}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <div>
          {/* <Link
            href={link}
            className="text-green-600 hover:text-green-500 text-small"
          >
            Read more 👉
          </Link> */}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
