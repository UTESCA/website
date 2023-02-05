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
    <div className="p-4 md:w-1/3">
      <Image alt="project2" src={image} className="rounded-t-lg" />
      <div className="p-6 bg-gray-100">
        <h2 className="font-bold mb-2 text-2xl text-gray-800 hover:text-gray-700">
          {name}
        </h2>
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
