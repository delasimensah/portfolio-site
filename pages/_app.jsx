import Head from "next/head";

import "../styles/globals.css";
import "react-awesome-lightbox/build/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Delasi Mensah | Web Development | Mobile Development</title>
        <meta name="description" content="Portfolio website of Delasi Mensah" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
