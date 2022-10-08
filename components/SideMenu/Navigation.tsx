import Link from "next/link";
import { AiOutlineHome, AiOutlineBell, AiOutlineArrowUp } from "react-icons/ai";

import { BiPulse } from "react-icons/bi";
import { AiOutlineTrophy } from "react-icons/ai";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="text-sm text-gray-600">
      <div
        className={`"mt-3 overflow-hidden transition-[height] duration-200 " ${
          isOpen ? "h-36" : "h-[4.4rem]"
        }`}
      >
        <Link href="#">
          <div className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer p-2 px-4">
            <AiOutlineHome className="text-lg" />
            <span className="grow">Home</span>
          </div>
        </Link>

        <Link href="#">
          <div className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer p-2 px-4">
            <AiOutlineBell className="text-lg" />
            <span className="grow">Notifications</span>
          </div>
        </Link>

        <Link href="#">
          <div className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer p-2 px-4">
            <BiPulse className="text-lg" />
            <span className="grow">Pulse</span>
          </div>
        </Link>

        <Link href="#">
          <div className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer p-2 px-4">
            <AiOutlineTrophy className="text-lg" />
            <span className="grow">Goals</span>
          </div>
        </Link>
      </div>

      <div
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer p-2 px-4"
      >
        <i
          className={`transition-[rotate] duration-200 ${
            isOpen ? "" : "rotate-180"
          }`}
        >
          <AiOutlineArrowUp />
        </i>
        {isOpen ? "Show Less" : "Show More"}
      </div>
    </div>
  );
};
