import tw from "tailwind-styled-components";
import Image from "next/image";
import logo from "../../public/logo.png";
import { ArrowRigthSvg } from "../svg";
import { ToolTip } from "../Helpers/Tooltip";
import { SettingsButton } from "./SettingsButton";
import { MenuSearch } from "./Search";
import { Navigation } from "./Navigation";
import { Lists } from "./Lists/Index";
import { AiOutlineQuestionCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
import { GiStarsStack } from "react-icons/gi";
import { useEffect, useState } from "react";

const MenuLeftContainer = tw.div<any>`
  flex-none
  group-sidebar
  flex
  transition-[width, opacity]
  duration-150
  overflow-hidden
  opacity-0
  w-0
  z-10

  ${(props) => {
    if (props.state == "minified") {
      return " max-h-[35rem] absolute left-0 top-[3rem] scrollbar-thin rounded-lg opacity-100 z-10 border-t-[2rem] -mt-3 border-t-transparent w-72 overflow-visible";
    }

    if (props.state == "full") {
      return " w-72 overflow-visible opacity-100 h-screen";
    }

    return "";
  }}
`;

export enum Menu {
  full,
  hide,
  minified,
}

export const MenuLeft = ({
  show: showMenuState = "full",
  setShowMenu,
}: any) => {
  const [currentState, setCurrentState] = useState<keyof typeof Menu>("full");
  const [isMenuHover, setIsMenuHover] = useState<boolean>(false);

  useEffect(() => {
    if (isMenuHover && currentState == "minified") {
      setCurrentState("minified");
    } else {
      setCurrentState(showMenuState);
    }
  }, [showMenuState, isMenuHover]);

  return (
    <MenuLeftContainer
      state={currentState}
      onMouseOver={() => setIsMenuHover(true)}
      onMouseLeave={() => setIsMenuHover(false)}
    >
      <div
        className={`flex flex-col w-full bg-white shadow-md h-auto  ${
          currentState == "minified" && "rounded-lg"
        }`}
      >
        <div
          className={`scrollbar-thin h-auto ${
            currentState == "minified" && "overflow-y-scroll"
          }`}
        >
          {currentState == "full" && (
            <div className="flex items-center justify-between justify-items-center h-12 mx-2">
              <div className="flex gap-2 items-center justify-between cursor-pointer">
                <div className="h-6 w-5 relative">
                  <Image src={logo} layout="fill" />
                </div>
                <div className="text-gray-700 text-lg font-extrabold subpixel-antialiased">
                  ClickUp
                </div>
              </div>
              <div className="flex gap-2">
                <SettingsButton />

                <ToolTip
                  text="Collapse sidebar (q)"
                  className="cursor-pointer p-1 hover:bg-gray-100"
                >
                  <div
                    onClick={() => setShowMenu("hide")}
                    className="flex items-center hover:bg-gray-200 cursor-pointer p-1 rounded-md"
                  >
                    <ArrowRigthSvg className="w-3 h-3 fill-violet-500 stroke-violet-500 rotate-180 -mr-2" />
                    <ArrowRigthSvg className="w-3 h-3 fill-violet-500 stroke-violet-500 rotate-180" />
                  </div>
                </ToolTip>
              </div>
            </div>
          )}

          <MenuSearch />

          <Navigation />

          <Lists />
        </div>

        <div
          className={`flex items-end px-2 ${currentState == "full" && "grow"}`}
        >
          <div className="flex items-center justify-between border-t border-gray-200 w-full">
            <div className="flex items-center justify-between p-2">
              <ToolTip text="args Worksspace" direction="right">
                <span className="cursor-pointer z-10 w-7 h-7 text-xs rounded-full bg-green-400 text-white text-center leading-7">
                  E
                </span>
              </ToolTip>
              <span className="cursor-pointer w-7 h-7 text-xs rounded-full bg-blue-400 text-white text-center leading-7 relative -translate-x-2">
                EA
              </span>
            </div>

            <div className="flex gap-2">
              <ToolTip text="invite user" direction="top">
                <button className="flex items-center outline-none gap-1 bg-gray-200 h-6 p-2 rounded-md text-xs text-gray-500">
                  <AiOutlineUsergroupAdd /> Invite
                </button>
              </ToolTip>

              <ToolTip text="upgrade" direction="top">
                <button className="flex items-center outline-none gap-1 bg-gray-200 h-6 p-2 rounded-md text-xs text-gray-500">
                  <GiStarsStack /> Invite
                </button>
              </ToolTip>
            </div>
            <AiOutlineQuestionCircle className="hover:text-violet-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </MenuLeftContainer>
  );
};
