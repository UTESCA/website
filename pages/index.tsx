import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { NextPage } from "next";
const Nav = dynamic(() => import("../components/nav/Nav"));
const About = dynamic(() => import("../components/home/About"));
const Project = dynamic(() => import("../components/home/Project"));
const Events = dynamic(() => import("../components/home/Events"));
const Collaboration = dynamic(() => import("../components/home/Collaboration"));
const Clients = dynamic(() => import("../components/home/Clients"));
const Map = dynamic(() => import("../components/home/Map"));
const Footer = dynamic(() => import("../components/footer/Footer"));
const Home: NextPage = () => {
  return (
    <main className="w-screen h-full bg-transparent relative body-container">
      <Nav />

      {/* <Suspense fallback={<div>Loading...</div>}>
        <Events />
      </Suspense> */}

      <About />

      <Project />

      <Clients />

      <Collaboration />

      <Map />

      <Footer />
    </main>
  );
};

export default Home;
