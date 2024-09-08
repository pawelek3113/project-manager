import { useState } from "react";
import PROJECT_ICONS from "../constants/projectIcons";
import Input from "./Input";

export default function Project({ project, title, onTitleChange, error }) {
	const dueDate = new Date(project.dueDate);

	const projectIcon = PROJECT_ICONS.find(
		(projIcon) => projIcon.id === project.iconId
	);

	const [changingTitle, setChangingTitle] = useState(false);

	function handleEnterDown() {
		setChangingTitle(false);
	}

	return (
		<div
			className="px-4 py-6 flex flex-col gap-8 outline-none"
			tabIndex={0}
			onKeyDown={(e) => {
				e.key === "Enter" && setChangingTitle(false);
			}}
		>
			<div className="flex flex-row gap-4">
				<div className="flex items-center">
					<projectIcon.icon width="72" height="72" />
				</div>

				<div className="gap-3 flex flex-col">
					<h1
						className="text-5xl tracking-tight font-bold"
						onClick={() => {
							setChangingTitle(true);
						}}
					>
						{!changingTitle ? (
							project.title
						) : (
							<Input
								variant="ghost"
								value={title}
								onChange={(e) => onTitleChange(e, project)}
							/>
						)}
					</h1>
					<div>
						<h3 className="text-sm font-bold">
							DUE: {dueDate.toLocaleDateString()}
						</h3>
					</div>
				</div>
			</div>
			<p className="text-pretty w-2/3">{project.description}</p>
		</div>
	);
}
