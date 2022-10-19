import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { ToolTip } from "../Helpers/Tooltip";
import { ArrowRigthSvg } from "../svg";
import { Option } from "../SideMenu/Lists/Spaces/Options";
import { AiOutlineMenuUnfold, AiOutlinePlus } from "react-icons/ai";
import { TbLayoutDashboard } from "react-icons/tb";

export const Navigation = ({ showMenu, setShowMenu }: any) => {
  return (
    <>
      {/* Side Menu */}
      <div className="flex gap-2 text-xs items-stretch h-full text-gray-500 grow">
        {showMenu !== "full" && (
          <div
            onClick={() => setShowMenu("full")}
            onMouseOver={() => setShowMenu("minified")}
            onMouseLeave={() => setShowMenu("hide")}
            className="group relative mx-2 flex items-center"
          >
            <HiMenuAlt1 className="w-5 h-5 text-lg group-hover:hidden text-gray-800" />

            <div className="hidden hover:bg-gray-200 cursor-pointer p-1 rounded-md group-hover:block">
              <div className="flex items-center">
                <ArrowRigthSvg className="w-4 h-4 fill-violet-500 stroke-violet-500 -mr-[0.70rem]" />
                <ArrowRigthSvg className="w-4 h-4 fill-violet-500 stroke-violet-500" />
              </div>
            </div>
          </div>
        )}

        {/* Space */}
        <div className="flex items-center gap-2 group">
          <Option>
            <div>
              <ToolTip text="Space Settings" direction="bottom">
                <span className="w-9 h-9 bg-gray-600 text-white center text-lg rounded-lg font-semibold cursor-pointer">
                  <span>S</span>
                </span>
              </ToolTip>
            </div>
          </Option>

          <span className="font-semibold text-gray-800 text-lg">Space</span>

          <Option>
            <div>
              <BiDotsHorizontalRounded className="invisible group-hover:visible cursor-pointer" />
            </div>
          </Option>
        </div>

        {/* List */}
        <div className="border-l border-l-gray-200 px-2">
          <div className="flex items-center gap-2 h-full group border-transparent border-8 border-b-2 border-b-violet-700 cursor-pointer text-violet-700">
            <div className="flex gap-2 items-center">
              <AiOutlineMenuUnfold className="text-lg" />
              <span>List View</span>
            </div>

            <Option>
              <div>
                <BiDotsHorizontalRounded className="hidden group-hover:block text-gray-500 cursor-pointer" />
              </div>
            </Option>
          </div>
        </div>

        {/* Board */}
        <div className="border-l border-l-gray-200 px-2 group">
          <div className="flex items-center gap-2 h-full cursor-pointer border-transparent border-8 border-b-2 group-hover:border-b-gray-500">
            <div className="flex gap-2 items-center">
              <TbLayoutDashboard className="text-lg" />
              <span>Board</span>
            </div>
          </div>
        </div>

        {/* View */}
        <div className="border-l border-l-gray-200 px-2 group">
          <div className="flex items-center gap-2 h-full cursor-pointer border-transparent border-8 border-b-2">
            <div className="flex gap-2 items-center group-hover:bg-gray-200 p-1">
              <AiOutlinePlus className="text-sm" />
              <span>View</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
