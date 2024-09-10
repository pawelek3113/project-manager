import PROJECT_ICONS from "../constants/projectIcons";

export default function ProjectListItem({
  project,
  onSelect,
  selected,
  long,
  ...props
}) {
  const projectIcon = PROJECT_ICONS.find(
    (projIcon) => projIcon.id === project.iconId,
  );

  return (
    <ul
      className={`flex w-full flex-row items-center gap-5 rounded-lg p-3 hover:cursor-pointer hover:bg-white/10 ${selected && "bg-white/10"} ${!long && "justify-center"}`}
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
        <div className="w-8/12">
          <h2
            className={`line-clamp-2 break-words ${!project.title && "italic"}`}
          >
            {project.title ? project.title : "Title's not specified"}
          </h2>
          <p
            className={`line-clamp-2 text-sm text-gray-400 ${!project.description && "italic"}`}
          >
            {project.description
              ? project.description
              : "Description's not specified"}
          </p>
        </div>
      )}
    </ul>
  );
}
