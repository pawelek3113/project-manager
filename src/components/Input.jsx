import { forwardRef } from "react";

const Input = forwardRef(function Input(
	{ label, textarea, variant = "default", className, ...props },
	ref
) {
	const VARIANTS = {
		default:
			"border rounded-lg focus:outline-none focus:outline-green-400 text-black py-1 px-3",
		outline:
			"bg-transparent border rounded-xl focus:outline-none focus:outline-green-400 py-1 px-3",
		ghost: "bg-transparent outline-none py-1 px-3",
	};

	let chosenVariant = `${VARIANTS[variant]} ${className && className}`;

	return (
		<p className="flex flex-col gap-1">
			{label ? (
				<label className="uppercase text-sm font-bold text-gray-300">
					{label}
				</label>
			) : (
				""
			)}
			{!textarea ? (
				<input
					ref={ref}
					className={chosenVariant}
					{...props}
					spellCheck="false"
				></input>
			) : (
				<textarea
					ref={ref}
					className={chosenVariant}
					{...props}
					spellCheck="false"
				></textarea>
			)}
		</p>
	);
});

export default Input;
