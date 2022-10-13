import React from "react";
import {
  createContext,
  SetStateAction,
  Dispatch,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
import ReactDOM from "react-dom";
import tw from "tailwind-styled-components";
import { useOnClickOutside } from "../../hooks/useClickOutside";

const PopUpContext = createContext<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  parentPosRef: React.MutableRefObject<any>;
}>({
  open: false,
  setOpen: () => null,
  parentPosRef: { current: {} },
});

export const Popup = ({
  children,
  handleAction = () => null,
  show = false,
}: {
  children: JSX.Element;
  className?: string;
  handleAction?: (v: boolean) => void;
  show?: boolean;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const parentPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    handleAction(open);
  }, [open]);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <PopUpContext.Provider
      value={{
        open,
        setOpen,
        parentPosRef,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};

// top-[calc(100%+1rem)]
const PopUpBody = tw.div<any>`
    absolute
    bg-white 
    translate-y-5
    shadow-menu
    rounded-md
    flex
    flex-col
    p-3
    h-auto 
    scale-0
    ease-in-out
    transition-[transform]
    duration-75
    z-40
    ${(props) => (props.$show ? "scale-100" : "scale-0")}
`;

Popup.Body = ({
  children,
  className,
  ignorePopup = false,
}: {
  children: JSX.Element;
  className?: string;
  ignorePopup?: boolean;
}) => {
  const { open, setOpen, parentPosRef } = useContext(PopUpContext);
  const popUpRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  useOnClickOutside({
    ref: popUpRef,
    ignorePopup,
    handler: () => setOpen(false),
  });

  return (
    <>
      {mounted &&
        ReactDOM.createPortal(
          // @ts-ignore
          <PopUpBody
            style={{
              top: `${parentPosRef?.current?.y + 15}px`,
              left: `${parentPosRef?.current?.x}px`,
            }}
            ref={popUpRef}
            $show={open}
            className={className}
          >
            {children}
          </PopUpBody>,
          document.getElementById("popup") as Element
        )}
    </>
  );
};

Popup.Content = ({
  children,
}: {
  children: JSX.Element;
  className?: string;
}) => {
  const { setOpen, parentPosRef } = useContext(PopUpContext);

  const onParentClick = (e: Event) => {
    const elRect = (e.currentTarget as HTMLElement)?.getBoundingClientRect();

    parentPosRef.current = {
      x: elRect.left,
      y: elRect.top,
    };

    setOpen(true);
  };

  return (
    <>
      {React.cloneElement(children, {
        onClick: (e: Event) => {
          e.stopPropagation();
          onParentClick(e);
        },
      })}
    </>
  );
};
