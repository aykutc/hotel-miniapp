import Transition from "@/components/Transition";
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, viewport-fit=cover"
        />
      </Head>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </>
  );
}

export default MyApp;
