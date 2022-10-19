import { BsCheckSquare, BsFillInfoCircleFill } from "react-icons/bs";
import { Accodion } from "../Helpers/Accordion";
import { ToolTip } from "../Helpers/Tooltip";
import { AiOutlineCheck, AiOutlinePlusCircle } from "react-icons/ai";
import { Popup } from "../Helpers/Popup";
import { Item, Option } from "../SideMenu/Lists/Spaces/Options";
import { IoIosArrowDown } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { ImCompass2 } from "react-icons/im";
import { TbGridDots } from "react-icons/tb";
import { Task } from "./Task";

export enum TaskTypesEnum {
  "TO DO" = 1,
  "IN PROGRESS" = 2,
  "COMPLETE" = 3,
}

export const colors = {
  [TaskTypesEnum["COMPLETE"]]: "bg-green-500",
  [TaskTypesEnum["IN PROGRESS"]]: "bg-violet-500",
  [TaskTypesEnum["TO DO"]]: "bg-gray-300",
};

export const lists = [
  {
    id: 1,
    name: "List1",
    groups: [
      {
        id: 1,
        status: TaskTypesEnum["IN PROGRESS"],
        tasksCount: 3,
        tasks: [
          {
            id: 15123,
            name: "Learn about powerfull task description - click here!",
            status: TaskTypesEnum["IN PROGRESS"],
            subtasks: [
              {
                id: 3211,
                name: "sub",
                status: TaskTypesEnum["IN PROGRESS"],
              },
              {
                id: 2412,
                name: "sub2",
                status: TaskTypesEnum["TO DO"],
              },
              {
                id: 3123,
                name: "sub3",
                status: TaskTypesEnum["TO DO"],
              },
            ],
          },
          {
            id: 2231,
            name: "Task2!",
            status: TaskTypesEnum["IN PROGRESS"],
          },
          {
            id: 32131,
            name: "task!",
            status: TaskTypesEnum["IN PROGRESS"],
          },
        ],
      },
      {
        id: 315412,
        status: TaskTypesEnum["TO DO"],
        tasks: [
          {
            id: 3121,
            name: "task 2",
            status: TaskTypesEnum["TO DO"],
            subtasks: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "list2",
    groups: [
      {
        id: 1,
        status: TaskTypesEnum["TO DO"],
        tasksCount: 2,
        tasks: [
          {
            id: 1,
            name: "tasnk",
            status: TaskTypesEnum["TO DO"],
            subtasks: [],
          },
          {
            id: 2,
            name: "tasnk2",
            status: TaskTypesEnum["TO DO"],
            subtasks: [],
          },
        ],
      },
    ],
  },
];

export type TaskType = typeof lists[0]["groups"][0]["tasks"][0];
export type SubTaskType = TaskType["subtasks"];

const List = ({ children, name }: { children: JSX.Element; name: string }) => {
  return (
    <Accodion isOpen={true}>
      <ul className="w-full min-w-full">
        <Accodion.Header>
          {({ isOpen, setIsOpen }) => (
            <div className="w-full p-1 flex items-center justify-between text-gray-400 text-xs">
              <div className="flex items-center gap-2">
                <ToolTip text="List Settings" direction="top">
                  <div className="flex items-center gap-2 hover:bg-gray-200 group rounded-sm p-1">
                    <IoIosArrowDown
                      onClick={() => setIsOpen((v) => !v)}
                      className={`transition-[transform, background] text-xl p-1 rounded-full ${
                        isOpen
                          ? "duration-200 hover:bg-gray-400 hover:text-white border border-gray-400 text-gray-400"
                          : "-rotate-90 bg-gray-400 text-white"
                      }`}
                    />

                    <Option>
                      <span>{name}</span>
                    </Option>
                  </div>
                </ToolTip>

                <ToolTip text="List info" direction="top">
                  <div className="flex items-center gap-1 text-gray-300">
                    <BsFillInfoCircleFill className="w-3 h-3" />
                    <span>3 Tasks</span>
                  </div>
                </ToolTip>

                <div className=" flex items-center gap-2 group text-gray-300">
                  <span className="hover:bg-gray-200 px-1 rounded-sm p-1 cursor-pointer">
                    + NEW TASK
                  </span>

                  <div className="flex items-center gap-2 invisible group-hover:visible">
                    <span className="hover:bg-gray-200 px-1 rounded-sm p-1 cursor-pointer">
                      ADD DESCRIPTION
                    </span>

                    <span className="hover:bg-gray-200 px-1 rounded-sm p-1 cursor-pointer">
                      ADD COMMENT
                    </span>
                  </div>
                </div>
              </div>

              <ToolTip text="Quickly show closed tasks." direction="top">
                <div className="hover:bg-gray-200 px-1 rounded-sm p-1 cursor-pointer flex items-center gap-2">
                  <AiOutlineCheck />
                  <span>SHOW CLOSE</span>
                </div>
              </ToolTip>
            </div>
          )}
        </Accodion.Header>
        <Accodion.Body>
          <div className="w-full py-5 px-9">{children}</div>
        </Accodion.Body>
      </ul>
    </Accodion>
  );
};

const Group = ({
  tasks,
  status,
}: {
  status: TaskTypesEnum;
  tasks: typeof lists[0]["groups"][0]["tasks"];
}) => {
  return (
    <li className="first:mt-0 mt-10">
      <Accodion.Header>
        {({ isOpen, setIsOpen }) => (
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 grow">
              <IoIosArrowDown
                onClick={() => setIsOpen((v) => !v)}
                className={`transition-[transform, background] text-xl p-1 rounded-full ${
                  isOpen
                    ? "duration-200 hover:bg-violet-400 hover:text-white border border-violet-400 text-violet-400"
                    : "-rotate-90 bg-violet-400 text-white"
                }`}
              />

              <div
                className={`flex items-center gap-1 group text-xs rounded-t p-1 ${
                  colors[status]
                } ${
                  TaskTypesEnum[status] == "TO DO"
                    ? "text-black-300"
                    : "text-white"
                }`}
              >
                <span>{TaskTypesEnum[status]}</span>

                <div className="flex items-center gap-2 group-hover:w-auto w-0 overflow-hidden group-hover:pl-1 cursor-pointer transition-[padding] duration-150">
                  <ToolTip text="rename" direction="top">
                    <div>
                      <MdModeEditOutline />
                    </div>
                  </ToolTip>

                  <ToolTip text="Select all" direction="top">
                    <div>
                      <BsCheckSquare />
                    </div>
                  </ToolTip>

                  <ToolTip text="group Options" direction="top">
                    <div>
                      <BiDotsHorizontalRounded />
                    </div>
                  </ToolTip>
                </div>
              </div>

              <div className="text-xs text-gray-400 hover:bg-gray-300 p-1 rounded-md flex items-center gap-1 cursor-pointer transition-[background]">
                <Popup>
                  <>
                    <Popup.Body>
                      <div>
                        <Item>
                          <span>Sort by Task Name</span>
                        </Item>
                      </div>
                    </Popup.Body>
                    <Popup.Content>
                      <div>
                        <ToolTip text="Sort by task name." direction="top">
                          <span>2 Tasks</span>
                        </ToolTip>
                      </div>
                    </Popup.Content>
                  </>
                </Popup>

                <ToolTip text="Sort." direction="top">
                  <div>
                    <ImCompass2 />
                  </div>
                </ToolTip>
              </div>
            </div>

            <div className="flex items-center text-xs text-gray-400 gap-3 sm:flex-[4] md:flex-initial w-[25rem] lg:w-[30rem] justify-between mr-1">
              <div className=" flex items-center justify-center gap-1 hover:bg-gray-200 text-[0.60rem] p-1 rounded-sm border-x-4 border-transparent hover:border-gray-300 group transition-[background] flex-1">
                <TbGridDots className="cursor-move invisible group-hover:visible" />

                <span>ASSIGNEE</span>

                <ToolTip text="sort" direction="top">
                  <div className="cursor-poiter invisible group-hover:visible">
                    <ImCompass2 />
                  </div>
                </ToolTip>
              </div>

              <div className=" flex justify-center items-center gap-1 hover:bg-gray-200 text-[0.60rem] p-1 rounded-sm border-transparent border-x-4 hover:border-gray-300 group transition-[background] flex-1">
                <TbGridDots className="cursor-move invisible group-hover:visible" />

                <span>DUE DATE</span>

                <ToolTip text="sort" direction="top">
                  <div className="cursor-poiter invisible group-hover:visible">
                    <ImCompass2 />
                  </div>
                </ToolTip>
              </div>

              <div className=" flex justify-center items-center gap-1 hover:bg-gray-200 text-[0.60rem] p-1 rounded-sm border-transparent border-x-4 hover:border-gray-300 group transition-[background] flex-1">
                <TbGridDots className="cursor-move invisible group-hover:visible" />

                <span>PRIORITY</span>

                <ToolTip text="sort" direction="top">
                  <div className="cursor-poiter invisible group-hover:visible">
                    <ImCompass2 />
                  </div>
                </ToolTip>
              </div>

              <Popup>
                <>
                  <Popup.Content>
                    <div className="flex-1 flex justify-end">
                      <ToolTip text="add column" direction="top">
                        <span className="text-sm pr-5">
                          <AiOutlinePlusCircle />
                        </span>
                      </ToolTip>
                    </div>
                  </Popup.Content>
                  <Popup.Body>
                    <>bb</>
                  </Popup.Body>
                </>
              </Popup>
            </div>
          </div>
        )}
      </Accodion.Header>

      <Accodion.Body>
        <div className="ml-6">
          {tasks?.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </div>
      </Accodion.Body>
    </li>
  );
};

export const Tasks = () => {
  return (
    <div className="w-full h-screen p-9 bg-[#eeeeee]">
      <div className="border border-gray-200">
        {lists.map((list, id) => {
          return (
            <List key={id} name={list.name}>
              <>
                {list.groups.map((group, id) => (
                  <Group key={id} tasks={group.tasks} status={group.status} />
                ))}
              </>
            </List>
          );
        })}
      </div>
    </div>
  );
};
