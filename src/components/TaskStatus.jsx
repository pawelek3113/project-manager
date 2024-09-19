import { useEffect, useState } from "react";
import TASK_STATUSES from "../constants/taskStatuses";

export default function TaskStatus({ task, onTaskUpdate, className }) {
  const [selectedStatus, setSelectedStatus] = useState(task.taskStatus);

  const statuses = Object.entries(TASK_STATUSES).map(([k, v]) => {
    return (
      <option key={k} value={v}>
        {v}
      </option>
    );
  });

  useEffect(() => {
    setSelectedStatus(task.taskStatus);
  }, [task]);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    onTaskUpdate({ ...task, taskStatus: newStatus });
  };

  return (
    <select
      value={selectedStatus}
      onClick={(e) => {
        e.stopPropagation();
      }}
      onChange={(e) => handleStatusChange(e)}
      className={`rounded-lg text-center text-sm ${selectedStatus === "Not started" ? "bg-transparent" : selectedStatus === "In progress" ? "bg-yellow-500" : "bg-green-400"} ${className}`}
    >
      {statuses}
    </select>
  );
}
