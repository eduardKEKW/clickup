import { LegacyRef, RefObject, useEffect } from "react";

export const useOnClickOutside = <T extends HTMLElement>({
  ref,
  handler,
  ignorePopup = false,
}: {
  ref: RefObject<T>;
  handler: (event: Event) => void;
  ignorePopup?: boolean;
}): void => {
  useEffect(() => {
    const listener = (event: Event) => {
      const popupContext = document.getElementById("popup");

      if (
        (ref && (!ref.current || ref.current.contains(event.target as Node))) ||
        (ignorePopup && popupContext?.contains(event.target as Node))
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
