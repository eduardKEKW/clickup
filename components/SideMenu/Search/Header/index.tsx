import { useState } from "react";
import tw from "tailwind-styled-components";
import { SearchOptions } from "./Options";

const FilterList = tw.li<{ $selected?: boolean }>`
    cursor-pointer
    p-1
    px-2
    rounded-sm
    hover:bg-purple-100
    ${(props) => props.$selected && "bg-purple-100"}
`;

export const SearchHeader = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div className="w-full pl-3 pt-2">
      <input
        className="w-full h-11 text-xl outline-none font-thin mb-4 placeholder:text-gray-300"
        value={searchInput}
        type="text"
        placeholder="Search or run a command..."
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <ul className="flex gap-1 text-gray-600 text-xs mb-2">
        <FilterList $selected={true}>All</FilterList>

        <FilterList>Tasks</FilterList>

        <FilterList>Docs</FilterList>

        <FilterList>Whiteboards</FilterList>

        <FilterList>Dashboards</FilterList>

        <FilterList>Chats</FilterList>

        <FilterList>Files</FilterList>

        <FilterList>People</FilterList>
      </ul>
    </div>
  );
};
