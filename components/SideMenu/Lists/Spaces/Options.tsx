import { useState } from "react";
import {
  AiOutlineLink,
  AiOutlineStar,
  AiOutlineDelete,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import { BiDotsHorizontalRounded, BiHide } from "react-icons/bi";
import {
  BsPencil,
  BsDroplet,
  BsListNested,
  BsWindowDock,
} from "react-icons/bs";
import { FiPlus, FiSettings } from "react-icons/fi";
import {
  HiOutlineClipboard,
  HiOutlineDocumentDuplicate,
  HiOutlinePlusSm,
} from "react-icons/hi";
import { IoIosArrowForward, IoIosColorWand } from "react-icons/io";
import { MdFormatAlignCenter } from "react-icons/md";
import tw from "tailwind-styled-components";
import { Popup } from "../../../Helpers/Popup";

const ListItemOptins = tw.div<any>`
    flex 
    items-center
    gap-1 
    top-[1.5px] 
    text-lg
    ${(props) => (props.$show ? "visible" : "invisible")}
`;

const Item = tw.div<any>`
    flex
    items-center
    hover:bg-gray-200
    rounded-md
    p-1
    text-sm
    gap-2
    w-full
`;

const Option = ({
  setIsOptionsOpen,
  children,
}: {
  setIsOptionsOpen: (v: boolean) => void;
  children: JSX.Element;
}) => {
  return (
    <Popup handleAction={(v) => setIsOptionsOpen(v)}>
      <>
        <Popup.Body className="w-60">
          <div className="text-sm flex flex-col gap-1">
            <Popup>
              <>
                <Popup.Body className="w-60 -translate-y-0 translate-x-[calc(100%-1rem)]">
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
                <Popup.Body className="w-60 -translate-y-0 translate-x-[calc(100%-1rem)]">
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
        <Popup.Content>{children}</Popup.Content>
      </>
    </Popup>
  );
};

export const Options = ({ isItemHover }: { isItemHover: boolean }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

  return (
    <ListItemOptins
      $show={isOptionsOpen || isItemHover}
      onClick={(e: Event) => e.stopPropagation()}
    >
      <Option setIsOptionsOpen={(v) => setIsOptionsOpen(v)}>
        <BiDotsHorizontalRounded />
      </Option>
      <Option setIsOptionsOpen={(v) => setIsOptionsOpen(v)}>
        <HiOutlinePlusSm />
      </Option>
    </ListItemOptins>
  );
};
