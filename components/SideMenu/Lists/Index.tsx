import { AiOutlineStar } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsPin } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import tw from "tailwind-styled-components";
import { Accodion } from "../../Helpers/Accordion";
import { Popup } from "../../Helpers/Popup";
import { ToolTip } from "../../Helpers/Tooltip";
import { Spaces } from "./Spaces/Index";
import { ListItemBody } from "./Spaces/ListItem";

const FavoriteItemContaienr = tw(ListItemBody)<any>`
  px-3
  justify-between
`;

const DocsItem = tw(ListItemBody)<any>`
  px-3
  justify-between
`;

const FavoriteItem = ({ name }: { name: string }) => {
  return (
    <FavoriteItemContaienr>
      {name}
      <Popup>
        <>
          <Popup.Content>
            <BiDotsHorizontalRounded className="invisible group-hover:visible" />
          </Popup.Content>
          <Popup.Body>
            <div className="flex flex-col w-32">
              <span className="text-xs mb-2">FAVORITE OPTIONS</span>
              <div className="flex items-center gap-2 text-gray-700 hover:bg-gray-200 cursor-pointer rounded-md p-1 text-sm">
                <HiOutlinePencil /> Rename
              </div>
              <div className="flex items-center gap-2 text-gray-700 hover:bg-gray-200 cursor-pointer rounded-md p-1 text-sm">
                <AiOutlineStar /> Unfavorite
              </div>
            </div>
          </Popup.Body>
        </>
      </Popup>
    </FavoriteItemContaienr>
  );
};

export const Lists = () => {
  return (
    <div className="">
      <Accodion className="divide-y group-accordeon group">
        <>
          <Accodion.Header className="text-gray-400 p-3 hover:bg-gray-100 relative">
            {({ isOpen, setIsOpen }) => (
              <div
                onClick={() => setIsOpen((v) => !v)}
                className={`flex justify-between items-center pr-2 text-xs ${
                  isOpen && "text-gray-700"
                }`}
              >
                <div className="flex justify-between pr-2">
                  <span className="text-xs font-semibold">FAVORITE</span>
                </div>
                <div className="flex items-center gap-2">
                  <ToolTip text="Pin Favorites to the Top">
                    <div>
                      <BsPin className={`w-3 h-3 ${isOpen && "visible"}`} />
                    </div>
                  </ToolTip>

                  <IoIosArrowForward
                    className={`transition-[transform] duration-200 ${
                      isOpen ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
            )}
          </Accodion.Header>
          <Accodion.Body>
            <div className="w-full mb-4">
              <FavoriteItem name="list" />
              <FavoriteItem name="list2" />
            </div>
          </Accodion.Body>
        </>
      </Accodion>

      <Spaces />

      <Accodion className="divide-y group-accordeon group">
        <>
          <Accodion.Header className="text-gray-400 p-3 hover:bg-gray-100 relative">
            {({ isOpen, setIsOpen }) => (
              <div
                onClick={() => setIsOpen((v) => !v)}
                className={`flex justify-between items-center pr-2 text-xs ${
                  isOpen && "text-gray-700"
                }`}
              >
                <div className="flex justify-between pr-2 w-full">
                  <span className="text-xs font-semibold">DASHBOARD</span>

                  <IoIosArrowForward
                    className={`transition-[transform] duration-200 ${
                      isOpen ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
            )}
          </Accodion.Header>
          <Accodion.Body>
            <div className="w-full mb-4">
              <ListItemBody>My Private Dashboard</ListItemBody>
            </div>
          </Accodion.Body>
        </>
      </Accodion>

      <Accodion className="divide-y group-accordeon group">
        <>
          <Accodion.Header className="text-gray-400 p-3 hover:bg-gray-100 relative">
            {({ isOpen, setIsOpen }) => (
              <div
                onClick={() => setIsOpen((v) => !v)}
                className={`flex justify-between items-center pr-2 text-xs ${
                  isOpen && "text-gray-700"
                }`}
              >
                <div className="flex justify-between pr-2 w-full">
                  <span className="text-xs font-semibold">DOCS</span>

                  <IoIosArrowForward
                    className={`transition-[transform] duration-200 ${
                      isOpen ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
            )}
          </Accodion.Header>
          <Accodion.Body>
            <div className="w-full mb-4">
              <DocsItem>All</DocsItem>
              <DocsItem>Shared</DocsItem>
              <DocsItem>Assigned to me</DocsItem>
              <DocsItem>Private</DocsItem>
            </div>
          </Accodion.Body>
        </>
      </Accodion>
    </div>
  );
};
