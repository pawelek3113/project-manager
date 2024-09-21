import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";
import Modal from "./Modal";
import TaskStatus from "./TaskStatus";

const Task = forwardRef(function Task(
  { task, onTaskUpdate, setSelectedTask },
  ref,
) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.open();
      },
      close() {
        modal.current.close();
      },
    };
  });

  return (
    <Modal ref={modal} custom className="h-3/4 w-1/2">
      <div className="flex h-full w-full flex-col justify-between gap-3">
        <div className="flex flex-row items-center justify-between">
          <div className="flex w-full flex-col gap-2">
            <h1 className="text-2xl font-bold">{task.taskTitle}</h1>
            <p>{task.taskDescription}</p>
          </div>
          <div className="flex h-1/2 w-full items-center justify-end">
            <TaskStatus task={task} onTaskUpdate={onTaskUpdate} className="" />
          </div>
        </div>

        <div className="flex self-end">
          <form method="dialog">
            <Button
              text="Save"
              type="submit"
              className="outline-none"
              onClick={() => {
                onTaskUpdate({
                  taskTitle: task.taskTitle,
                  taskDescription: task.taskDescription,
                  taskStatus: task.taskStatus,
                });
                setSelectedTask(null);
              }}
            />
          </form>
        </div>
      </div>
    </Modal>
  );
});

export default Task;
