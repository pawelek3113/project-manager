export default function ProjectIcon({
  icon,
  selected,
  onSelectIcon,
  iconId,
  ...props
}) {
  return (
    <div
      className={`rounded-3xl hover:cursor-pointer hover:bg-white/10 ${selected && "bg-white/10"}`}
      onClick={() => onSelectIcon(iconId)}
      {...props}
    >
      {icon}
    </div>
  );
}
