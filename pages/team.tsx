import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { NextPage } from "next";
import MemberCard from "../components/cards/MemberCard";
import { google } from "googleapis";
const Nav = dynamic(() => import("../components/nav/Nav"));
const Footer = dynamic(() => import("../components/footer/Footer"));
import {
  corporateRelations,
  finance,
  internalEnagements,
  mediaMarketing,
  presidents,
  webTeam,
} from "../data/MemberInfo";
// const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
// const auth = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
// // const DynamicComponent = dynamic(() =>
// //   import("../components/hello").then((mod) => mod.Hello)
// // );

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
            Presidents
            <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
          </h1>
        </div>

        <div
          className="grid gap-10 mx-auto py-10 grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg"
          data-aos="fade-up-right"
        >
          {presidents.map((member, idx) => (
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
            Media & Marketing
            <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
          </h1>
        </div>
        <div
          className="grid gap-10 mx-auto py-10 grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg"
          data-aos="fade-up-right"
        >
          {mediaMarketing.map((member, idx) => (
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
            Internal Engagements
            <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
          </h1>
        </div>
        <div
          className="grid gap-10 mx-auto py-10 grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg"
          data-aos="fade-up-right"
        >
          {internalEnagements.map((member, idx) => (
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
            Corporate Relations
            <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
          </h1>
        </div>
        <div
          className="grid gap-10 mx-auto py-10 grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg"
          data-aos="fade-up-right"
        >
          {corporateRelations.map((member, idx) => (
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
            Finance
            <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
          </h1>
        </div>
        <div
          className="grid gap-10 mx-auto py-10 grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg"
          data-aos="fade-up-right"
        >
          {finance.map((member, idx) => (
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
            Web Team
            <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
          </h1>
        </div>
        <div
          className="grid gap-10 mx-auto py-10 grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg"
          data-aos="fade-up-right"
        >
          {webTeam.map((member, idx) => (
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
