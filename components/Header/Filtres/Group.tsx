import { AiOutlineQuestionCircle, AiOutlineTags } from "react-icons/ai";
import { TbStack } from "react-icons/tb";
import { Popup } from "../../Helpers/Popup";
import { Item } from "../../SideMenu/Lists/Spaces/Options";
import { GrStatusDisabled } from "react-icons/gr";
import { BsCalendarDate, BsCheck, BsCheckLg } from "react-icons/bs";
import { BiMoveVertical } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { ToggleBtn } from "../../Helpers/Toggle";
import { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    name: "Status",
    descriptiom: "(default)",
    Icon: () => <GrStatusDisabled />,
  },
  {
    id: 2,
    name: "Assignee",
    Icon: () => <FiUsers />,
  },
  {
    id: 3,
    name: "Priority",
    Icon: () => <BiMoveVertical />,
  },
  {
    id: 4,
    name: "Tags",
    Icon: () => <AiOutlineTags />,
  },
  {
    id: 5,
    name: "Due Date",
    Icon: () => <BsCalendarDate />,
  },
];

export const Group = ({}: {}) => {
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [selectedGroupById, setSelectedGroupById] = useState<number | null>(
    null
  );

  useEffect(() => {
    setPopupOpen(false);
  }, [selectedGroupById]);

  return (
    <Popup handleAction={(v) => setPopupOpen(v)} show={popupOpen}>
      <>
        <Popup.Body className="-translate-x-12">
          <div className="flex flex-col gap-2 w-44 text-sm text-gray-600">
            <span className="text-xs flex items-center gap-2">
              GROUP BY <AiOutlineQuestionCircle />
            </span>

            {items.map((item) => {
              return (
                <Item
                  onClick={() => setSelectedGroupById(item.id)}
                  key={item.id}
                >
                  <span className="w-5 h-5 center">
                    <item.Icon />
                  </span>
                  <span className="grow">
                    <span>{item.name}</span>
                    {item?.descriptiom && (
                      <span className="text-xs text-gray-400 whitespace-pre">
                        {item.descriptiom}
                      </span>
                    )}
                  </span>
                  {selectedGroupById == item.id && (
                    <BsCheckLg className="font-bold text-blue-600" />
                  )}
                </Item>
              );
            })}

            <Item
              key={items.length + 1}
              className="border-t border-gray-200 mt-1"
            >
              <span className="grow">Also Group By List</span>

              <span className="text-[0.4rem]">
                <ToggleBtn />
              </span>
            </Item>
          </div>
        </Popup.Body>

        <Popup.Content>
          <div
            className={`flex items-center gap-1 hover:text-violet-600 p-1 rounded-md cursor-pointer px-2 ${
              !!selectedGroupById && "text-violet-500  bg-violet-200"
            }`}
          >
            <TbStack className="w-4 h-4" />

            <span>
              Group by:{" "}
              {items.find((i) => i.id == selectedGroupById)?.name || "Status"}
            </span>
          </div>
        </Popup.Content>
      </>
    </Popup>
  );
};
