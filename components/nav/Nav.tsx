import React, { ReactNode, useState } from "react";
import Logo from "../../public/assets/logo.png";
import type { NextPage } from "next";
import cn from "clsx";
import MenuItem from "../buttons/MenuItem";
import MobileNavItems from "../nav/MobileNavItems";
import NavItems from "../nav/NavItems";
type Props = {
  children: any;
};
type NavItemProps = {
  name: string;
  link: string;
  icon: JSX.Element;
};
const Nav: NextPage<Props> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileBar = () => {
    setMobileOpen(!mobileOpen);
  };
  const navItem: NavItemProps[] = [
    {
      name: "Home",
      link: "/",
      icon: (
        <svg
          className="w-8 h-8 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
    },
    {
      name: "Our Team",
      link: "/team",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="relative min-h-screen">
      <div>
        <div className="bg-white text-rose-500 flex justify-between p-4 fixed lg:static w-full border-b-2 z-30">
          <a href="#" className="flex items-center space-x-5 px-4">
            <span className="text-2xl font-extrabold ">UTESCA</span>
          </a>
          <div className="lg:hidden" onClick={toggleMobileBar}>
            <MenuItem />
          </div>
          <div className="hidden lg:block">
            <NavItems items={navItem} />
          </div>
        </div>

        <div
          className={cn({
            ["-translate-x-full "]: !mobileOpen,
            ["translate-x-0 "]: mobileOpen,
            ["lg:hidden fixed top-0 sidebar bg-gradient-to-r from-rose-800 to-rose-600 opacity-95 w-64 space-y-6 px-2 py-6 inset-y-0 left-0 transform z-50 transition duration-200 ease-in-out overflow-scroll scrollbar-none"]:
              true,
          })}
        >
          {/* <!-- logo --> */}

          {/* <!-- nav --> */}
          <nav className="text-rose-300 font-sans font-light">
            {/* <a href="#" className=" py-2.5 px-4 rounded flex items-center space-x-6 hover:bg-rose-700 hover:text-white">
			<svg className="w-8 h-8 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
			</svg>
			<span>Enquries</span>
		</a> */}
            {/* <a href="#" className=" py-2.5 px-4 rounded flex items-center space-x-6 hover:bg-rose-700 hover:text-white">
			<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
			</svg>
			<span>Bookings</span>
		</a> */}
            {navItem.map((item, index) => (
              <MobileNavItems
                key={index}
                name={item.name}
                link={item.link}
                icon={item.icon}
              />
            ))}
          </nav>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Nav;
