import PROJECT_ICONS from "../constants/projectIcons";
import SVGContainer from "./SVGContainer";

export default function ProjectListItem({
	project,
	onSelect,
	selected,
	...props
}) {
	const projectIcon = PROJECT_ICONS.find(
		(projIcon) => projIcon.id === project.iconId
	);

	return (
		<ul
			className={`w-full rounded-lg hover:bg-white/10 p-3 hover:cursor-pointer flex flex-row gap-5 ${selected && "bg-white/10"}`}
			onClick={() => onSelect(project.id)}
			{...props}
		>
			<SVGContainer SVG={projectIcon.icon} />
			<div>
				<h2 className="line-clamp-2">{project.title}</h2>
				<p className="text-sm text-gray-400 line-clamp-2">
					{project.description}
				</p>
			</div>
		</ul>
	);
}
