import type { NextPage } from "next";
import Link from "next/link";
import Image from 'next/image';
import React from 'react';

interface SectionCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

const AboutUsCard: NextPage<SectionCardProps> = ({ title, description, iconSrc }) => {
  return (
   
    <div className="flex flex-col items-center text-center"
    data-aos="zoom-in-up">
        <div className="w-[50px] h-[49px] origin-top-left -rotate-180 bg-red-300 rounded-tl-[18px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[10px] translate-x-[90%] translate-y-[170%]"></div>
      
        <Image src={iconSrc} alt={title} width={40} height={40} />
     
      <div className="w-[267px] text-center text-neutral-600 text-[28px] font-bold font-['Inter'] leading-9">{title}</div>
      <p className="text-gray-600 p-4">{description}</p>
    </div>
  );
};

export default AboutUsCard;
