import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import type { AppProps } from "next/app";

import AOS from "aos";
import "aos/dist/aos.css";

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out",
      mirror: false, // whether elements should animate out while scrolling past them
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <Head>
        <title>UTESCA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
