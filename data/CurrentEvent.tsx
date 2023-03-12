import React from "react";
import Image1 from "../public/assets/events/event1.png";
type eventProps = {
  name: string;
  src: any;
  description: any;
  date: string;
  location: string;
};
const eventItem: eventProps[] = [
  {
    name: "Interactive Consulting Workshop",
    src: Image1,
    description: (
      <span>
        An interactive networking event aiming to help students learn case study
        solving strategies and different approaches from a professional
        consultant. Five consultants from leading companies like
        <span className="text-rose-500"> BCG, KPMG, Deloitte </span>
        and more will be leading groups of students through a case study
        workshop.
      </span>
    ),
    date: "Friday, March 17 2023, 6:30PM - 8:30PM",
    location: "GB 202",
  },
];

export default eventItem;
