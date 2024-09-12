import TASK_STATUSES from "../constants/taskStatuses";

export default function TaskStatus({
  task,
  selectedStatus,
  setSelectedStatus,
  onTaskUpdate,
}) {
  const statuses = Object.entries(TASK_STATUSES).map(([k, v]) => {
    return (
      <option key={k} value={v}>
        {v}
      </option>
    );
  });

  return (
    <select
      value={selectedStatus}
      onChange={(e) => {
        setSelectedStatus(e.target.value);
        onTaskUpdate({ ...task, taskStatus: e.target.value });
      }}
      defaultValue={task.taskStatus}
      className={`w-3/12 rounded-lg text-center text-sm ${selectedStatus === "Not started" ? "bg-transparent" : selectedStatus === "In progress" ? "bg-yellow-500" : "bg-green-400"}`}
    >
      {statuses}
    </select>
  );
}
