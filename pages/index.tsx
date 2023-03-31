import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { NextPage } from "next";
const Nav = dynamic(() => import("../components/nav/Nav"));
const About = dynamic(() => import("../components/home/About"));
const Project = dynamic(() => import("../components/home/Project"));
const Events = dynamic(() => import("../components/home/Events"));
const Clients = dynamic(() => import("../components/home/Clients"));
const Map = dynamic(() => import("../components/home/Map"));
const Footer = dynamic(() => import("../components/footer/Footer"));
const Home: NextPage = () => {
  return (
    <main className="w-screen h-full bg-transparent relative body-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Events />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Project />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Clients />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Map />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Home;
