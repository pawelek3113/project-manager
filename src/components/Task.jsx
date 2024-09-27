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
          <div className="flex w-full flex-col gap-5">
            <div className="flex w-full flex-row items-center justify-between">
              <h1 className="line-clamp-6 grow break-words pr-5 text-2xl font-bold">
                {task.taskTitle}
              </h1>
              <div className="flex h-1/2 items-center">
                <TaskStatus task={task} onTaskUpdate={onTaskUpdate} />
              </div>
            </div>
            <p className="break-words">{task.taskDescription}</p>
          </div>

          <div className="sticky bottom-3 mx-auto flex w-4/5 rounded-xl px-5 py-3 backdrop-blur-md">
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
