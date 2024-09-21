import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import PROJECT_ICONS from "../constants/projectIcons";
import TASK_STATUSES from "../constants/taskStatuses";
import PlusIcon from "../icons/PlusIcon";
import TrashIcon from "../icons/TrashIcon";
import Button from "./Button";
import Error from "./Error";
import Input from "./Input";
import Modal from "./Modal";
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
  onDelete,
}) {
  const [selectedTask, setSelectedTask] = useState(null);

  const title = useRef();
  const description = useRef();
  const dueDateRef = useRef();
  const taskTitle = useRef();
  const taskDescription = useRef();
  const error = useRef();
  const taskModal = useRef();
  const projectDeletionModal = useRef();

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
        setSelectedTask(t);
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
          if (editing && e.ctrlKey && e.key === "Enter") {
            (function () {
              setEditing(false);
              onEditSave({
                ...project,
                title: title.current.value,
                description: description.current.value,
                dueDate: dueDateRef.current.value,
              });
            })();
          }
        }}
      >
        <Error
          ref={error}
          title="Unable to save"
          description="All required fields must be filled out before saving."
        />

        <Modal custom ref={projectDeletionModal}>
          <>
            <div className="w-full text-center">
              <h1 className="text-lg font-bold leading-10 tracking-tight">
                You're about to delete your project
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
                      onDelete(project);
                    }}
                  />
                </div>
              </form>
            </div>
          </>
        </Modal>

        {selectedTask ? (
          <Task
            ref={taskModal}
            task={selectedTask}
            onTaskUpdate={handleTaskUpdate}
            setSelectedTask={setSelectedTask}
          />
        ) : (
          <Task
            ref={taskModal}
            task={{
              taskTitle: "None",
              taskDescription: "None",
              taskStatus: TASK_STATUSES.not_started,
            }}
            onTaskUpdate={handleTaskUpdate}
            setSelectedTask={setSelectedTask}
          />
        )}

        <div className="flex w-2/3 flex-row gap-4">
          <div className="flex flex-none items-center">
            <projectIcon.icon width="72" height="72" />
          </div>

          <div className="flex flex-1 flex-col gap-3">
            {!editing ? (
              <h1
                className={`hyphens-auto text-wrap break-words text-5xl font-bold tracking-tight ${!project.title && "italic text-slate-400"}`}
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
                  className="w-1/3"
                />
              )}
            </div>
          </div>
        </div>

        {!editing ? (
          <p
            className={`w-2/3 hyphens-auto whitespace-pre-wrap text-pretty break-words ${!project.description && "italic text-slate-400"}`}
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
            Project tasks{" "}
            {project.tasks.length ? `(${project.tasks.length})` : ""}
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
                <Input
                  variant="ghost"
                  placeholder="Title"
                  ref={taskTitle}
                  autoComplete="off"
                />
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

      <article className="w-36 pr-5 pt-5">
        <div className="flex flex-row justify-between">
          <Button
            className="border-red-800"
            icon={<TrashIcon width="20" height="20" color="#991b1b" />}
            onClick={() => {
              projectDeletionModal.current.open();
            }}
          />
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
        </div>
      </article>
    </section>
  );
}
