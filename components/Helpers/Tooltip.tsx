import React, { useEffect } from "react";
import { ReactElement, useRef, useState } from "react";
import ReactDOM from "react-dom";
import tw from "tailwind-styled-components";

const ToolTipBody = tw.div<any>`
    invisible
    absolute
    group-tooltip-hover:visible
    w-auto whitespace-wrap px-2 py-1 bg-gray-700 rounded-md text-center text-white text-xs 
    after:content-[''] after:absolute after:border-8 after:border-transparent
    max-w-[15rem]
    z-50
`;

const ToolTipBottomBody = tw(ToolTipBody)`
    ${(props) => props.$show && "visible"}
    after:left-1/2
    after:-translate-y-full
    after:-translate-x-1/2
    after:border-x-transparent 
    after:border-t-transparent
    after:border-b-gray-700
`;

const ToolTipRightBody = tw(ToolTipBody)`
    ${(props) => props.$show && "visible"}
    after:left-0
    after:-translate-x-[80%]
    after:border-y-transparent 
    after:border-b-transparent
    after:border-r-gray-700
`;

const ToolTipLefttBody = tw(ToolTipBody)`
    ${(props) => props.$show && "visible"}
    after:left-full
    after:-translate-x-[10%]
    after:border-x-transparent 
    after:border-y-transparent
    after:border-l-gray-700
`;

const ToolTipTopBody = tw(ToolTipBody)`
    ${(props) => props.$show && "visible"}
    after:left-1/2
    after:top-full
    after:-translate-x-[50%]
    after:border-x-transparent 
    after:border-t-transparent
    after:border-t-gray-700
`;

const options = {
  bottom: ToolTipBottomBody,
  right: ToolTipRightBody,
  top: ToolTipTopBody,
  left: ToolTipLefttBody,
};

const getPoint = ({
  el,
  tt,
  direction,
  space,
}: any): { x: number; y: number } => {
  const pt = { x: 0, y: 0 };

  if (!tt || !el) return pt;

  const elRect = el.getBoundingClientRect();

  switch (direction) {
    case "left":
      pt.x = elRect.left - (tt.offsetWidth + space);
      pt.y = elRect.top + (el.offsetHeight - tt.offsetHeight) / 2;
      break;
    case "right":
      pt.x = elRect.right + space;
      pt.y = elRect.top + (el.offsetHeight - tt.offsetHeight) / 2;
      break;
    case "top":
      pt.x = elRect.left + (el.offsetWidth - tt.offsetWidth) / 2;
      pt.y = elRect.top - (tt.offsetHeight + space);
      break;
    default:
      pt.x = elRect.left + (el.offsetWidth - tt.offsetWidth) / 2;
      pt.y = elRect.bottom + space;
  }

  return pt;
};

export const ToolTip = ({
  children,
  text,
  toolTipClass: toolTipClassProps = "",
  direction = "bottom",
  space = 15,
}: {
  children: ReactElement;
  text: string;
  className?: string;
  toolTipClass?: string;
  direction?: "bottom" | "right" | "top" | "left";
  space?: number;
}) => {
  const Body = options[direction];
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState<number>(0);
  const posRef = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const handleMOver = (e: Event) => {
    setShow(1);

    posRef.current = getPoint({
      el: e.currentTarget,
      tt: tooltipRef.current,
      direction,
      space,
    });
  };

  const handleMOut = () => setShow(0);

  return (
    <>
      {React.cloneElement(children, {
        onMouseOver: handleMOver,
        onMouseOut: handleMOut,
      })}
      {mounted &&
        ReactDOM.createPortal(
          <Body
            $show={show}
            ref={tooltipRef}
            className={toolTipClassProps}
            style={{
              top: `${posRef.current.y}px`,
              left: `${posRef.current.x}px`,
            }}
          >
            {text}
          </Body>,
          document.getElementById("tooltip") as Element
        )}
    </>
  );
};
