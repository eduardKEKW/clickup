import tw from "tailwind-styled-components";
import Image from "next/image";
import logo from "../../public/logo.png";
import { ArrowRigthSvg } from "../svg";
import { ToolTip } from "../Helpers/Tooltip";
import { SettingsButton } from "./SettingsButton";
import { MenuSearch } from "./Search";
import { Navigation } from "./Navigation";
import { Spaces } from "./Lists/Spaces/Index";

const MenuLeftContainer = tw.div<any>`
    border
    border-l-gray-200
    w-72
    flex-none
    h-screen
    bg-white
    shadow-md
    group-sidebar
`;

export const MenuLeft = () => {
  return (
    <MenuLeftContainer>
      <div className="flex flex-col">
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
              <div className="flex items-center">
                <ArrowRigthSvg className="w-3 h-3 fill-violet-500 stroke-violet-500 rotate-180 -mr-2" />
                <ArrowRigthSvg className="w-3 h-3 fill-violet-500 stroke-violet-500 rotate-180" />
              </div>
            </ToolTip>
          </div>
        </div>

        <MenuSearch />

        <Navigation />

        <Spaces />
      </div>
    </MenuLeftContainer>
  );
};
