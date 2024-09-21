import { forwardRef, useImperativeHandle, useRef } from "react";
import TrashIcon from "../icons/TrashIcon";
import Button from "./Button";
import DeletionModal from "./DeletionModal";
import Modal from "./Modal";
import TaskStatus from "./TaskStatus";

const Task = forwardRef(function Task(
  { task, onTaskUpdate, onTaskDelete, setSelectedTask },
  ref,
) {
  const modal = useRef();
  const taskDeletionModal = useRef();

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

  function handleTaskDeletion(taskData) {
    modal.current.close();
    onTaskDelete(taskData);
  }

  return (
    <>
      <DeletionModal
        ref={taskDeletionModal}
        name="this task"
        proceedCb={() => {
          handleTaskDeletion(task);
        }}
      />

      <Modal ref={modal} custom className="h-3/4 w-1/2">
        <div className="flex h-full w-full flex-col justify-between gap-3">
          <div className="flex flex-row items-center justify-between">
            <div className="flex w-full flex-col gap-2">
              <h1 className="text-2xl font-bold">{task.taskTitle}</h1>
              <p>{task.taskDescription}</p>
            </div>
            <div className="flex h-1/2 w-full items-center justify-end">
              <TaskStatus
                task={task}
                onTaskUpdate={onTaskUpdate}
                className=""
              />
            </div>
          </div>

          <div className="flex w-full">
            <form method="dialog" className="w-full">
              <div className="flex w-full flex-row justify-between">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    taskDeletionModal.current.open();
                  }}
                  className="border-zinc-400"
                  icon={<TrashIcon width="20" height="20" color="#a1a1aa" />}
                />
                <Button
                  text="Save"
                  type="submit"
                  className="self-end outline-none"
                  onClick={() => {
                    onTaskUpdate({
                      taskTitle: task.taskTitle,
                      taskDescription: task.taskDescription,
                      taskStatus: task.taskStatus,
                    });
                    setSelectedTask(null);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
});

export default Task;
