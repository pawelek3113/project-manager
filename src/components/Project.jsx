import { useRef } from "react";
import PROJECT_ICONS from "../constants/projectIcons";
import Button from "./Button";
import Input from "./Input";

export default function Project({ project, onEditSave, editing, setEditing }) {
	const dueDate = new Date(project.dueDate);

	const projectIcon = PROJECT_ICONS.find(
		(projIcon) => projIcon.id === project.iconId
	);

	const title = useRef();
	const description = useRef();
	const dueDateRef = useRef();

	console.log(project);

	return (
		<section className="flex flex-row justify-between w-full">
			<article
				className="px-4 py-6 flex flex-col gap-8 outline-none"
				tabIndex={0}
				onKeyDown={(e) => {
					e.key === "Enter" &&
						(function () {
							setEditing(false);
							onEditSave({
								...project,
								title: title.current.value,
								description: description.current.value,
							});
						})();
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
									className="w-2/12"
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
			</article>
			<p className="pr-5 pt-5">
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
			</p>
		</section>
	);
}
