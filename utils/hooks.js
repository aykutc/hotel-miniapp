import { setBack } from "data/api";
import { useRouter } from "next/router";

export const useRouterPush = () => {
  const router = useRouter();
  const push = (path) => {
    setBack(false);
    console.log("push");
    setTimeout(() => {
      router.push(path);
    }, 10);
    /*   setTimeout(() => {
      setBack(true);
    }, 100); */
  };
  return push;
};

export const useRouterBack = () => {
  const router = useRouter();
  const back = (path) => {
    setBack(true);
    console.log("back");
    setTimeout(() => {
      router.back();
    }, 10);
  };
  return back;
};
