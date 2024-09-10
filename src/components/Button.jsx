export default function Button({ className, text, icon, ...props }) {
  const content = icon ? (
    <span className="flex flex-row items-center justify-center gap-3">
      {icon}
      {text}
    </span>
  ) : (
    <>{text}</>
  );
  return (
    <button
      {...props}
      className={`rounded-lg border ${icon && !text ? "h-10 w-10" : "h-10 px-4 py-2"} shrink-0 hover:bg-white/5 ${className}`}
    >
      {content}
    </button>
  );
}
