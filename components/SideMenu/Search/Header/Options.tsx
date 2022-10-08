import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { HiChevronDoubleDown } from "react-icons/hi";
import { Popup } from "../../../Helpers/Popup";

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

export const SearchOptions = () => {
  const [selecredFilter, setSelectedFilter] = useState<number | null>(1);

  return (
    <div className="w-full flex items-center justify-between pr-2 border-t border-gray-200 border-b py-2">
      <span className="text-xs">RESULTS</span>

      <Popup>
        <>
          <Popup.Content className="cursor-pointer">
            <button className="flex items-center gap-2 text-gray-600 focus:bg-gray-200 p-1 rounded-md">
              <HiChevronDoubleDown className="text-xs" />
              <span className="text-xs ">Relevant</span>
            </button>
          </Popup.Content>

          <Popup.Body className="w-48">
            <div className="flex flex-col w-48">
              {filters.map((filter) => {
                return (
                  <div
                    onClick={() => setSelectedFilter(filter.id)}
                    className="cursor-pointer p-1 px-2 hover:bg-gray-100 rounded-md flex justify-between items-center text-sm"
                  >
                    <span>{filter.name}</span>
                    <BsCheckLg
                      className={`${
                        filter.id === selecredFilter
                          ? "text-violet-500 visible"
                          : "hidden"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </Popup.Body>
        </>
      </Popup>
    </div>
  );
};
