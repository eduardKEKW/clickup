import { useState } from "react";
import { BiPlus, BiSearch } from "react-icons/bi";
import { CgLayoutGridSmall } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import tw from "tailwind-styled-components";
import { Accodion } from "../../../Helpers/Accordion";
import { Modal } from "../../../Helpers/Modal";
import { ToolTip } from "../../../Helpers/Tooltip";
import { CreateNewSpace } from "./Create";
import { ListItem } from "./ListItem";

export const items = [
  {
    id: 1,
    name: "space1",
    list: [
      {
        id: 1,
        name: "List",
      },
    ],
  },
  {
    id: 2,
    name: "adasda",
    list: [
      {
        id: 1,
        name: "List",
      },
    ],
  },
  {
    id: 3,
    name: "Space",
    list: [
      {
        id: 1,
        name: "list",
      },
      {
        id: 2,
        name: "list1",
      },
    ],
  },
];

const SearchContainer = tw.div<any>`
    invisible
    p-3
    flex
    items-center
    absolute 
    inset-0
    bg-white 
    z-10 
    text-gray-700
    transition-[opacity]
    duration-100
    opacity-0
    ${(props) =>
      props.$isOpen ? "visible scale-100 opacity-100" : "invisible scale-0"}
`;

export const Spaces = () => {
  const [activeItem, setIsActiveItem] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <div className="flex">
      <Accodion className="divide-y group-accordeon">
        <>
          <Accodion.Header className="text-gray-400 p-3 hover:bg-gray-100 relative">
            {({ isOpen, setIsOpen }) => (
              <div
                onClick={() => setIsOpen((v) => !v)}
                className={` text-xs ${isOpen && "text-gray-700"}`}
              >
                <div className="flex justify-between pr-2">
                  <span className="text-xs font-semibold">SPACES</span>
                  {isOpen && (
                    <BiSearch
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsSearchOpen(true);
                      }}
                      className="w-4 h-4 hover:text-gray-800"
                    />
                  )}
                </div>
                <SearchContainer
                  onClick={(e: Event) => e.stopPropagation()}
                  $isOpen={isSearchOpen}
                >
                  <BiSearch className="w-4 h-4" />
                  <input
                    type="text"
                    className="grow outline-none px-2 text-xs font-thin border-none"
                    placeholder="Filter List, Docs & Folders"
                  />
                  <TiDelete
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSearchOpen(false);
                    }}
                    className="w-5 h-5 text-blue-500"
                  />
                </SearchContainer>
              </div>
            )}
          </Accodion.Header>
          <Accodion.Body>
            {/* New Space btn */}
            <div className="w-full mb-4">
              <CreateNewSpace />
              {/* Show Evrything Btn */}
              <ToolTip text="Show Everything">
                <div className="w-full flex p-1 px-4 text-md items-center gap-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm">
                  <CgLayoutGridSmall className="text-xl w-5 h-5 relative top-[1.5px] bg-gray-200 rounded-md" />
                  <span className="grow text-gray-800">Everything</span>
                </div>
              </ToolTip>
              {/* List Items */}
              {items.map((item) => {
                return (
                  <ListItem
                    key={item.id}
                    item={item}
                    isActive={item.id === activeItem}
                    setIsActive={(id) => setIsActiveItem(id)}
                  />
                );
              })}
            </div>
          </Accodion.Body>
        </>
      </Accodion>
    </div>
  );
};
