export default function TaskListItem({ title, description, status }) {
  return (
    <li className="flex w-full flex-row justify-between items-center rounded-lg px-4 py-2 hover:cursor-pointer hover:bg-white/10">
      <div className="flex w-9/12 flex-col">
        <h1 className="max-w-full truncate text-lg font-bold tracking-tight">
          {title}
        </h1>
        <p>{description}</p>
      </div>
      <p
        className={`flex w-3/12 items-center justify-center rounded-3xl h-3/4 text-center text-sm ${status === "Not started" ? "border" : status === "In progress" ? "bg-yellow-500" : "bg-green-400"}`}
      >
        {status}
      </p>
    </li>
  );
}
