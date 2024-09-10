import { useRef } from "react";
import { v4 as uuid } from "uuid";
import PROJECT_ICONS from "../constants/projectIcons";
import PlusIcon from "../icons/PlusIcon";
import Button from "./Button";
import Input from "./Input";
import TaskListItem from "./TaskListItem";

export default function Project({ project, onEditSave, editing, setEditing, addingTask, setAddingTask, onTaskAdd }) {
	const title = useRef();
	const description = useRef();
	const dueDateRef = useRef();
	const taskTitle = useRef()
	const taskDescription = useRef()

	function handleTaskSave(){
		if (taskTitle.current.value && taskDescription.current.value){
			onTaskAdd({
				...project,
				tasks: [...project.tasks, {taskTitle: taskTitle.current.value, taskDescription: taskDescription.current.value, taskStatus: "Not started", taskId: uuid()}]
			})
		}
	}

	const tasksList = project.tasks.map((t) => <TaskListItem key={t.taskId} title={t.taskTitle} description={t.taskDescription} status={t.taskStatus}/>)

	const dueDate = new Date(project.dueDate);

	const projectIcon = PROJECT_ICONS.find(
		(projIcon) => projIcon.id === project.iconId
	);
	
	return (
		<section className="flex flex-row justify-between w-full">
			<article
				className="px-4 py-6 flex flex-col gap-8 outline-none grow"
				tabIndex={0}
				onKeyDown={(e) => {
					e.key === "Enter" && editing ?
						(function () {
							setEditing(false);
							onEditSave({
								...project,
								title: title.current.value,
								description: description.current.value,
								dueDate: dueDateRef.current.value,
							});
						})() : "";
				}}
			>
				<div className="flex flex-row gap-4">
					<div className="flex items-center">
						<projectIcon.icon width="72" height="72" />
					</div>

					<div className="gap-3 flex flex-col">
						{!editing ? (
							<h1
								className={`text-5xl tracking-tight font-bold ${!project.title && "italic text-slate-400"}`}
							>
								{project.title
									? project.title
									: "Title's not specified"}
							</h1>
						) : (
							<Input
								variant="outline"
								ref={title}
								defaultValue={project.title}
								className="text-5xl tracking-tight font-bold"
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
						className={`text-pretty w-2/3 ${!project.description && "italic text-slate-400"}`}
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
						className="h-80"
						label="description"
					/>
				)}
				<div className="w-2/3 flex flex-col gap-4 items-start">
					<h2 className="text-2xl tracking-tighter font-bold uppercase">
						Project tasks
					</h2>
					{!addingTask ? (
						<Button
							text="Add task..."
							icon={<PlusIcon width="15" height="15" />}
							className="border-0"
							onClick={() => {
								setAddingTask(true);
							}}
						/>
					) : (
						<div className="w-full border rounded-lg max-w-xl py-4 px-8 flex flex-col gap-2">
							<h3 className="tracking-tighter font-bold">
								Adding a task
							</h3>
							<div className="w-full flex flex-col">
								<Input variant="ghost" placeholder="Title" ref={taskTitle}/>
								<Input variant="ghost" placeholder="Description" ref={taskDescription} textarea/>
							</div>
							<div className="self-end gap-3 flex flex-row">
								<Button text="Cancel" className="border-0" onClick={() => { setAddingTask(false) }}/>
								<Button text="Save" onClick={handleTaskSave}/>
							</div>
						</div>
					)}
					<div className="w-full max-w-xl">
						{project.tasks.length !== 0 ? 
						<ul>
							{tasksList.reverse()}
						</ul> : (
							addingTask ? "" : 
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
