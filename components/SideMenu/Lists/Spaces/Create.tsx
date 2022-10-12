import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { Modal } from "../../../Helpers/Modal";
import { FcGlobe } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

export const CreateNewSpace = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newSpace, setNewSpace] = useState<string>("");
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="w-64 mx-auto bg-gray-200 text-center center gap-2 text-gray-500 text-xs py-1 mt-2 mb-1 rounded-md h-6"
      >
        <BiPlus className="stroke-2" />
        MEW SPACE
      </button>
      <Modal onClose={() => setShowModal(false)} open={showModal}>
        <div className="w-[35vw] h-[33rem] bg-gray-100 rounded-lg">
          {/* modal header */}
          <div className="bg-white relative h-2/4 flex flex-col border border-b-gray-200">
            <div className="absolute top-0 left-full text-[2rem] text-gray-400 -translate-x-full pt-6 pr-6">
              <AiOutlineClose
                onClick={() => setShowModal(false)}
                className="cursor-pointer hover:rotate-180 transition-[transform] duration-200"
              />
            </div>
            <div className="flex flex-col items-center grow justify-center">
              <div className="">
                <FcGlobe className="text-[7rem] text-violet-400" />
              </div>
              <span className="text-xl text-gray-800 font-medium">
                Ceate new Space
              </span>
            </div>
            <div className="flex mx-7 gap-2">
              <div className="text-violet-400 border-b-2 border-b-violet-400 m-2 cursor-pointer">
                New
              </div>
              <div className="cursor-pointer m-2">Templates</div>
            </div>
          </div>
          {/* modal body */}
          <div className="h-2/4 mx-7">
            <div className="my-10">
              <label htmlFor="space" className="text-xs m-0">
                Space Name
              </label>
              <input
                value={newSpace}
                onChange={(e) => setNewSpace(e.target.value)}
                type="text"
                id="space"
                placeholder="Enter new Space"
                className="w-full h-14 p-2 bg-transparent placeholder:text-gray-300 border-b border-b-gray-300 outline-none"
              />
            </div>
            <div className="mb-6">
              <button
                disabled
                className="w-full bg-violet-400 rounded-md h-14 text-white cursor-pointer hover:bg-violet-500 transition-[background-color] mb-3"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
