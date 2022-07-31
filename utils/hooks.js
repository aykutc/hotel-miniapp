import { setBack } from "data/api";
import { f7 } from "framework7-react";
import { useRouter } from "next/router";

export const useRouterPush = () => {
  /* const router = useRouter(); */
  const push = (path, f7router) => {
    /*   console.log(f7router);
    setBack(false);
    console.log("push"); */
    f7router.navigate(path);

    /*   setTimeout(() => {
      f7router.navigate(path);
    }, 10); */
    /* router.push(path); */
    /*   setTimeout(() => {
      setBack(true);
    }, 100); */
  };
  return push;
};

export const useRouterBack = () => {
  /* const router = useRouter(); */
  const back = (f7router) => {
    f7router.back();

    /* setBack(true);
    console.log("back");
    setTimeout(() => {
      f7router.back();
    }, 10); */
  };
  return back;
};
