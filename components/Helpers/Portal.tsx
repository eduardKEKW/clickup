import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({
  children,
  parent,
  disable = false,
}: {
  children: JSX.Element;
  parent: string;
  disable?: boolean;
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return !disable && mounted ? (
    createPortal(<>{children}</>, document.getElementById(parent) as Element)
  ) : (
    <></>
  );
};
