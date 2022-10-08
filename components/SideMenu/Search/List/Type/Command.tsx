import { HiOutlineDocumentText } from "react-icons/hi";

import { VscPulse } from "react-icons/vsc";

import { AiOutlineBell, AiOutlineHome } from "react-icons/ai";

import { ListHeader } from "../Header";

const items = [
  {
    name: "Go to Home",
    type: "Command",
    Icon: (props: any) => <AiOutlineHome {...props} />,
    id: 1,
  },
  {
    name: "Go to Notification",
    type: "Command",
    Icon: (props: any) => <AiOutlineBell {...props} />,
    id: 2,
  },
  {
    name: "Go to Docs Home",
    Icon: (props: any) => <HiOutlineDocumentText {...props} />,
    type: "Command",
    id: 3,
  },
  {
    name: "Go to Pulse",
    type: "Command",
    Icon: (props: any) => <VscPulse {...props} />,
    id: 4,
  },
];

export const CommandList = () => {
  return (
    <div className="flex flex-col">
      <ListHeader name="Commands" />
      <div className="">
        {items.map(({ Icon, name, id, type }) => {
          return (
            <div
              key={id}
              className="flex gap-4 items-center p-2 cursor-pointer hover:bg-gray-200 text-sm group-item"
            >
              <Icon className="text-lg w-10" />

              <div className="flex flex-col gap-1 grow">
                <span>{name}</span>
                <div className="flex place-content-start place-items-center gap-1 text-xm text-gray-500">
                  <span className="center">
                    <span>{type}</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
