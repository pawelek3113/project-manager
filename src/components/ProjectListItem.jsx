export default function ProjectListItem({ project, onSelect, ...props }) {
	return (
		<ul
			className="w-full rounded-lg hover:bg-white/10 p-3 hover:cursor-pointer"
			onClick={() => onSelect(project.id)}
			{...props}
		>
			<h2 className="truncate text-center">{project.title}</h2>
		</ul>
	);
}
