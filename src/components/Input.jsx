export default function Input({ label, textarea, ...props }) {
	const inputClasses =
		"border rounded-lg focus:outline-none focus:outline-green-400";
	return (
		<p className="flex flex-col gap-1">
			<label className="uppercase text-sm font-bold text-gray-300">
				{label}
			</label>
			{!textarea ? (
				<input className={inputClasses} {...props} />
			) : (
				<textarea className={inputClasses} {...props}></textarea>
			)}
		</p>
	);
}
