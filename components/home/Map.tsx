import type { NextPage } from "next";
const Map: NextPage = () => {
  return (
    <section className="text-gray-700 body-font relative" data-aos="fade-up">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bahen+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Let us know if you have any question
          </p>
          <input
            className="bg-white rounded border border-gray-400 focus:outline-none focus:border-rose-500 text-base px-4 py-2 mb-4"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-rose-500 text-base px-4 py-2 mb-4 resize-none"
            placeholder="Message"
          ></textarea>
          <button className="text-white bg-rose-500 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded text-lg">
            Button
          </button>
          <p className="text-xs text-gray-500 mt-3">Additional Message.</p>
        </div>
      </div>
    </section>
  );
};
export default Map;
