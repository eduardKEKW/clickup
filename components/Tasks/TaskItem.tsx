import { Popup } from "../Helpers/Popup";
import { ToolTip } from "../Helpers/Tooltip";
import { FiPlus, FiSettings } from "react-icons/fi";
import { Item, Option } from "../SideMenu/Lists/Spaces/Options";
import {
  AiOutlineCalendar,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineFolderOpen,
  AiOutlineLink,
  AiOutlineSearch,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai";
import { AiOutlineTag } from "react-icons/ai";
import {
  BsDroplet,
  BsFillFlagFill,
  BsFlag,
  BsListNested,
  BsPencil,
  BsWindowDock,
} from "react-icons/bs";
import { BiDotsHorizontalRounded, BiHide } from "react-icons/bi";
import { HiOutlineClipboard, HiOutlineDocumentDuplicate } from "react-icons/hi";
import { IoIosColorWand, IoIosArrowForward } from "react-icons/io";
import { MdFormatAlignCenter } from "react-icons/md";
import { colors, TaskTypesEnum } from ".";
import tw from "tailwind-styled-components";

const IndicatorBar = tw.div<any>`
  h-1/2
  border-b
  border-b-gray-300
  rounded-bl-md
  ${(props) => props.$isLast && "border-l border-l-gray-300"}
`;

const Indicator = tw.div<any>`
  flex
  flex-col
  w-10  
  mx-2
  h-full
  -mr-2
  text-white
  pointer-events-none
  ${(props) => !props.$isLast && "border-l border-l-gray-300"}
`;

export const TaskItem = ({
  parent,
  isLast = false,
  task,
}: {
  parent?: string;
  isLast?: boolean;
  task: { id: number; name: string; status: TaskTypesEnum };
}) => {
  return (
    <div className="flex items-center text-xs h-fit lg:h-12 min-h-fit w-full gap-3 pr-2 flex-[1] group hover:bg-gray-100 cursor-pointer">
      {parent && (
        <Indicator $isLast={isLast}>
          <IndicatorBar $isLast={isLast}>.</IndicatorBar>
          <div className="h-1/2">.</div>
        </Indicator>
      )}

      <div className="flex items-center gap-2 flex-[4]">
        <Popup>
          <div className="">
            <Popup.Content>
              <div className="p-[0.10rem] hover:border border-violet-400 transition-all rounded-sm">
                <ToolTip text="TO DO" direction="top">
                  <div>
                    <span
                      className={`bg-gray-400 w-2 h-2 block rounded-sm shadow-sm cursor-pointer ${
                        colors[task.status]
                      }`}
                    ></span>
                  </div>
                </ToolTip>
              </div>
            </Popup.Content>

            <Popup.Body>
              <div className="flex items-center gap-2 flex-col text-xs">
                <div className="flex items-center gap-2 border-b border-gray-200 p-1">
                  <input
                    type="text"
                    placeholder="Search Statuses..."
                    className="outline-none"
                  />

                  <FiSettings className="w-3 h-3 text-gray-400 cursor-pointer" />
                </div>

                <div className="flex items-center flex-col gap-1 w-full">
                  <Item className="hover:bg-violet-400 hover:text-white">
                    <span className="bg-gray-400 w-2 h-2 block rounded-sm shadow-sm cursor-pointer"></span>
                    <span className="text-xs">TO DO</span>
                  </Item>

                  <Item className="hover:bg-violet-400 hover:text-white">
                    <span className="bg-violet-400 w-2 h-2 block rounded-sm shadow-sm cursor-pointer"></span>
                    <span className="text-xs">IN ORIGRESS</span>
                  </Item>

                  <span className="h-1 w-full border-t border-gray-200"></span>

                  <Item className="text-gray-400 hover:bg-violet-400 hover:text-white">
                    <span className="bg-green-400 w-2 h-2 block rounded-sm shadow-sm cursor-pointer"></span>
                    <span className="text-xs">COMPLETE</span>
                  </Item>
                </div>
              </div>
            </Popup.Body>
          </div>
        </Popup>

        <div className="flex-[4] flex items-start flex-col gap-0">
          {parent && (
            <span className="cursor-pointer hover:text-violet-400 text-gray-400 text-[0.60rem] leading-none">
              Learn about powerfull tasks description - click here!
            </span>
          )}

          <div className="grow flex items-center gap-1 group cursor-pointer w-full">
            <span className="hover:text-violet-500 h-fit">{task.name}</span>

            <div className="flex items-center gap-1 invisible group-hover:visible">
              <ToolTip text="Edit Tags" direction="top">
                <span className="border border-gray-200 text-gray-400 cursor-pointer p-[0.1rem]">
                  <AiOutlineEdit />
                </span>
              </ToolTip>

              <ToolTip text="Rename" direction="top">
                <span className="border border-gray-200 text-gray-400 cursor-pointer p-[0.1rem]">
                  <AiOutlineTag />
                </span>
              </ToolTip>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:flex-[4] md:flex-[6] md:w-auto lg:w-[30rem] lg:flex-initial text-gray-400 gap-3">
        <div className="flex-1 flex justify-center items-center">
          <Popup>
            <>
              <Popup.Content>
                <div>
                  <div
                    className="p-1 center w-6 h-6 cursor-pointer rounded-full border border-dotted relative border-gray-500
                              after:content-['+'] after:absolute after:left-[calc(100%-0.5rem)] after:top-[calc(100%-0.5rem)]
                            after:bg-gray-400 after:text-white after:rounded-full  after:text-xs after:w-3 after:h-3 after:leading-[0.6rem] after:text-center"
                  >
                    <AiOutlineUser />
                  </div>
                </div>
              </Popup.Content>
              <Popup.Body>
                <div className="flex gap-2 flex-col">
                  <div className="flex items-center gap-1 border-b border-gray-200">
                    <AiOutlineSearch className="text-lg text-gray-400" />

                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full outline-none"
                    />
                  </div>

                  <div className="flex items-center w-full group gap-2 cursor-pointer hover:bg-gray-200 p-1 rounded-md text-xs text-gray-500">
                    <span className="cursor-pointer w-7 h-7 text-xs rounded-full bg-blue-400 text-white text-center leading-7">
                      E
                    </span>

                    <span className="grow">Me</span>

                    <button className="bg-white text-xs text-gray-400 border border-gray-200 rounded-md invisible group-hover:visible p-1 mx-1">
                      Profile
                    </button>
                  </div>
                </div>
              </Popup.Body>
            </>
          </Popup>
        </div>

        <div className="flex justify-center flex-1">
          <ToolTip text="Due Date" direction="top">
            <ToolTip text="Assignee" direction="top">
              <div className="cursor-pointer hover:text-blue-400">
                <AiOutlineCalendar className="w-5 h-5" />
              </div>
            </ToolTip>
          </ToolTip>
        </div>

        <Popup>
          <>
            <Popup.Content>
              <div className="flex-1 flex justify-center">
                <ToolTip text="Priority" direction="top">
                  <div className="cursor-pointer">
                    <BsFlag className="w-5 h-5" />
                  </div>
                </ToolTip>
              </div>
            </Popup.Content>
            <Popup.Body className="w-44 p-0">
              <div className="flex items-center flex-col text-gray-500">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 border-b border-gray-200 text-m w-full p-2 px-4">
                  <BsFillFlagFill className="w-4 h-4 text-red-500 text-xs" />
                  <span className="grow">Urgent</span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 border-b border-gray-200 text-m w-full p-2 px-4">
                  <BsFillFlagFill className="w-4 h-4 text-yellow-500 text-xs" />
                  <span className="grow">Hight</span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 border-b border-gray-200 text-m w-full p-2 px-4">
                  <BsFillFlagFill className="w-4 h-4 text-blue-500 text-xs" />
                  <span className="grow">Normal</span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 border-b border-gray-200 text-m w-full p-2 px-4">
                  <BsFillFlagFill className="w-4 h-4 text-gray-500 text-xs" />
                  <span className="grow">Low</span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 border-b border-gray-200 text-m w-full p-2 px-4">
                  <span className="text-red-500 w-4 h-4 text-xs">X</span>
                  <span className="grow">Clear</span>
                </div>
              </div>
            </Popup.Body>
          </>
        </Popup>

        <div className="flex-1 flex justify-end invisible group-hover:visible">
          <div className="cursor-pointer pr-3">
            <Popup>
              <>
                <Popup.Body
                  ignorePopup={true}
                  className="w-60 -translate-x-full"
                >
                  <div className="text-sm flex flex-col gap-1">
                    <Popup>
                      <>
                        <Popup.Body className="w-60 -translate-x-full">
                          <div className="text-sm flex flex-col gap-1">
                            <Item>
                              <BsListNested />
                              <span>List</span>
                            </Item>
                            <span className="my-2 h-0 border-t border-t-gray-200" />
                            <Item>
                              <BsWindowDock />
                              <span>Doc</span>
                            </Item>
                            <Item>
                              <MdFormatAlignCenter />
                              <span>Form</span>
                            </Item>
                            <Item>
                              <HiOutlineClipboard />
                              <span>Whiteboard</span>
                            </Item>
                            <span className="my-2 h-0 border-t border-t-gray-200" />
                            <Item>
                              <AiOutlineFolderOpen />
                              <span>Folder</span>
                            </Item>
                            <span className="my-2 h-0 border-t border-t-gray-200" />
                            <Item>
                              <IoIosColorWand />
                              <span>From template</span>
                            </Item>
                          </div>
                        </Popup.Body>
                        <Popup.Content>
                          <Item>
                            <FiPlus />
                            <span className="grow">Create New</span>
                            <IoIosArrowForward />
                          </Item>
                        </Popup.Content>
                      </>
                    </Popup>
                    <Item>
                      <BsPencil />
                      <span>Rename</span>
                    </Item>
                    <Item>
                      <BsDroplet />
                      <span>Color & Avatar</span>
                    </Item>
                    <Item>
                      <AiOutlineLink />
                      <span>Copy Link</span>
                    </Item>
                    <Item>
                      <HiOutlineDocumentDuplicate />
                      <span>Duplicate</span>
                    </Item>
                    <Item>
                      <AiOutlineStar />
                      <span>Add to Favorite</span>
                    </Item>
                    <span className="my-2 h-0 border-t border-t-gray-200" />
                    <Item>
                      <BiHide />
                      <span>Hide in my sidebar</span>
                    </Item>
                    <Popup>
                      <>
                        <Popup.Body className="w-60 -translate-x-full">
                          <div className="flex flex-col gap-2">
                            <Item>
                              <BiHide />
                              <span>Browse Templates</span>
                            </Item>

                            <Item>
                              <HiOutlineDocumentDuplicate />
                              <span>Save as tempplates</span>
                            </Item>
                            <Item>
                              <BsPencil />
                              <span>Update existing template</span>
                            </Item>
                          </div>
                        </Popup.Body>
                        <Popup.Content>
                          <Item>
                            <IoIosColorWand />
                            <span className="grow">Templates</span>
                            <IoIosArrowForward />
                          </Item>
                        </Popup.Content>
                      </>
                    </Popup>
                    <Item>
                      <FiSettings />
                      <span>More Settings</span>
                    </Item>
                    <span className="my-2 h-0 border-t border-t-gray-200" />
                    <Item>
                      <AiOutlineDelete className="fill-red-500" />
                      <span className="text-red-500">Delete</span>
                    </Item>
                  </div>
                </Popup.Body>
                <Popup.Content>
                  <BiDotsHorizontalRounded className="w-5 h-5 text-xs" />
                </Popup.Content>
              </>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};
