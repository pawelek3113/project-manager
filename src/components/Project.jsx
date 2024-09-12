import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import PROJECT_ICONS from "../constants/projectIcons";
import TASK_STATUSES from "../constants/taskStatuses";
import PlusIcon from "../icons/PlusIcon";
import Button from "./Button";
import Error from "./Error";
import Input from "./Input";
import Task from "./Task";
import TaskListItem from "./TaskListItem";

export default function Project({
  project,
  onEditSave,
  editing,
  setEditing,
  addingTask,
  setAddingTask,
  onTaskAdd,
  onTaskUpdate,
}) {
  const [currentTask, setCurrentTask] = useState(undefined);

  const title = useRef();
  const description = useRef();
  const dueDateRef = useRef();
  const taskTitle = useRef();
  const taskDescription = useRef();
  const error = useRef();
  const taskModal = useRef();

  function handleTaskSave() {
    if (taskTitle.current.value && taskDescription.current.value) {
      onTaskAdd({
        ...project,
        tasks: [
          ...project.tasks,
          {
            taskTitle: taskTitle.current.value,
            taskDescription: taskDescription.current.value,
            taskStatus: TASK_STATUSES.not_started,
            taskId: uuid(),
          },
        ],
      });
    } else {
      error.current.show();
    }
  }

  function handleTaskUpdate(taskData) {
    const updatedTasks = project.tasks.map((t) => {
      if (t.taskId === taskData.taskId) {
        return { ...taskData };
      }
      return t;
    });
    onTaskUpdate({ ...project, tasks: [...updatedTasks] });
  }

  const tasksList = project.tasks.map((t) => (
    <TaskListItem
      key={t.taskId}
      task={t}
      onTaskUpdate={handleTaskUpdate}
      onClick={() => {
        setCurrentTask(t);
        taskModal.current.open();
      }}
    />
  ));

  const dueDate = new Date(project.dueDate);

  const projectIcon = PROJECT_ICONS.find(
    (projIcon) => projIcon.id === project.iconId,
  );

  return (
    <section className="flex w-full flex-row justify-between">
      <article
        className="flex grow flex-col gap-8 px-4 py-6 outline-none"
        tabIndex={0}
        onKeyDown={(e) => {
          e.key === "Enter" && editing
            ? (function () {
                setEditing(false);
                onEditSave({
                  ...project,
                  title: title.current.value,
                  description: description.current.value,
                  dueDate: dueDateRef.current.value,
                });
              })()
            : "";
        }}
      >
        <Error
          ref={error}
          title="Unable to save"
          description="All required fields must be filled out before saving."
        />

        {currentTask ? (
          <Task ref={taskModal} task={currentTask} />
        ) : (
          <Task
            ref={taskModal}
            task={{ taskTitle: "None", taskDescription: "None" }}
          />
        )}

        <div className="flex flex-row gap-4">
          <div className="flex items-center">
            <projectIcon.icon width="72" height="72" />
          </div>

          <div className="flex flex-col gap-3">
            {!editing ? (
              <h1
                className={`text-5xl font-bold tracking-tight ${!project.title && "italic text-slate-400"}`}
              >
                {project.title ? project.title : "Title's not specified"}
              </h1>
            ) : (
              <Input
                variant="outline"
                ref={title}
                defaultValue={project.title}
                className="text-5xl font-bold tracking-tight"
                label="title"
              />
            )}
            <div>
              {!editing ? (
                <h3
                  className={`text-sm font-bold ${!project.dueDate && "italic text-slate-400"}`}
                >
                  {project.dueDate
                    ? `DUE: ${dueDate.toLocaleDateString()}`
                    : "Due date's not specified"}
                </h3>
              ) : (
                <Input
                  ref={dueDateRef}
                  variant="outline"
                  label="Due Date"
                  type="date"
                  defaultValue={project.dueDate}
                  className="w-1/5"
                />
              )}
            </div>
          </div>
        </div>

        {!editing ? (
          <p
            className={`w-2/3 text-pretty ${!project.description && "italic text-slate-400"}`}
          >
            {project.description
              ? project.description
              : "Description's not specified"}
          </p>
        ) : (
          <Input
            variant="outline"
            ref={description}
            defaultValue={project.description}
            textarea
            className="h-80 w-2/3"
            label="description"
          />
        )}
        <div className="flex w-2/3 flex-col items-start gap-4">
          <h2 className="text-2xl font-bold uppercase tracking-tighter">
            Project tasks
          </h2>
          {!addingTask ? (
            <Button
              text="Add task..."
              icon={<PlusIcon width="15" height="15" />}
              className="border-0 hover:text-green-400"
              onClick={() => {
                setAddingTask(true);
              }}
            />
          ) : (
            <div className="flex w-full max-w-xl flex-col gap-2 rounded-lg border px-8 py-4">
              <h3 className="font-bold tracking-tighter">Adding a task</h3>
              <div className="flex w-full flex-col">
                <Input variant="ghost" placeholder="Title" ref={taskTitle} />
                <Input
                  variant="ghost"
                  placeholder="Description"
                  ref={taskDescription}
                  textarea
                />
              </div>
              <div className="flex flex-row gap-3 self-end">
                <Button
                  text="Cancel"
                  className="border-0"
                  onClick={() => {
                    setAddingTask(false);
                  }}
                />
                <Button text="Save" onClick={handleTaskSave} />
              </div>
            </div>
          )}
          <div className="w-full max-w-xl">
            {project.tasks.length !== 0 ? (
              <ul>{tasksList.reverse()}</ul>
            ) : addingTask ? (
              ""
            ) : (
              <h1 className="italic text-slate-400">Project has no tasks</h1>
            )}
          </div>
        </div>
      </article>

      <article className="pr-5 pt-5">
        {!editing ? (
          <Button
            text="Edit"
            onClick={() => {
              setEditing(true);
            }}
            className="border-0"
          />
        ) : (
          <Button
            text="Save"
            onClick={() => {
              onEditSave({
                ...project,
                title: title.current.value,
                description: description.current.value,
                dueDate: dueDateRef.current.value,
              });
            }}
            className="border-0"
          />
        )}
      </article>
    </section>
  );
}
