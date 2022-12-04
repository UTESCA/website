import type { NextPage } from "next";
import { useState } from "react";
import cn from "clsx";
const MenuItem: NextPage = () => {
  const [navOpen, setNavOpen] = useState(false);
  const triggerNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <button className="relative group" onClick={triggerNav}>
      <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-white ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200">
        <div
          className={cn({
            ["-translate-x-1.5 rotate-180 "]: navOpen,
            ["flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden"]:
              true,
          })}
        >
          <div
            className={cn({
              ["w-2/3 rotate-[42deg] "]: navOpen,
              ["bg-rose-500 h-[2px] w-7 transform transition-all duration-300 origin-left delay-150"]:
                true,
            })}
          ></div>
          <div
            className={cn({
              ["translate-x-10 "]: navOpen,
              ["bg-rose-500 h-[2px] w-7 rounded transform transition-all duration-300"]:
                true,
            })}
          ></div>
          <div
            className={cn({
              ["-rotate-[42deg] w-2/3 "]: navOpen,
              ["bg-rose-500 h-[2px] w-7 transform transition-all duration-300 origin-left delay-150"]:
                true,
            })}
          ></div>
        </div>
      </div>
    </button>
  );
};
export default MenuItem;
