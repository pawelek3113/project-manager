export default function Project({ project }) {
	const dueDate = new Date(project.dueDate);
	return (
		<div className="px-4 py-6 flex flex-col gap-8">
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
			<p>{project.description}</p>
		</div>
	);
}
