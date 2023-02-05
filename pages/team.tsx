import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { NextPage } from "next";
const Nav = dynamic(() => import("../components/nav/Nav"));
const About = dynamic(() => import("../components/home/About"));
const Project = dynamic(() => import("../components/home/Project"));
const Events = dynamic(() => import("../components/home/Events"));
const Map = dynamic(() => import("../components/home/Map"));
const Footer = dynamic(() => import("../components/footer/Footer"));

// const DynamicComponent = dynamic(() =>
//   import("../components/hello").then((mod) => mod.Hello)
// );
const Team: NextPage = () => {
  return (
    <main className="w-screen h-full bg-transparent relative body-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Team;
