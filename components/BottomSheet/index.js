import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
/* import { CupertinoPane } from "cupertino-pane";
 */ import Close from "../icons/Close";
import HeaderTitle from "../HeaderTitle";
import Sheet from "react-modal-sheet";

function BottomSheet({
  children,
  isOpen,
  onClose,
  leftComponent,
  title,
  contentStyle,
}) {
  return (
    <Sheet
      rootId="root"
      isOpen={isOpen}
      onClose={onClose}
      snapPoints={[0.9]}
      initialSnap={0}
      springConfig={{
        stiffness: 200,
        damping: 30,
        mass: 1,
      }}
    >
      <Sheet.Container>
        <Sheet.Header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px",
            }}
          >
            {leftComponent || <div />}
            <HeaderTitle>{title}</HeaderTitle>
            <Close onClick={() => onClose()} />
          </div>
        </Sheet.Header>
        <Sheet.Content disableDrag style={contentStyle}>
          {children}
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop
        onTap={() => {
          onClose();
        }}
      />
    </Sheet>
  );
}

export default BottomSheet;
/* 
const BottomSheet = ({
  onDismiss,
  isOpen,
  children,
  title,
  leftComponent,
  className,
  close,
}) => {
  let myPane = useRef();

  useEffect(() => {
    if (!myPane.current) {
      myPane.current = new CupertinoPane(
        "." + className,
        // Pane container selector
        {
          buttonDestroy: false,
          showDraggable: false,
          backdrop: true,
          fitHeight: true,
          parentElement: "body", // Parent container
          breaks: {
            middle: { enabled: true, bounce: true },
          },
          events: {
            onDidDismiss: onDismiss,

            onWillDismiss: () => {
              document.getElementsByClassName(className)[0].style.display =
                "none";
              document.getElementsByClassName(className)[0].style.visibility =
                "hidden";
            },
          },
          fastSwipeClose: true,
          bottomClose: true,
          lowerThanBottom: false,
        }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (myPane.current) {
      if (isOpen) {
        myPane.current.present({ animate: true });
      } else {
        myPane.current.destroy({ animate: true });
      }
    }
  }, [isOpen]);

  return (
    <div className={className}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px",
        }}
      >
        {leftComponent || <div />}
        <HeaderTitle>{title}</HeaderTitle>
        <Close
          onClick={() =>
            myPane.current.destroy({ animate: true }).then(onDismiss)
          }
        />
      </div>

      {children}
    </div>
  );
};

export default BottomSheet;
 */
