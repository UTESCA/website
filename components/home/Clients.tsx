import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import UHN_Logo from "../../public/assets/company-logo/UHN.svg";
import HPCO from "../../public/assets/company-logo/HPCO.png";
import aikomail from "../../public/assets/company-logo/aikomail.svg";
import Happenin from "../../public/assets/company-logo/Happenin.svg";
import Softeem from "../../public/assets/company-logo/Softeem.png";
const Clients: NextPage = () => {
  return (
    <section className="text-gray-700 body-font border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col text-center w-full mb-20">
          <h2
            className="text-xs text-rose-500 tracking-widest font-medium title-font mb-1"
            data-aos="zoom-in-up"
          >
            CLIENTS
          </h2>
          <h1
            className="sm:text-3xl text-2xl font-medium title-font text-gray-900"
            data-aos="zoom-in-up"
          >
            Our Clients
          </h1>
        </div>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
              <Image
                className="h-12 fill-current text-gray-400 hover:text-black"
                src={UHN_Logo}
                alt="UHN Logo"
                data-aos="zoom-in-up"
              ></Image>
            </div>
            <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
              <Image
                className="h-12 fill-current text-gray-400 hover:text-black"
                src={aikomail}
                alt="Aikomail Logo"
                data-aos="zoom-in-up"
              ></Image>
            </div>
            {/* <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
              <Image
                className="h-12 fill-current text-gray-400 hover:text-black"
                src={HPCO}
                alt="HPCO Logo"
              ></Image>
            </div> */}
            <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
              <Image
                className="h-12 fill-current text-gray-400 hover:text-black"
                src={Happenin}
                alt="Happenin Logo"
                data-aos="zoom-in-up"
              ></Image>
            </div>
            {/* <div className="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
              <Image
                className="h-12 fill-current text-gray-400 hover:text-black"
                src={Softeem}
                alt="Softeem Logo"
              ></Image>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
