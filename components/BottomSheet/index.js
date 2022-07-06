import React from "react";
import { CupertinoPane } from "cupertino-pane";
function BottomSheet() {
  React.useEffect(() => {
    window.onload = function () {
      var myPane = new CupertinoPane(
        ".cupertino-pane", // Pane container selector
        {
          backdrop: true,
          fitHeight: true,
          parentElement: "body", // Parent container
          breaks: {
            middle: { enabled: true, bounce: true },
          },
          events: {
            onDrag: () => console.log("Drag event"),
          },
          fastSwipeClose: true,
        }
      );
      myPane.present({ animate: true }).then((res) => {});
    };
  }, []);

  return <div className="cupertino-pane">BottomSheet</div>;
}

export default BottomSheet;
