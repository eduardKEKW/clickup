import { IoMdArrowDropright } from "react-icons/io";
import { TaskType } from ".";
import { Accodion } from "../Helpers/Accordion";
import { TaskItem } from "./TaskItem";

export const Task = ({ task }: { task: TaskType }) => {
  return (
    <Accodion isOpen={true}>
      <>
        <Accodion.Header>
          {({ isOpen, setIsOpen }) => (
            <div className="flex items-center bg-white shadow-md rounded-sm hover:bg-gray-100">
              <span className={`w-3 h-3 text-xs text-gray-400 mx-1`}>
                {!!task?.subtasks?.length && (
                  <IoMdArrowDropright
                    onClick={() => setIsOpen((v) => !v)}
                    className={`transition-[transform] ${
                      isOpen && "rotate-90"
                    }`}
                  />
                )}
              </span>

              <TaskItem task={task} />
            </div>
          )}
        </Accodion.Header>
        <Accodion.Body>
          <div className="bg-white">
            {task?.subtasks?.map((subTask: any, id: number) => {
              return (
                <TaskItem
                  parent={task.name}
                  isLast={id + 1 == task.subtasks.length}
                  key={subTask.id}
                  task={subTask}
                />
              );
            })}
          </div>
        </Accodion.Body>
      </>
    </Accodion>
  );
};
