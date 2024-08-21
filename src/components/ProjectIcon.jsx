export default function ProjectIcon({
	icon,
	selected,
	onSelectIcon,
	iconId,
	...props
}) {
	return (
		<div
			className={`hover:bg-white/10 rounded-3xl hover:cursor-pointer ${selected && "bg-white/10"}`}
			onClick={() => onSelectIcon(iconId)}
			{...props}
		>
			{icon}
		</div>
	);
}
