import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import ClientsData from "../../data/ClientsData";
const Clients: NextPage = () => {
  return (
    <section className="text-gray-700 body-font border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col text-center w-full mb-20">
          <h2
            className="text-2xl text-rose-500 tracking-widest font-medium title-font mb-1"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3">
            {ClientsData.map((client) => {
              return (
                <div
                  key={client.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    className="h-12 fill-current text-gray-400 hover:text-black"
                    src={client.logo}
                    alt={client.name}
                    data-aos="zoom-in-up"
                  ></Image>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
