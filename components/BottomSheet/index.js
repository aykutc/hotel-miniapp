import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { CupertinoPane } from 'cupertino-pane';
import Close from '../icons/Close';
import HeaderTitle from '../HeaderTitle';

const BottomSheet = ({ onDismiss, isOpen, children, title, leftComponent }) => {
  let myPane = useRef();
  const isOpenRef = useRef();

  useEffect(() => {
    isOpenRef.current = isOpen;

    if (isOpen) myPane.current?.present?.({ animate: true });
    else myPane.current?.destroy?.({ animate: true });
  }, [isOpen]);

  const onDidDismiss = () => {
    if (isOpenRef.current) myPane.current?.present?.({ animate: true });
  };

  useEffect(() => {
    window.onload = function () {
      myPane.current = new CupertinoPane(
        '.cupertino-pane', // Pane container selector
        {
          buttonDestroy: false,
          showDraggable: false,
          backdrop: true,
          fitHeight: true,
          parentElement: 'body', // Parent container
          breaks: {
            middle: { enabled: true, bounce: true },
          },
          events: {
            onDidDismiss: onDidDismiss,
            onWillDismiss: onDismiss,
          },
          fastSwipeClose: true,
          bottomClose: true,
          lowerThanBottom: false,
        }
      );

      if (isOpen) {
        myPane.current.present({ animate: true });
      }
    };
  }, []);

  return (
    <div className="cupertino-pane">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px' }}>
        {leftComponent || <div />}
        <HeaderTitle>{title}</HeaderTitle>
        <Close onClick={onDismiss} />
      </div>

      {children}
    </div>
  );
};

export default BottomSheet;
