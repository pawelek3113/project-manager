export default function Project({ project }) {
	console.log(project);
	return (
		<div className="px-4 py-6 flex flex-col gap-8">
			<div className="gap-3 flex flex-col">
				<h1 className="text-5xl tracking-tight font-bold">
					{project.title}
				</h1>
				<h3 className="text-sm font-bold">DUE: {project.dueDate}</h3>
			</div>
			<p>{project.description}</p>
		</div>
	);
}
