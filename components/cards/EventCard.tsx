import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
type Props = {
  name: string;
  description: any;
  src: any;
  date: string;
  location: string;
};
// const AboutCard: NextPage<Props> = ({
//   name,
//   description,
//   src,
//   date,
//   location,
// }) => {
//   return (
//     <div className="relative p-4 md:w-1/3">
//       <div className="relative h-[30rem] sm:h-96 w-[35rem] rounded-lg">
//         <Image
//           alt="project2"
//           src="https://picsum.photos/seed/1840/1000/600"
//           className="object-cover w-full h-full rounded-lg"
//         />

//         <div className="absolute w-full h-full bottom-0 bg-gradient-to-r from-fuchsia-700/30 to-violet-700 rounded-lg flex flex-col items-center justify-center text-center">
//           <Image
//             alt=""
//             src="https://github.githubassets.com/images/modules/site/enterprise/launchpad/logos/logo-dowjones.svg"
//           />

//           <p className="text-lg px-14 text-gray-300 mt-10">
//             GitHub helps us ensure that we have our security controls baked into
//             our pipelines all the way from the first line of code we’re writing.
//           </p>

//           <Image
//             src="https://picsum.photos/50/50"
//             alt="avatar"
//             className="rounded-full border-2 mt-8 w-full"
//           />

//           <p className="text-base font-bold px-14 text-gray-300 mt-3">
//             Chief Information Security Officer
//           </p>

//           <p className="text-sm font-light px-14 text-gray-300 ">Dow Jones</p>
//         </div>
//       </div>
//     </div>
//   );
// };
const AboutCard: NextPage<Props> = ({
  name,
  description,
  src,
  date,
  location,
}) => {
  return (
    <div className="relative flex-col md:flex-row flex w-full hover:bg-gray-200 bg-gray-100 rounded-lg transition duration-300 justify-center items-center">
      <Image alt="project2" src={src} className="rounded-l-lg" width={250} />
      <div className="p-6">
        <h2 className="font-bold mb-2 text-xl text-gray-800">{name}</h2>
        <p className="text-rose-600 mb-2">{date}</p>
        <p className="text-rose-600 mb-2">{location}</p>
        <p className="text-gray-600 mb-2">{description}</p>
      </div>
    </div>
  );
};
export default AboutCard;
