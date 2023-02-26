import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { NextPage } from "next";
import MemberCard from "../components/cards/MemberCard";
import { google } from "googleapis";
const Nav = dynamic(() => import("../components/nav/Nav"));
const Footer = dynamic(() => import("../components/footer/Footer"));

// const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
// const auth = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
// // const DynamicComponent = dynamic(() =>
// //   import("../components/hello").then((mod) => mod.Hello)
// // );

const members = [
  {
    name: "Danny Lu",
    position: "Web Developer",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
  },
  {
    name: "Xiao Zhang",
    position: "Web Developer",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
  },
  {
    name: "Bobby Li",
    position: "CEO",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
  },
  {
    name: "Bobby Li",
    position: "CEO",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
  },
  {
    name: "Bobby Li",
    position: "CEO",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
  },
  {
    name: "Bobby Li",
    position: "CEO",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
  },
];

const Team: NextPage = () => {
  return (
    <main className="w-screen h-full bg-transparent relative body-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div
          className="grid gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-5 lg:max-w-screen-lg"
          data-aos="fade-up-right"
        >
          <h1 className="font-bold leading-tight text-2xl mt-0 mb-2">
            Exec Team
            <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
          </h1>
        </div>

        <div
          className="grid gap-10 mx-auto py-10 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg"
          data-aos="fade-up-right"
        >
          {members.map((member, idx) => (
            <MemberCard
              key={idx}
              name={member.name}
              position={member.position}
              image={member.image}
            />
          ))}
        </div>
        <div
          className="grid gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-5 lg:max-w-screen-lg"
          data-aos="fade-up-right"
        >
          <h1 className="font-bold leading-tight text-2xl text-rose mt-0 mb-2">
            Marketing
            <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
          </h1>
        </div>
        <div
          className="grid gap-10 mx-auto py-10 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg"
          data-aos="fade-up-right"
        >
          {members.map((member, idx) => (
            <MemberCard
              key={idx}
              name={member.name}
              position={member.position}
              image={member.image}
            />
          ))}
        </div>
        <div
          className="grid gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-5 lg:max-w-screen-lg"
          data-aos="fade-up-right"
        >
          <h1 className="font-bold leading-tight text-2xl mt-0 mb-2">
            Web Design
            <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
          </h1>
        </div>
        <div
          className="grid gap-10 mx-auto py-10 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg"
          data-aos="fade-up-right"
        >
          {members.map((member, idx) => (
            <MemberCard
              key={idx}
              name={member.name}
              position={member.position}
              image={member.image}
            />
          ))}
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Team;
