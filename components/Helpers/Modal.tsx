import tw from "tailwind-styled-components";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useClickOutside";

const ModalContainer = tw.div<any>`
    fixed
    top-1/2
    left-1/2
    shadow-modal
    rounded-lg
    -translate-y-1/2
    -translate-x-1/2
    max-h-full
    min-w-64
    z-20
`;

export const Modal = ({
  children,
  open,
  onClose,
}: {
  children: JSX.Element;
  open: boolean;
  onClose: () => void;
}) => {
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside<HTMLDivElement>({
    ref: modalRef,
    handler: () => onClose(),
    ignorePopup: true,
  });

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return open && mounted
    ? createPortal(
        <ModalContainer ref={modalRef}>{children}</ModalContainer>,
        document.getElementById("modal") as Element
      )
    : null;
};
