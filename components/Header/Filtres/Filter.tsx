import Link from "next/link";
import { useState, useEffect } from "react";
import {
  AiOutlineSearch,
  AiOutlinePlus,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import { IoIosColorWand } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import tw from "tailwind-styled-components";
import { Popup } from "../../Helpers/Popup";
import { ToolTip } from "../../Helpers/Tooltip";

const FILTERS_TYPE = [
  {
    name: "Status",
    id: 1,

    value: "dada",
  },
  {
    name: "Tags",
    id: 2,
    value: "dada",
  },
];

const FILTER_OPERATOR = [
  {
    id: 1,
    name: "Is",
  },
  {
    id: 2,
    name: "Is not",
  },
  {
    id: 3,
    name: "Is set",
  },
  {
    id: 4,
    name: "Is not set",
  },
];

const SELECT_OPTIONS: [] = [];

const Select = <Filter extends { id: number; [key: string]: any }>({
  filters,
  defaultId,
  defaultValue = "Select Filter",
  onChange = (v: any) => null,
}: {
  filters: Filter[];
  defaultId?: number;
  defaultValue?: string;
  onChange?: (v: any) => void;
}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<Filter | undefined>(
    () => {
      return filters.find((filter) => filter.id == defaultId);
    }
  );

  useEffect(() => {
    setIsOptionsOpen(false);
    onChange(selectedFilter);
  }, [selectedFilter]);

  return (
    <Popup handleAction={(v) => setIsOptionsOpen(v)} show={isOptionsOpen}>
      <>
        <Popup.Body className="p-0 translate-y-8 w-52">
          <div className="flex flex-col gap-2">
            <div className="flex items-center p-2 px-3 border-b border-b-gray-200 text-gray-400 text-sm min-w-[5rem]">
              <AiOutlineSearch className="w-5 h-5" />
              <input
                type="text"
                className="w-full outline-none p-2"
                placeholder="Search..."
              />
            </div>
            <div className="flex flex-col mb-2 scrollbar-thin overflow-y-scroll">
              {filters.map((filter) => {
                return (
                  <span
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter)}
                    className="m-1 p-1 cursor-pointer hover:bg-gray-200 px-2 rounded-md text-gray-700 text-sm"
                  >
                    {filter.name}
                  </span>
                );
              })}
            </div>
          </div>
        </Popup.Body>
        <Popup.Content>
          <div className="">
            <ToolTip text="Filter Tasks" direction="top">
              <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg">
                <span className="cursor-pointer grow whitespace-nowrap">
                  {selectedFilter?.name || defaultValue}
                </span>
                <MdOutlineKeyboardArrowDown />
              </div>
            </ToolTip>
          </div>
        </Popup.Content>
      </>
    </Popup>
  );
};

const FilterContainerDiv = tw.div<any>`
flex
items-center
flex-row
gap-2
w-0
overflow-hidden
transition-[width]
duration-300
${(props) => (props.$isVisible ? "w-full" : "")} 
`;

const Filter = ({
  onDelete,
  filter,
}: {
  onDelete: (filterId: number) => void;
  filter: any;
}) => {
  const [isTypeSelected, setIsTypeSelected] = useState<boolean>(false);

  return (
    <div className="w-full flex items-center gap-3">
      <span>Where</span>

      <Select
        onChange={(selectedFilter) => setIsTypeSelected(!!selectedFilter)}
        filters={FILTERS_TYPE}
      />

      <FilterContainerDiv $isVisible={isTypeSelected}>
        <div className="flex-1">
          {isTypeSelected && <Select filters={FILTER_OPERATOR} defaultId={1} />}
        </div>
        <div className="grow">
          {isTypeSelected && (
            <Select filters={SELECT_OPTIONS} defaultValue="Select Option" />
          )}
        </div>
      </FilterContainerDiv>

      <span
        onClick={() => onDelete(filter.id)}
        className="text-md text-end w-5 h-full grow"
      >
        <span className="hover:bg-gray-200 rounded-md p-1 font-semibold text-gray-400 cursor-pointer">
          X
        </span>
      </span>
    </div>
  );
};

const FilterContainer = () => {
  const [filters, setFilters] = useState<{ id: number }[]>([{ id: 1 }]);

  return (
    <div className="flex items-center gap-3 flex-col">
      {filters.map((filter) => {
        return (
          <Filter
            filter={filter}
            key={filter.id}
            onDelete={(filterId) =>
              setFilters((filters) => filters.filter((f) => f.id !== filterId))
            }
          />
        );
      })}

      <div className="flex items-start gap-2 w-full group">
        <div
          onClick={() =>
            setFilters((filters) => [...filters, { id: filters.length + 1 }])
          }
          className="flex items-center gap-2 text-xs text-gray-500 hover:bg-gray-200 rounded-md cursor-pointer p-1"
        >
          <AiOutlinePlus />
          <div>Add Filter</div>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 hover:bg-gray-200 rounded-md cursor-pointer p-1 invisible group-hover:visible">
          <AiOutlinePlus />
          <div>Add Group</div>
        </div>
      </div>

      <div className="flex items-center justify-between py-3 w-full">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <AiOutlineQuestionCircle className="w-5 h-5" />
          <div>
            Learn more about ClickUp{" "}
            <Link href="#">
              <span className="cursor-pointer text-blue-700 underline">
                filters
              </span>
            </Link>
          </div>
        </div>

        <div className="p-1 border border-gray-400 hover:bg-gray-200 flex items-center cursor-pointer rounded-md gap-2 text-xs">
          <IoIosColorWand />
          <span>Templates</span>
        </div>
      </div>
    </div>
  );
};

export const FilterBtn = () => {
  return (
    <Popup>
      <>
        <Popup.Body
          ignorePopup={true}
          className="w-[45rem] -translate-x-[calc(100%-5rem)] left-full p-6"
        >
          <div className="flex flex-col gap-3 text-sm text-gray-700">
            <span className="w-full text-lg text-gray-800 font-semibold">
              filters
            </span>
            <FilterContainer />
          </div>
        </Popup.Body>
        <Popup.Content>
          <div>
            <ToolTip text="Filter Tasks" direction="top">
              <div className="flex items-center gap-1 hover:bg-gray-200 rounded-md cursor-pointer p-1">
                <BiFilter />
                <span>Filters</span>
              </div>
            </ToolTip>
          </div>
        </Popup.Content>
      </>
    </Popup>
  );
};
