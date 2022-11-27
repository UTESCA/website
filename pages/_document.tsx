import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="MyApp - Here comes your awesome description"
        />
        <meta name="theme-color" content="#0E1116" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logos/logo-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#0E1116" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        {/* fonts below */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
