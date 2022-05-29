import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Delasi Mensah | Web Development | Mobile Development</title>
        <meta name="description" content="Portfolio website of Delasi Mensah" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
