import { IoIosArrowForward } from "react-icons/io";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import tw from "tailwind-styled-components";

const AccordionBody = tw.div<any>`
    flex 
    flex-col
    transition-all
    duration-300
    overflow-hidden 
    ${(props) => (props.$open ? "h-[100%]" : "h-0")}
`;

const AccordeonContext = createContext<{
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({
  setIsOpen: () => null,
});

export const Accodion = ({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AccordeonContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      <div className={`flex flex-col w-full ${className}`}>{children}</div>
    </AccordeonContext.Provider>
  );
};

Accodion.Body = ({ children }: { children: JSX.Element }) => {
  const { isOpen } = useContext(AccordeonContext);

  return <AccordionBody $open={isOpen}>{children}</AccordionBody>;
};

Accodion.Header = ({
  children,
  className,
}: {
  children:
    | JSX.Element
    | ((prosp: { isOpen: boolean | undefined }) => JSX.Element);
  className?: string;
}) => {
  const { isOpen, setIsOpen } = useContext(AccordeonContext);

  return (
    <div
      onClick={() => setIsOpen((v) => !v)}
      className={`flex cursor-pointer ${className}`}
    >
      <div className="grow">
        {typeof children === "function" ? children({ isOpen }) : children}
      </div>
      <IoIosArrowForward
        className={`transition-[transform] duration-200 ${
          isOpen ? "rotate-90" : "rotate-0"
        }`}
      />
    </div>
  );
};