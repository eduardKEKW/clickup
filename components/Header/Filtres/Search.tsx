import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { Popup } from "../../Helpers/Popup";
import { ToggleBtn } from "../../Helpers/Toggle";
import { Item } from "../../SideMenu/Lists/Spaces/Options";

export const SearchBtn = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const [searchTerm, setSearhcTerm] = useState<string>("");

  return (
    <div className="flex items-center gap-2 mx-3">
      <AiOutlineSearch className="w-5 h-5" />
      <input
        value={searchTerm}
        className="outline-none"
        onChange={(e) => setSearhcTerm(e.target.value)}
        placeholder="Search Tasks..."
      />
      <Popup handleAction={(v) => setIsOptionsOpen(v)}>
        <>
          <Popup.Body>
            <div className="flex flex-col items-center gap-1 text-xs text-gray-600">
              <span className="pb-1 w-full">SEARCH IN</span>
              <Item className="justify-between">
                <span>Task Name</span>
                <span className="text-[0.4rem]">
                  <ToggleBtn />
                </span>
              </Item>
              <Item className="justify-between">
                <span>Task description</span>
                <span className="text-[0.4rem]">
                  <ToggleBtn />
                </span>
              </Item>
              <Item className="justify-between">
                <span>Custom Fields</span>
                <span className="text-[0.4rem]">
                  <ToggleBtn />
                </span>
              </Item>
            </div>
          </Popup.Body>
          <Popup.Content>
            <div className="flex items-center">
              <span className={`invisible ${searchTerm.length && "visible"}`}>
                <TiDelete />
              </span>

              <span
                className={`border-r border-gray-200 mr-1 cursor-pointer hover:bg-gray-200 ${
                  isOptionsOpen && "bg-gray-200"
                }`}
              >
                <MdOutlineKeyboardArrowDown
                  className={`w-4 h-4 transition-[transform] duration-150 text-sm${
                    isOptionsOpen && "rotate-180"
                  }`}
                />
              </span>
            </div>
          </Popup.Content>
        </>
      </Popup>
    </div>
  );
};
