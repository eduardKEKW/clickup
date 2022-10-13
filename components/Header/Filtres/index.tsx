import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineUser } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import tw from "tailwind-styled-components";
import { Popup } from "../../Helpers/Popup";
import { ToggleBtn } from "../../Helpers/Toggle";
import { ToolTip } from "../../Helpers/Tooltip";
import { Item } from "../../SideMenu/Lists/Spaces/Options";
import { Assignees } from "./Assignees";
import { FilterBtn } from "./Filter";
import { Group } from "./Group";
import { SearchBtn } from "./Search";
import { Subtasks } from "./Subtasks";

const SubBarContainer = tw.div<any>`
    flex
    items-center
    justify-between
    w-full
    pl-1
    pr-5
    border-t
    h-8
    border-gray-200
    text-xs
    text-gray-400
    transition-[padding]
    ${(props) => props.$isAssignesMenuOpen && "pr-[16rem]"}
`;

const MeBtn = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <div
      onClick={() => setIsSelected((v) => !v)}
      className={`hover:bg-gray-200 rounded-xl p-[3px] ${
        isSelected && "text-white bg-violet-500 hover:bg-violet-500"
      }`}
    >
      <ToolTip text="Only show tasks assigned to me." direction="top">
        <div className="flex items-center gap-1 cursor-pointer">
          <AiOutlineUser />
          <span>Me</span>
          {isSelected && <MdCancel className={`w-5 h-5 text-gray-200`} />}
        </div>
      </ToolTip>
    </div>
  );
};

export const SubBar = () => {
  const [isAssignesMenuOpen, setIsAssignesMenuOpen] = useState<boolean>(false);

  return (
    <SubBarContainer $isAssignesMenuOpen={isAssignesMenuOpen}>
      <SearchBtn />
      <div className="flex items-center gap-2 text-gray-600">
        <FilterBtn />

        <Group />

        <Subtasks />

        <MeBtn />

        <Assignees
          isAssignesMenuOpen={isAssignesMenuOpen}
          setIsAssignesMenuOpen={setIsAssignesMenuOpen}
        />

        <Popup>
          <>
            <Popup.Body className="w-52 -translate-x-36">
              <div className="flex flex-col text-xs">
                <div className="flex items-center justify-between">
                  <span className="pointer-events-none">SHOW</span>

                  <ToolTip
                    direction="top"
                    text="Set default settings for this to avoid having to change them on every view."
                  >
                    <p className="cursor-pointer text-violet-400 hover:underline">
                      Default Settings
                    </p>
                  </ToolTip>
                </div>

                <div className="flex flex-col items-center gap-2 mt-2">
                  <Item className="justify-between">
                    <span>Columns</span>
                    <IoIosArrowForward />
                  </Item>

                  <Item className="justify-between">
                    <span>Task Location</span>
                    <span className="text-[0.3rem]">
                      <ToggleBtn />
                    </span>
                  </Item>

                  <span className="w-full h-0 border-t border-gray-200"></span>

                  <Item className="justify-between">
                    <span>Subtask parents name</span>
                    <span className="text-[0.3rem]">
                      <ToggleBtn />
                    </span>
                  </Item>

                  <Item className="justify-between">
                    <span>Close tasks</span>
                    <span className="text-[0.3rem]">
                      <ToggleBtn />
                    </span>
                  </Item>

                  <Item className="justify-between">
                    <span>Close subtasks</span>
                    <span className="text-[0.3rem]">
                      <ToggleBtn />
                    </span>
                  </Item>

                  <span className="w-full h-0 border-t border-gray-200"></span>

                  <Item className="justify-between">
                    <span>Empty Statusse</span>
                    <span className="text-[0.3rem]">
                      <ToggleBtn />
                    </span>
                  </Item>

                  <Item className="justify-between">
                    <span>Wrap Text</span>
                    <span className="text-[0.3rem]">
                      <ToggleBtn />
                    </span>
                  </Item>
                </div>
              </div>
            </Popup.Body>
            <Popup.Content>
              <div className="flex items-center gap-1 hover:bg-gray-200 p-1 cursor-pointer rounded-lg">
                <AiOutlineEyeInvisible />
                Show
              </div>
            </Popup.Content>
          </>
        </Popup>
      </div>
    </SubBarContainer>
  );
};
