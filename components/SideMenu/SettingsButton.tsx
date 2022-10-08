import tw from "tailwind-styled-components";
import { Popup } from "../Helpers/Popup";
import { ToggleBtn } from "../Helpers/Toggle";
import { ToolTip } from "../Helpers/Tooltip";
import {
  SettingsSvg,
  DownloadSvg,
  ArrowDownSvg,
  BookSvg,
  DarkDownSvg,
} from "../svg";

const ListItem = tw.li<any>`
    flex
    items-center
    gap-2
    py-2    
    px-2
    cursor-pointer
    rounded-lg
    hover:bg-gray-200
    text-gray-700
`;

export const SettingsButton = () => {
  return (
    <div className="">
      <Popup>
        <>
          <Popup.Content>
            <div>
              <ToolTip text="Sidebar settings">
                <div className="p-1 opacity-0 transition-[opacity] duration-200 group-sidebar-hover:opacity-100 cursor-pointer hover:bg-gray-100">
                  <SettingsSvg className="w-4 h-4 stroke-gray-300" />
                </div>
              </ToolTip>
            </div>
          </Popup.Content>
          <Popup.Body className="w-64 translate-y-9">
            <>
              <span className="tracking-widest px-2 pointer-events-none text-xs text-gray-500 p-0 m-0">
                SIDEBAR SETTINGS
              </span>

              <ul className="mt-2 text-sm">
                <ListItem>
                  <DownloadSvg /> <span> Show Archive </span>
                </ListItem>
                <ListItem>
                  <i>
                    <ArrowDownSvg />
                  </i>{" "}
                  Expend all Folders
                </ListItem>
                <ListItem>
                  <i>
                    <BookSvg />
                  </i>{" "}
                  Layout sieze & style
                </ListItem>
                <ListItem>
                  <i>
                    <DarkDownSvg />
                  </i>{" "}
                  Dark side (bar){" "}
                  <span className="ml-auto text-[0.4rem]">
                    <ToggleBtn />
                  </span>
                </ListItem>
              </ul>
            </>
          </Popup.Body>
        </>
      </Popup>
    </div>
  );
};
