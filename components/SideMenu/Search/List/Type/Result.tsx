import { FiCheckSquare } from "react-icons/fi";
import { RiCheckboxBlankFill } from "react-icons/ri";

import { AiOutlineCopy, AiOutlineDeleteRow } from "react-icons/ai";

import { MdOpenInNew } from "react-icons/md";

import { BsDot } from "react-icons/bs";
import { ListHeader } from "../Header";
import { ToolTip } from "../../../../Helpers/Tooltip";

const items = [
  {
    name: "Learn about powerful task descriptions - click here!",
    status: "1",
    from: "Space/List",
    time: "2 weeks ago",
    id: 1,
  },
  {
    name: " 👈 Click on the colored square to change this task's status ",
    status: "2",
    from: "Space/List2",
    time: "2 weeks ago",
    id: 2,
  },
  {
    name: "Task1",
    status: "1",
    from: "Space/List1",
    time: "2 weeks ago",
    id: 3,
  },
  {
    name: "Task2",
    status: "3",
    from: "Space/list",
    time: "1 weeks ago",
    id: 6,
  },
  {
    name: "Task2",
    status: "3",
    from: "Space/list",
    time: "1 weeks ago",
    id: 7,
  },
  {
    name: "Task2",
    status: "3",
    from: "Space/list",
    time: "1 weeks ago",
    id: 8,
  },

  {
    name: "Task2",
    status: "3",
    from: "Space/list",
    time: "1 weeks ago",
    id: 9,
  },
];
const filters = [
  {
    name: "Relevant",
    id: 1,
  },
  {
    name: "Recent",
    id: 2,
  },
];

export const ResultList = () => {
  return (
    <div className="flex flex-col">
      <ListHeader name="Result" filters={filters} />
      <div className="">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex gap-4 items-center p-2 cursor-pointer hover:bg-gray-200 text-sm group-item"
            >
              <FiCheckSquare className="text-lg w-10" />
              <div className="flex flex-col gap-1 grow">
                <span>{item.name}</span>
                <div className="flex place-content-start place-items-center gap-1 text-xm text-gray-500">
                  <span className="center">
                    <RiCheckboxBlankFill className="w-2 h-2 mr-1 relative top-[1px]" />
                    <span>To Do</span>
                  </span>
                  <span className="center">
                    <i className="h-full">
                      <BsDot className="stroke-slate-900 stroke-1 relative top-[1px]" />
                    </i>
                    <ToolTip text={item.from}>
                      <span>{item.from}</span>
                    </ToolTip>
                  </span>
                  <span className="center">
                    <BsDot className="stroke-slate-900 stroke-1 relative top-[1px]" />
                    {item.time}
                  </span>
                </div>
              </div>
              <div className="flex p-2 text-base gap-3 invisible group-item-hover:visible text-gray-600">
                <ToolTip text="Copy URL">
                  <span className="center border border-gray-400 rounded-md p-1 bg-white cursor-pointer">
                    <AiOutlineCopy className="fill-gray-900" />
                  </span>
                </ToolTip>
                <ToolTip text="Remove From Tray">
                  <span className="center border border-gray-400 rounded-md p-1 bg-white cursor-pointer">
                    <AiOutlineDeleteRow className="fill-gray-900" />
                  </span>
                </ToolTip>

                <ToolTip text="Open In New Tab">
                  <span className="center border border-gray-400 rounded-md p-1 bg-white cursor-pointer">
                    <MdOpenInNew className="fill-gray-900" />
                  </span>
                </ToolTip>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
