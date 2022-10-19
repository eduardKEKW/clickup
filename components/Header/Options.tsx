import {
  AiOutlineEdit,
  AiOutlineShareAlt,
  AiOutlineUser,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosColorWand } from "react-icons/io";
import { TbRobot } from "react-icons/tb";
import { SiClickup } from "react-icons/si";
import { Popup } from "../Helpers/Popup";
import { Item } from "../SideMenu/Lists/Spaces/Options";
import { MdOutlineKeyboardAlt } from "react-icons/md";

const AutomateBtn = () => {
  return (
    <div className="flex items-stretch gap-1 cursor-pointer rounded-lg text-sm border border-gray-300 hover:bg-gray-100">
      <Popup>
        <>
          <Popup.Body className="bg-gray-100 p-0 rounded-md">
            <div className="text-xs w-52 rounded-md">
              <div className="bg-white p-3 border-b border-b-gray-200">
                <div className="flex items-center gap-2">
                  <span className="rounded-full text-center bg-gray-200 border border-gray-300 text-blue-700 w-5 h-5">
                    0
                  </span>
                  <span>Active Automations</span>
                </div>

                <button className="w-full bg-blue-700 text-white text-center rounded-md p-2 mt-3">
                  + Add Automation
                </button>
              </div>

              <div className="p-3 flex gap-2 flex-col">
                <div className="">
                  <span>Always assign tasks to:</span>
                  <div className="flex gap-2 items-center ml-1 mt-2 border border-gray-400 rounded-xl p-1 text-gray-400 cursor-pointer">
                    <AiOutlineUser className="border-dotted border-2 border-gray-400 rounded-full w-5 h-5" />
                    <span>No Assignees</span>
                  </div>
                </div>

                <div className="">
                  <span>Always assign tasks to:</span>
                  <div className="flex gap-2 items-center ml-1 mt-2 border border-gray-400 rounded-xl p-1 text-gray-400 cursor-pointer">
                    <AiOutlineUser className="border-dotted border-2 border-gray-400 rounded-full w-5 h-5" />
                    <span>No Watchers</span>
                  </div>
                </div>
              </div>
            </div>
          </Popup.Body>
          <Popup.Content>
            <div className="flex items-center gap-1 group-hover:bg-gray-200 p-1">
              <TbRobot className="w-4 h-4" />
              <span className="lg:block sm:hidden">Automate</span>
            </div>
          </Popup.Content>
        </>
      </Popup>

      <Popup>
        <>
          <Popup.Content>
            <div className="border-l border-l-gray-200 p-1 rounded-lg hover:bg-gray-300 px-2 center">
              <IoIosArrowDown />
            </div>
          </Popup.Content>
          <Popup.Body className="-translate-x-[4rem]">
            <div className="flex flex-col gap-2 text-sm text-gray-600 w-36">
              <span className="text-xs">CUSTOMIZE SPACE</span>
              <Item>
                <IoIosColorWand />
                <span>Templates</span>
              </Item>
              <Item>
                <SiClickup />
                <span>Clickups</span>
              </Item>
              <Item>
                <AiOutlineEdit />
                <span>Custom Fields</span>
              </Item>
              <Item>
                <MdOutlineKeyboardAlt />
                <span>Statuses</span>
              </Item>
            </div>
          </Popup.Body>
        </>
      </Popup>
    </div>
  );
};

export const Options = () => {
  return (
    <div className="flex items-center text-gray-500 gap-2">
      <AutomateBtn />
      <button className="flex items-center gap-1 cursor-pointer rounded-lg text-sm border border-gray-300 p-1 hover:bg-gray-200">
        <AiOutlineShareAlt className="w-4 h-4" />
        <span>Share</span>
      </button>
    </div>
  );
};
