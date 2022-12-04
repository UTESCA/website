import type { NextPage } from "next";
import Image from 'next/image'
import torontoPic from '../../public/assets/toronto.jpg'

const Project:NextPage = () => {
  return (
    <section className="text-gray-700 body-font border-t border-gray-200">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-rose-500 tracking-widest font-medium title-font mb-1" data-aos="zoom-in-up">PROJECTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900" data-aos="zoom-in-up">Past Project from 2021-2022</h1>
        </div>
        <div className="flex flex-wrap -m-4" data-aos="fade-up">
            <div className="p-4 md:w-1/3">
                <Image alt="project1" src={torontoPic} className="rounded-t-lg" />
                <div className="p-6 bg-gray-100">
                    <h2 className="font-bold mb-2 text-2xl text-gray-800 hover:text-gray-700"><a href="">Project name</a></h2>
                    <p className="text-gray-600 mb-2">This is the project Description</p>
                    <div>
                        <a href="" className="text-green-600 hover:text-green-500 text-small">Read more 👉</a>
                    </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <Image alt="project2" src={torontoPic} className="rounded-t-lg" />
                <div className="p-6 bg-gray-100">
                    <h2 className="font-bold mb-2 text-2xl text-gray-800 hover:text-gray-700"><a href="">Project name</a></h2>
                    <p className="text-gray-600 mb-2">This is the project Description</p>
                    <div>
                        <a href="" className="text-green-600 hover:text-green-500 text-small">Read more 👉</a>
                    </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <Image alt="project3" src={torontoPic} className="rounded-t-lg" />
                <div className="p-6 bg-gray-100">
                    <h2 className="font-bold mb-2 text-2xl text-gray-800 hover:text-gray-700"><a href="">Project name</a></h2>
                    <p className="text-gray-600 mb-2">This is the project Description</p>
                    <div>
                        <a href="" className="text-green-600 hover:text-green-500 text-small">Read more 👉</a>
                    </div>
                </div>
            </div>
            <div className="p-4 md:w-1/3">
                <Image alt="project4" src={torontoPic} className="rounded-t-lg" />
                <div className="p-6 bg-gray-100">
                    <h2 className="font-bold mb-2 text-2xl text-gray-800 hover:text-gray-700"><a href="">Project name</a></h2>
                    <p className="text-gray-600 mb-2">This is the project Description</p>
                    <div>
                        <a href="" className="text-green-600 hover:text-green-500 text-small">Read more 👉</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
};
export default Project;