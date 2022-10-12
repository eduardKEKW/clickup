import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Search } from "./Search/Index";

export const MenuSearch = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className="flex items-center bg-gray-100 rounded-sm p-2 px-3 text-xs gap-2 cursor-pointer text-gray-500 hover:text-violet-500 m-2 mt-3"
      onClick={() => setIsOpen(true)}
    >
      <FaSearch />
      <div className="grow">Search</div>
      <div>Ctrl + K</div>
      <span>Search</span>
      <Search isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
