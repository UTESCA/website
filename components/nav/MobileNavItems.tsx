import type { NextPage } from "next";
import Link from "next/link";
type Props = {
  name: string;
  link: string;
  icon: JSX.Element;
};
const MobileNavItems: NextPage<Props> = ({ link, name, icon }) => {
  return (
    <Link href={link}>
      <button className=" py-2.5 px-4 rounded flex items-center space-x-6 transition-duration-200 hover:bg-rose-700 hover:text-white">
        {icon}
        <span>{name}</span>
      </button>
    </Link>
  );
};
export default MobileNavItems;
