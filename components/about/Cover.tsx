import type { NextPage } from "next";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import about_cover from "../../public/assets/about-cover.png";
const Cover: NextPage = () => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* The container with background image */}
      <div
        style={{ backgroundImage: `url(${about_cover})` }}
        className="absolute inset-0 bg-center bg-cover z-10"
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-gray-800 via-gray-800/80 to-gray-800/50"></div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full w-full p-10">
        <div className="text-white md:text-7xl text-5xl font-bold text-center">
          <Typewriter
            options={{
              strings: [
                `Welcome to <span style="color: #be123c;">UTESCA!</span>`,
                `Make a positive impact to your community`,
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
        </div>
      </div>
    </div>
  );
};
export default Cover;
