import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import tw from "tailwind-styled-components";
import { Popup } from "../../../Helpers/Popup";
import { ListItem } from "./Item";

const DeleteBtn = tw.div<{ $show: boolean }>`
    text-lg
    text-gray-500
    cursor-pointer
    font-medium
    w-5
    h-5
    invisible
    center
    ${(props) => props.$show && "visible"}
`;

const SearchIconCotainer = tw.i<{ $isFocused: boolean }>`
    w-5
    text-gray-400
    font-xs   
    h-5 
    center
    ${(props) => props.$isFocused && "text-violet-500"}
`;

const items = [
  {
    name: "list1",
    list: [
      {
        name: "sub1232",
      },
      {
        name: "sub2",
      },
    ],
  },
  {
    name: "list12",
    list: [
      {
        name: "sub1123",
      },
      {
        name: "sub123",
      },
    ],
  },
];

export const FIltersSearchButton = () => {
  const [inputText, setInputText] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="w-full pt-3 pr-3">
      <Popup>
        <>
          <Popup.Content className="cursor-pointer">
            <button className="border border-gray-300 rounded-md bg-white p-1 px-5 text-gray-600 hover:bg-gray-200 w-full">
              Location Filter
            </button>
          </Popup.Content>

          <Popup.Body className="w-72 translate-y-14">
            <>
              <div className="flex items-center border-b border-gray-200 p-1 pb-2">
                {/* @ts-ignore */}
                <SearchIconCotainer $isFocused={isFocused}>
                  <FaSearch />
                </SearchIconCotainer>
                <input
                  className="outline-none text-xs w-full px-2 h-5"
                  type="text"
                  placeholder="Search Places, Folders, Lists"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <DeleteBtn
                  onClick={() => setInputText("")}
                  $show={inputText.length >= 1}
                >
                  <TiDelete />
                </DeleteBtn>
              </div>
              <ul className="p-1 text-sm">
                {items.map(({ name, list }) => {
                  return <ListItem key={name} list={list} name={name} />;
                })}
              </ul>
            </>
          </Popup.Body>
        </>
      </Popup>
    </div>
  );
};
