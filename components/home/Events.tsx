import type { NextPage } from "next";
import EventCard from "../cards/EventCard";
import CurrentEventData from "../../data/CurrentEvent";
const Events: NextPage = () => {
  return (
    <section className="text-gray-700 body-font border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2
            className="text-xs text-rose-500 tracking-widest font-medium title-font mb-1"
            data-aos="zoom-in-up"
          >
            EVENTS
          </h2>
          <h1
            className="sm:text-3xl text-2xl font-medium title-font text-gray-900"
            data-aos="zoom-in-up"
          >
            Upcoming Events
          </h1>
        </div>
        {CurrentEventData.map((event) => {
          return (
            <EventCard
              key={event.name}
              link={event.link}
              name={event.name}
              description={event.description}
              src={event.src}
              date={event.date}
              location={event.location}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Events;
