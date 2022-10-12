import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({
  children,
  parent,
}: {
  children: JSX.Element;
  parent: string;
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? (
    createPortal(<>{children}</>, document.getElementById(parent) as Element)
  ) : (
    <></>
  );
};
