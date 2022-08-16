import { getBack } from "data/api";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
const transition = { ease: "easeInOut", duration: 0.3 };

const Transition = ({ children }) => {
  const { asPath, ...router } = useRouter();
  /*   const [back, setback] = useState(true);
   */ /*   const [back, setback] = useState(false);
   */ const [push, setpush] = useState([]);
  /*  const [prev, setprev] = useState(-1); */

  /*   useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      setback(true);
    
      return true;
    });
  }, []); */

  /*  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      if (
        push.find((i) => {
          return i === url;
        })
      ) {

        console.log("found");
      } else {
        setback(false);
        setpush([...push, url]);
      }

      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [push]); */
  /*   useEffect(() => {
    console.log("render", getBack());
    const back = getBack() ? getBack() : false;
    console.log("first", back);
    setback(back);
  }, [asPath]);
   */
  let back = false;
  try {
    back = getBack();
  } catch (error) {}
  const variants = {
    enter() {
      // if isPush is true, this is the eventual destination of the top page (sliding in from the right)
      // if isPush is false, this is the eventual destination of the bottom page (sliding in from the left)
      const isPush = !back;

      return {
        x: 0,
        transition,
        transitionEnd: {
          // after animation has finished, reset the position to static
          position: "static",
        },
        // keep top "layer" of animation as a fixed position
        ...(isPush
          ? {
              position: "fixed",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }
          : {}),
      };
    },
    initial() {
      // if isPush is true, this is the starting position of top page (sliding in from the right)
      // if ifPush is false, this is the starting position of bottom page (sliding in from the left)
      const isPush = !back;

      return {
        x: isPush ? "100%" : "-25%",
        boxShadow: isPush ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" : null,
        background: "white",

        transition,
        // keep top "layer" of animation as a fixed position
        ...(isPush
          ? {
              position: "fixed",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }
          : {}),
      };
    },

    // an updated history.action is provided in AnimatedSwitch via "custom" prop for AnimatePresence
    exit() {
      // if isPop is true, this is the top page being dismissed (sliding to the right)
      // if isPop is false, this is the botom page being dismissed (sliding to the left)
      const isPop = back;

      return {
        x: isPop ? "100%" : "-10%",
        zIndex: isPop ? 1 : -1,
        boxShadow: isPop ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" : null,
        transition,

        // keep top "layer" of animation as a fixed position
        // this will, however, reset the scroll position of the page being dismissed
        ...(isPop
          ? {
              position: "fixed",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }
          : {}),
      };
    },
  };
  return (
    <div className="effect-1">
      <AnimatePresence
        initial={false}
        custom={{ action: back }}
        /*  onExitComplete={() => {
          setback(false);
        }} */
      >
        <motion.div
          key={asPath}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
          /*  initial={{
            zIndex: 0,
            x: back ? "-100%" : "100%",
            background: "white",
          }}
          animate={{
            zIndex: 5,
            x: 0,
            transitionEnd: {
              background: "inherit",
            },
            transition: {
              ease: "easeIn",
              duration: 0.25,
            },
          }}
          exit={{
            zIndex: 0,
            position: "absolute",
            opacity: 0.9,
            transition: {
              ease: "easeOut",
              duration: 0.25,
            },
          }} */
        >
          <div style={{ height: "100vh", overflow: "scroll" }}>{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
