import PROJECT_ICONS from "../constants/projectIcons";

export default function Project({ project }) {
	const dueDate = new Date(project.dueDate);

	const projectIcon = PROJECT_ICONS.find(
		(projIcon) => projIcon.id === project.iconId
	);

	return (
		<div className="px-4 py-6 flex flex-col gap-8">
			<div className="flex flex-row gap-4">
				<div className="flex items-center">
					<projectIcon.icon width="72" height="72" />
				</div>

				<div className="gap-3 flex flex-col">
					<h1 className="text-5xl tracking-tight font-bold">
						{project.title}
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
