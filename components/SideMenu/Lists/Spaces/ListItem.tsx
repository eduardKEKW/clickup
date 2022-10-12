import Link from "next/link";
import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { TbCircleDotted } from "react-icons/tb";
import { TiCancelOutline } from "react-icons/ti";
import tw from "tailwind-styled-components";
import { Popup } from "../../../Helpers/Popup";
import { ToolTip } from "../../../Helpers/Tooltip";
import { ChildrenList } from "../../Search/Filters/Item";
import { items } from "./Index";
import { Options } from "./Options";

export const ListItemBody = tw.div<any>`
    flex 
    items-center 
    py-[0.45rem] 
    text-gray-700 
    text-sm 
    cursor-pointe
    group
    pl-1
    cursor-pointer
    ${(props) =>
      props.$isActive
        ? "border-l-4 border-l-lg border-l-violet-500 bg-violet-100 hover:bg-violet-100 pl-0"
        : "hover:bg-gray-200"}
`;

const colors = [
  {
    id: 1,
    color: "bg-red-600",
  },
  {
    id: 2,
    color: "bg-yellow-600",
  },
  {
    id: 3,
    color: "bg-green-600",
  },
];

const ColorSelectBtn = () => {
  return (
    <div className="">
      <Popup>
        <>
          <Popup.Content>
            <div>
              <ToolTip text="List Color">
                <div className="">
                  <TbCircleDotted className="w-2 h-2 hover:text-black-900" />
                </div>
              </ToolTip>
            </div>
          </Popup.Content>
          <Popup.Body>
            <div className="flex flex-col items-center gap-2 p-1">
              <div className="flex gap-4 items-center">
                <span className="text-gray-300 cursor-pointer">
                  <TiCancelOutline />
                </span>
                {colors.map(({ id, color }) => {
                  return (
                    <span
                      className={`w-3 h-3 rounded-sm cursor-pointer ${color}`}
                    ></span>
                  );
                })}
              </div>
              <div className="text-center w-full text-gray-400 text-xs border border-dotted border-b-gray-600 cursor-pointer hover:text-blue-600">
                Add/Remove Colors
              </div>
            </div>
          </Popup.Body>
        </>
      </Popup>
    </div>
  );
};

export const ListItem = ({
  item,
  isActive,
  setIsActive,
}: {
  item: typeof items[0];
  isActive: boolean;
  setIsActive: (v: number) => void;
}) => {
  const [showChildren, setShowChildren] = useState<boolean>(false);
  const [isItemHover, setIsItemHover] = useState<boolean>(false);

  return (
    <div
      key={item.id}
      className="fllx flex-col"
      onClick={() => setShowChildren((v) => !v)}
    >
      <ListItemBody
        onMouseEnter={() => setIsItemHover(true)}
        onMouseLeave={() => setIsItemHover(false)}
        $isActive={isActive}
      >
        <IoMdArrowDropright
          className={`transiton-[rotate] duration-150 w-4 h-4 relative top-[1.5px] invisible group-accordeon-hover:visible ${
            showChildren ? "rotate-90" : "rotate-0"
          }`}
        />
        <div className="w-full flex items-center gap-2 pr-3">
          <div className="w-5 h-5 p-1 text-center bg-violet-500 text-white font-medium rounded-md leading-3 relative top-[1.5px]">
            A
          </div>
          <div className="grow flex items-start">
            <ToolTip
              direction="right"
              text="Shows Everything from all Lists in this Space"
            >
              <div className="">
                <Link href="#">
                  <span
                    className="hover:underline decoration-dotted"
                    onClick={() => setIsActive(item.id)}
                  >
                    {item.name}
                  </span>
                </Link>
              </div>
            </ToolTip>
          </div>
          <Options isItemHover={isItemHover} />
        </div>
      </ListItemBody>

      <ChildrenList
        onClick={(e: Event) => e.stopPropagation()}
        $show={showChildren}
      >
        {item.list.map((listItem) => {
          return (
            <li
              key={listItem.id}
              className="flex items-center gap-2 pl-10 text-sm hover:bg-gray-200 relative cursor-pointer p-1 pr-4 top-[1.5px] group"
            >
              <ColorSelectBtn />
              <span className="grow">{listItem.name}</span>
            </li>
          );
        })}
      </ChildrenList>
    </div>
  );
};
