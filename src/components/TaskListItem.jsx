import { useRef } from "react";
import TrashIcon from "../icons/TrashIcon";
import Button from "./Button";
import Modal from "./Modal";
import TaskStatus from "./TaskStatus";

export default function TaskListItem({
  task,
  onTaskUpdate,
  onTaskDelete,
  ...props
}) {
  const taskDeletionModal = useRef();

  function handleTaskDeletion(taskData) {
    onTaskDelete(taskData);
  }

  return (
    <>
      <Modal custom ref={taskDeletionModal}>
        <>
          <div className="w-full text-center">
            <h1 className="text-lg font-bold leading-10 tracking-tight">
              You're about to delete this task
            </h1>
            <h2>Do you want to proceed?</h2>
          </div>
          <div className="w-3/4">
            <form method="dialog">
              <div className="flex flex-row justify-around">
                <Button text="No" type="submit" />
                <Button
                  text="Yes"
                  type="submit"
                  className="border-red-800 font-bold text-red-800"
                  onClick={() => {
                    handleTaskDeletion(task);
                  }}
                />
              </div>
            </form>
          </div>
        </>
      </Modal>
      <li
        className="flex w-full flex-row items-center justify-between rounded-lg px-4 py-2 hover:cursor-pointer hover:bg-white/10"
        {...props}
      >
        <div className="flex w-9/12 flex-col">
          <h1 className="max-w-full truncate text-lg font-bold tracking-tight">
            {task.taskTitle}
          </h1>
          <p className="line-clamp-2">{task.taskDescription}</p>
        </div>

        <div className="flex flex-row items-center gap-5">
          <TaskStatus task={task} onTaskUpdate={onTaskUpdate} />
          <Button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              taskDeletionModal.current.open();
            }}
            className="border-zinc-400"
            icon={<TrashIcon width="20" height="20" color="#a1a1aa" />}
          />
        </div>
      </li>
    </>
  );
}
