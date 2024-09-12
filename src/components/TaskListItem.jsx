import { useState } from "react";
import TaskStatus from "./TaskStatus";

export default function TaskListItem({ task, onTaskUpdate }) {
  const [selectedStatus, setSelectedStatus] = useState(task.taskStatus);

  return (
    <li className="flex w-full flex-row items-center justify-between rounded-lg px-4 py-2 hover:cursor-pointer hover:bg-white/10">
      <div className="flex w-9/12 flex-col">
        <h1 className="max-w-full truncate text-lg font-bold tracking-tight">
          {task.taskTitle}
        </h1>
        <p className="line-clamp-2">{task.taskDescription}</p>
      </div>
      <TaskStatus
        task={task}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        onTaskUpdate={onTaskUpdate}
      />
    </li>
  );
}
