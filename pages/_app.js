// Import Framework7
import Framework7 from "framework7/lite";
// Import Framework7-React and components
import Framework7React, { App, View } from "framework7-react";
// Next router
import { useRouter } from "next/router";

// Import icons and styles
import "framework7/framework7-bundle.css";
import "../styles/globals.css";

// Install Framework7 React plugin for Framework7
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
];

function MyApp({ Component, pageProps }) {
  // current Next.js route
  const router = useRouter();
  /*
    Here we need to know (mostly on server-side) on what URL user opens our app
  */
  const url = `${"http://localhost:3000"}${router.asPath}`;
  console.log(url);
  return (
    /*
      Here we pass initial server URL and routes to the Framework7's App.
      It is required because Framework7 will be initialized on server-side,
      and we need to know this URL to correctly load pages by Framework7 router
    */
    <App url={url} routes={routes}>
      {/*
        Create main View.
        Apparently we need to enable browserHistory to navigating by URL
      */}
      <View
        main
        browserHistory
        browserHistorySeparator=""
        browserHistoryInitialMatch={true}
        browserHistoryStoreHistory={false}
        url="/"
        bgColor="white"
      >
        {/*
          Initial page components (returned by Next.js).
          Here it is mandatory to set `initialPage` prop on it.
        */}
        <Component initialPage {...pageProps} />
      </View>
    </App>
  );
}

export default MyApp;
