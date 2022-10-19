import { Modal } from "../../Helpers/Modal";
import FIltersSearchButton from "./Filters/Index";
import { SearchHeader } from "./Header";
import { List } from "./List/Index";

const quickFilters = [
  {
    name: "Quick Filters",
    options: [
      {
        name: "Assign to me",
      },
      {
        name: "Created by me",
      },
    ],
  },
  {
    name: "Task Filters",
    options: [
      {
        name: "Active",
      },
      {
        name: "Closed",
      },
      {
        name: "Arhived",
      },
    ],
  },
];

export const Search = ({
  isOpen = false,
  onClose,
}: {
  isOpen?: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="flex min-h-[35rem] w-[60rem] max-h-[35rem] bg-white">
        <div className="w-3/4 flex flex-col gap-2 border-r border-b border-gray-200">
          <SearchHeader />
          <List />
        </div>

        <div className="w-1/4 flex flex-col p-2">
          <div className="mx-3 flex items-center">
            <FIltersSearchButton />
          </div>
          <div className="mx-3 flex flex-col mt-5">
            {quickFilters.map((filter) => {
              return (
                <div key={filter.name}>
                  <span className="uppercase my-3 text-xs text-gray-400">
                    {filter.name}
                  </span>

                  {filter.options.map((option) => {
                    return (
                      <p
                        key={option.name}
                        className="my-1 text-xs text-gray-500 cursor-pointer hover:bg-gray-200 p-2 rounded-md"
                      >
                        {option.name}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
};
