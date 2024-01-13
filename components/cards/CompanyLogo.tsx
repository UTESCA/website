import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

type CompanyLogoProps = {
    name: string;
    logo: any;
    url: string;
  };

const CompanyLogo: NextPage<CompanyLogoProps> = ({ name, url, logo }) => {
  return (
    
                <div
                  key={name}
                  className="flex items-center justify-center"
                >
                  <Link href={url}>
                  <a target="_blank" rel="noopener noreferrer">
                  <Image
                    className="h-12 fill-current text-gray-400 hover:text-black"
                    src={logo}
                    alt={name}
                    data-aos="zoom-in-up"
                  ></Image>
                  </a>
                  </Link>
                </div>
              );
  };
export default CompanyLogo;