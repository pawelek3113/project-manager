import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
	const inputClasses =
		"border rounded-lg focus:outline-none focus:outline-green-400 text-black";
	return (
		<p className="flex flex-col gap-1">
			<label className="uppercase text-sm font-bold text-gray-300">
				{label}
			</label>
			{!textarea ? (
				<input ref={ref} className={inputClasses} {...props} />
			) : (
				<textarea
					ref={ref}
					className={inputClasses}
					{...props}
				></textarea>
			)}
		</p>
	);
});

export default Input;
