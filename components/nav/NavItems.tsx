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
      className="flex-col px-4 py-2 items-center space-x-6 text-xl group rounded hover:bg-rose-100 transition duration-500"
    >
      <span>{name}</span>
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
