import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { CupertinoPane } from 'cupertino-pane';
import Close from '../icons/Close';
import HeaderTitle from '../HeaderTitle';

const BottomSheet = ({ onDismiss, isOpen, children, title, leftComponent, className }) => {
  let myPane = useRef();

  useEffect(() => {
    myPane.current = new CupertinoPane(
      '.' + className,
      // Pane container selector
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
          onDidDismiss: onDismiss,
        },
        fastSwipeClose: true,
        bottomClose: true,
        lowerThanBottom: false,
      }
    );

    if (isOpen) {
      myPane.current.present({ animate: true });
    }
  }, [isOpen]);

  return (
    isOpen && (
      <div className={className}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px',
          }}
        >
          {leftComponent || <div />}
          <HeaderTitle>{title}</HeaderTitle>
          <Close onClick={() => myPane.current.destroy({ animate: true }).then(onDismiss)} />
        </div>

        {children}
      </div>
    )
  );
};

export default BottomSheet;
