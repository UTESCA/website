import type { NextPage } from "next";
import Link from "next/link";
import cn from "clsx";
import { useState, useEffect } from "react";
type ItemProps = {
  name: string;
  link: string;
};
const Item: NextPage<ItemProps> = ({ name, link }) => {
  const [navTransparent, setNavTransparent] = useState(true);
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
    <Link
      href={link}
      className={
        cn({
          ["hover:bg-white hover:text-rose-700 text-white"]: !navTransparent,
          ["hover:bg-rose-500 hover:text-white text-rose-500	"]: navTransparent,
        }) +
        "font-bold	flex-col px-4 py-2 items-center space-x-6 text-xl group rounded transition duration-500"
      }
    >
      <button>{name}</button>
    </Link>
  );
};
type NavItemProps = {
  items: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
};
const NavItems: NextPage<NavItemProps> = ({ items }) => {
  return (
    <div className="flex gap-4">
      {items.map((item) => (
        <Item name={item.name} key={item.name} link={item.link} />
      ))}
    </div>
  );
};
export default NavItems;
