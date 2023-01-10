import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { NextPage } from "next";
import MemberCard from "../components/cards/MemberCard";
import Logo from "../../public/assets/logo.png";

const Nav = dynamic(() => import("../components/nav/Nav"));
const About = dynamic(() => import("../components/home/About"));
const Project = dynamic(() => import("../components/home/Project"));
const Events = dynamic(() => import("../components/home/Events"));
const Map = dynamic(() => import("../components/home/Map"));
const Footer = dynamic(() => import("../components/footer/Footer"));

// const DynamicComponent = dynamic(() =>
//   import("../components/hello").then((mod) => mod.Hello)
// );

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
];

const Team: NextPage = () => {
  return (
    <main className="w-screen h-full bg-transparent relative body-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Nav>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
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
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </Nav>
      </Suspense>
    </main>
  );
};

export default Team;
