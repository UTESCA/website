import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { NextPage } from "next";
const Nav = dynamic(() => import("../components/nav/Nav"));
const Footer = dynamic(() => import("../components/footer/Footer"));
const Cover = dynamic(() => import("../components/about/Cover"));
const About: NextPage = () => {
  return (
    <main className="w-screen h-full bg-transparent relative body-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Cover />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default About;
