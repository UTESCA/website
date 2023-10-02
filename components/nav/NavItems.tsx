import type { NextPage } from "next";
import Link from "next/link";
type ItemProps = {
  name: string;
  link: string;
};
const Item: NextPage<ItemProps> = ({ name, link }) => {
  return (
    <Link
      href={link}
      className="hover:bg-white hover:text-rose-700 text-white font-bold	flex-col px-4 py-2 items-center space-x-6 text-xl group rounded transition duration-500"
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
