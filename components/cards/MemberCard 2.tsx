import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

type MemberCardProps = {
  name: string;
  position: string;
  image: any;
};

const MemberCard: NextPage<MemberCardProps> = ({ name, position, image }) => {
  return (
    <div>
      <Image
        className="object-cover w-24 h-24 rounded-full shadow"
        src={image}
        alt="Person"
      />
      <div className="flex flex-col justify-center mt-2">
        <p className="text-lg font-bold">{name}</p>
        <p className="mb-4 text-xs text-gray-800">{position}</p>
      </div>
    </div>
  );
};

export default MemberCard;
