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
      snapPoints={[0.93]}
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
              padding: "21px",
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
