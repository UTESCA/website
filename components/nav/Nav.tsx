import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import cn from "clsx";
import { menuItem } from "../../data/NavData";
import dynamic from "next/dynamic";
import Logo from "../../public/assets/logos/UTESCA-red-black.png";
import LogoWhite from "../../public/assets/logos/UTESCA-white.png";

const MenuItem = dynamic(() => import("../buttons/MenuItem"));
const NavItems = dynamic(() => import("../nav/NavItems"));
const MobileNavItems = dynamic(() => import("../nav/MobileNavItems"));
import { useRouter } from "next/router";

const Nav: NextPage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileBar = () => {
    setMobileOpen(!mobileOpen);
  };
  const [navTransparent, setNavTransparent] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 60;
      if (show) {
        setNavTransparent(false);
      } else {
        setNavTransparent(true);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={
          cn({
            ["lg:bg-transparent lg:scale-105 "]:
              navTransparent && router.pathname === "/",
            ["static "]: router.pathname != "/",
            ["fixed "]: router.pathname === "/",
            ["bg-gradient-to-r from-teal-500 to-cyan-600 "]:
              router.pathname === "/user",
          }) +
          "bg-rose-700 text-white flex items-center lg:justify-around justify-between p-4 static  w-full z-30 transition duration-300"
        }
      >
        <Link href="/" className="flex items-center space-x-5 px-4">
          {navTransparent && router.pathname === "/" ? (
            <Image src={Logo} alt="logo" height={50} priority={true} />
          ) : (
            <Image src={LogoWhite} alt="logo" height={50} priority={true} />
          )}
        </Link>
        {/* <div className="lg:hidden" onClick={toggleMobileBar}>
          <MenuItem />
        </div>
        <div className="hidden lg:block">
          <NavItems items={menuItem} />
        </div> */}
      </div>

      <div
        className={
          cn({
            ["-translate-x-full "]: !mobileOpen,
            ["translate-x-0 "]: mobileOpen,
          }) +
          "lg:hidden fixed top-0 sidebar bg-gradient-to-r from-emerald-800 to-emerald-600 opacity-95 w-64 space-y-6 px-2 py-6 inset-y-0 left-0 transform z-50 transition duration-200 ease-in-out overflow-scroll scrollbar-none"
        }
      >
        <nav className="text-emerald-300 divide-y font-light">
          <div>
            {menuItem.map((item, index) => (
              <MobileNavItems
                key={index}
                name={item.name}
                link={item.link}
                icon={item.icon}
              />
            ))}
          </div>
          <div>
            <MobileNavItems
              name={"Login"}
              link={"/login"}
              icon={menuItem[0].icon}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
