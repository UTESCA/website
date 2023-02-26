import type { NextPage } from "next";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import about_cover from "../../public/assets/about-cover.png";
const Cover: NextPage = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className=" z-20 bg-gradient-to-t from-gray-800 via-gray-800/80 to-gray-800/50 items-center h-full w-full justify-center p-10 content-center flex flex-col">
        <div className="text-white md:text-7xl text-5xl font-bold text-center">
          <Typewriter
            options={{
              strings: [
                `Welcome to <span style="color: #be123c;">UTESCA!</span>`,
                `Make positive impact to your community`,
                `Achieve your career growth and development`,
              ],
              autoStart: true,
              loop: true,
              cursorClassName: "Typewriter__cursor text-rose-700",
            }}
          />
        </div>
        <div className="text-white text-lg md:text-2xl font-small mt-10 md:p-20 p-5 text-center md:text-left">
          Welcome to UTESCA, the engineering consulting club that is dedicated
          to making a positive impact in our community while also providing
          opportunities for career growth and development. Our goal is to help
          our members become successful engineers and management consultants by
          providing access to professional development events and exciting
          consulting engineering projects (CEPs).
          {/* <br></br><br></br>Through our events and projects, we strive to create a safe
          and inclusive environment that encourages students to connect with
          like-minded individuals, increase technical and academic interest, and
          develop the skills necessary for success in the consulting industry.
          Whether you&apos;e interested in making a difference in your community
          or building your career in engineering and management consulting,
          UTESCA is here to support you every step of the way. */}
        </div>
      </div>
      <Image
        src={about_cover}
        alt="cover"
        fill
        className="object-cover absolute z-10 w-auto min-w-full min-h-full max-w-none"
      />
    </div>
  );
};
export default Cover;
