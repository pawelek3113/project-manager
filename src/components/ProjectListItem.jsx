import PROJECT_ICONS from "../constants/projectIcons";

export default function ProjectListItem({
	project,
	onSelect,
	selected,
	long,
	...props
}) {
	const projectIcon = PROJECT_ICONS.find(
		(projIcon) => projIcon.id === project.iconId
	);

	return (
		<ul
			className={`w-full rounded-lg hover:bg-white/10 p-3 hover:cursor-pointer flex flex-row gap-5 ${selected && "bg-white/10"} ${!long && "justify-center"}`}
			onClick={() => onSelect(project.id)}
			{...props}
		>
			{
				<projectIcon.icon
					width={long ? "48" : "24"}
					height={long ? "48" : "24"}
					className={long ? "min-h-12 min-w-12" : "min-h-6 min-w-6"}
				/>
			}
			{long && (
				<div>
					<h2 className="line-clamp-2">{project.title}</h2>
					<p className="text-sm text-gray-400 line-clamp-2">
						{project.description}
					</p>
				</div>
			)}
		</ul>
	);
}
