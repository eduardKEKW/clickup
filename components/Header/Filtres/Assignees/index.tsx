import { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useOnClickOutside } from "../../../../hooks/useClickOutside";
import { Accodion } from "../../../Helpers/Accordion";
import { Portal } from "../../../Helpers/Portal";
import { ToggleBtn } from "../../../Helpers/Toggle";
import { ToolTip } from "../../../Helpers/Tooltip";
import { ArrowRigthSvg } from "../../../svg";

const users = [
  {
    id: 2,
    name: "eduard",
    initials: "EA",
    tasks: 0,
  },
];

const Users = () => {
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-1 my-4 h-full">
      <div
        onClick={() => setSelectedOptionId((id) => (id == -1 ? null : -1))}
        className={`w-full flex items-center gap-2 cursor-pointer hover:bg-violet-50 rounded-md p-1 ${
          selectedOptionId == -1 && "bg-violet-100"
        }`}
      >
        <div className="bg-red-100 rounded-full text-center center w-7 h-7 text-white shadow-md text-[0.55rem]">
          <FiUsers className="w-4 h-4" />
        </div>

        <div className="flex flex-col text-sm grow">
          <div>
            <span>Unnasigned</span>
          </div>
          <span className="text-gray-300 text-xs">3 tasks</span>
        </div>

        <span
          className={`text-gray-300 selection:w-5 h-5 ${
            selectedOptionId == -1 && "text-violet-500"
          }`}
        >
          <RiCheckboxCircleFill className={`w-5 h-5`} />
        </span>
      </div>

      {users.map((user) => (
        <div
          key={user.id}
          onClick={() =>
            setSelectedOptionId((id) => (id == user.id ? null : user.id))
          }
          className={`w-full flex items-center gap-2 cursor-pointer hover:bg-violet-50 rounded-md p-1 ${
            selectedOptionId == user.id && "bg-violet-100"
          }`}
        >
          <div className="bg-blue-500 rounded-full text-center leading-7 w-7 h-7 text-white shadow-md text-[0.55rem]">
            {user.initials}
          </div>

          <div className="flex flex-col text-sm grow">
            <div>
              <span className="hover:border-b-2 border-b-gray-800 border-dotted cursor-pointer">
                {user.name}
              </span>
            </div>
            <span className="text-gray-500 text-xs">{user.tasks} tasks</span>
          </div>

          <span
            className={`text-gray-300 selection:w-5 h-5 ${
              selectedOptionId == user.id && "text-violet-500"
            }`}
          >
            <RiCheckboxCircleFill className={`w-5 h-5`} />
          </span>
        </div>
      ))}
    </div>
  );
};

export const Assignees = ({
  isAssignesMenuOpen,
  setIsAssignesMenuOpen,
}: {
  isAssignesMenuOpen: boolean;
  setIsAssignesMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const assignessMenuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside({
    ref: assignessMenuRef,
    handler: () => setIsAssignesMenuOpen(false),
  });

  return (
    <>
      <div
        onClick={() => setIsAssignesMenuOpen((v) => !v)}
        className={`hover:bg-gray-200 rounded-xl p-[2px] ${
          isAssignesMenuOpen && "text-white bg-violet-500 hover:bg-violet-500"
        }`}
      >
        <ToolTip text="Filter tasks by assigness." direction="top">
          <div className="flex items-center gap-1 cursor-pointer">
            <AiOutlineUser />
            <span>Assigness</span>
            {isAssignesMenuOpen && (
              <MdCancel className={`w-5 h-5 text-gray-200`} />
            )}
          </div>
        </ToolTip>
      </div>

      <Portal parent="assigness" disable={!isAssignesMenuOpen}>
        <div
          ref={assignessMenuRef}
          className="border border-gray-200 shadow-md w-60 h-[calc(100vh-3rem)] relative -top-8 pb-8 p-3 bg-white flex flex-col"
        >
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-lg">Assignees</span>

            <ToolTip
              text="Collapse"
              className="cursor-pointer p-1 hover:bg-gray-100"
              direction="left"
            >
              <div
                onClick={() => setIsAssignesMenuOpen(false)}
                className="flex items-center hover:bg-gray-200 cursor-pointer p-1 rounded-md"
              >
                <ArrowRigthSvg className="w-4 h-4 fill-violet-500 stroke-violet-500 -mr-3" />
                <ArrowRigthSvg className="w-4 h-4 fill-violet-500 stroke-violet-500" />
              </div>
            </ToolTip>
          </div>

          <div className="w-full bg-gray-200 rounded-md flex items-center p-1 mt-5 text-sm">
            <span>
              <AiOutlineSearch className="w-5 h-5 text-gray-400" />
            </span>
            <input
              placeholder="Search"
              type="text"
              className="bg-gray-200 outline-none pl-2"
            />
          </div>

          <div className="grow">
            <Accodion isOpen={true} className="h-1/2">
              <>
                <Accodion.Header>
                  {({ setIsOpen }) => (
                    <div
                      onClick={() => setIsOpen((v) => !v)}
                      className="flex items-center justify-between text-xs mt-5 group cursor-pointer"
                    >
                      <span className="text-gray-400 group-hover:text-violet-400">
                        ASSIGNESS
                      </span>
                      <span className="text-violet-400 hover:underline">
                        select all
                      </span>
                    </div>
                  )}
                </Accodion.Header>
                <Accodion.Body>
                  <Users />
                </Accodion.Body>
              </>
            </Accodion>

            <Accodion isOpen={false}>
              <>
                <Accodion.Header>
                  {({ setIsOpen }) => (
                    <div
                      onClick={() => setIsOpen((v) => !v)}
                      className="flex items-center justify-between text-xs mt-5 group cursor-pointer"
                    >
                      <span className="text-gray-400 group-hover:text-violet-400">
                        TEAMS
                      </span>
                      <span className="text-violet-400 hover:underline">
                        select all
                      </span>
                    </div>
                  )}
                </Accodion.Header>
                <Accodion.Body>
                  <div className="w-full text-center text-sm h-1/2">
                    No results
                  </div>
                </Accodion.Body>
              </>
            </Accodion>
          </div>

          <div className="flex items-center justify-between gap-2 border-t border-gray-200 text-xs h-10 text-violet-400">
            <div className="flex items-center gap-2">
              <AiOutlineUserSwitch />
              <span>Assigned Comments</span>
            </div>
            <span className="text-[0.4rem]">
              <ToggleBtn />
            </span>
          </div>
        </div>
      </Portal>
    </>
  );
};
