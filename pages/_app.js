// Import Framework7
import Framework7 from "framework7/lite";
// Import Framework7-React and components
import Framework7React, { App, View } from "framework7-react";
// Next router
import { useRouter } from "next/router";

// Import icons and styles
import "framework7/framework7-bundle.css";
import "../styles/globals.css";
import Head from "next/head";

Framework7.use(Framework7React);

// App routes
const routes = [
  {
    path: "/",
    asyncComponent: () => import("./index"),
  },
  {
    path: "/date-selection",
    asyncComponent: () => import("./date-selection/index"),
  },
  {
    path: "/hotel-detail",
    asyncComponent: () => import("./hotel-detail/index"),
  },
  {
    path: "/check-detail",
    asyncComponent: () => import("./check-detail/index"),
  },
  {
    path: "/results",
    asyncComponent: () => import("./results/index"),
  },
  {
    path: "/review",
    asyncComponent: () => import("./review/index"),
  },
  {
    path: "/rooms",
    asyncComponent: () => import("./rooms/index"),
  },
  {
    path: "/room-select",
    asyncComponent: () => import("./room-select/index"),
  },
  {
    path: "/payment-complete",
    asyncComponent: () => import("./payment-complete/index"),
  },
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const url = `${process.env.host}${router.pathname}`;

  return (
    <App url={url} routes={routes} touch={{ mdTouchRipple: false }}>
      <View
        main
        browserHistory
        browserHistorySeparator=""
        browserHistoryInitialMatch={false}
        browserHistoryStoreHistory={false}
        url="/"
        bgColor="white"
        stackPages
      >
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1, viewport-fit=cover"
          />
        </Head>

        <Component initialPage {...pageProps} />
      </View>
    </App>
  );
}

export default MyApp;
