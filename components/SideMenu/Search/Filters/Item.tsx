import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import tw from "tailwind-styled-components";

export const ChildrenList = tw.ul<any>`
    overflow-hidden 
    ease-in
    transition-[max-height] 
    duration-150
    max-h-0
    ${(props) => props.$show && "max-h-20"}
`;

export const ListItem = ({ name, list }: { name: string; list: any }) => {
  const [showChildren, setShowChildren] = useState<boolean>(false);

  const onToggle = (e: any) => {
    if ((e.target as HTMLInputElement)?.type?.toString() == "checkbox") return;
    setShowChildren((v) => !v);
  };

  return (
    <li className="flex flex-col">
      <div
        onClick={(e) => onToggle(e)}
        className="flex flex-row items-center gap-1 cursor-pointer hover:bg-gray-200 p-1 rounded-md px-2"
      >
        <RiArrowDropDownFill className="text-xl m-0 p-0" />
        <span className="bg-gray-600 rounded-md w-5 center h-5 text-center text-gray-300">
          S
        </span>
        <span className="grow px-1">{name}</span>
        <input type="checkbox" className="border border-gray-200 opacity-30" />
      </div>

      <ChildrenList $show={showChildren}>
        {list.map((item: any) => {
          return (
            <li
              key={item.name}
              className="pl-10 cursor-pointer center hover:bg-gray-200 p-1 rounded-md px-2"
            >
              <span className="grow">{item.name}</span>
              <input
                type="checkbox"
                className="border border-gray-200 opacity-30"
              />
            </li>
          );
        })}
      </ChildrenList>
    </li>
  );
};
