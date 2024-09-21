import { useRef } from "react";
import TrashIcon from "../icons/TrashIcon";
import Button from "./Button";
import DeletionModal from "./DeletionModal";
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
      <DeletionModal
        ref={taskDeletionModal}
        name="this task"
        proceedCb={() => {
          handleTaskDeletion(task);
        }}
      />

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
