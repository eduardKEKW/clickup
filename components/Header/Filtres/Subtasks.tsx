import { AiOutlineQuestionCircle, AiOutlineTags } from "react-icons/ai";
import { TbStack } from "react-icons/tb";
import { Popup } from "../../Helpers/Popup";
import { Item } from "../../SideMenu/Lists/Spaces/Options";
import { ToggleBtn } from "../../Helpers/Toggle";
import { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { ToolTip } from "../../Helpers/Tooltip";

const items = [
  {
    id: 1,
    name: "Collapse All",
    descriptiom: "(default)",
  },
  {
    id: 2,
    name: "Expend All",
    tooltip: "Show all subtasks nested under there parent task.",
  },
  {
    id: 3,
    name: "As Separated Tasks",
    descriptiom: "Use this to filter subtasks",
    tooltip: "Show subtasks separatly from their parent task.",
  },
];

export const Subtasks = ({}: {}) => {
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
              SHOW SUBTASKS <AiOutlineQuestionCircle />
            </span>

            {items.map((item) => {
              const ItemBody = () => (
                <>
                  <Item
                    onClick={() => setSelectedGroupById(item.id)}
                    key={item.id}
                  >
                    <span className="grow">
                      {item.name}{" "}
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
                </>
              );

              return item.tooltip ? (
                <ToolTip text={item.tooltip} direction="left">
                  <div>
                    <ItemBody />
                  </div>
                </ToolTip>
              ) : (
                <ItemBody />
              );
            })}
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
              {items.find((i) => i.id == selectedGroupById)?.name || "Subtasks"}
            </span>
          </div>
        </Popup.Content>
      </>
    </Popup>
  );
};
