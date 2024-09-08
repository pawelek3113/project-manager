import { forwardRef } from "react";

const Input = forwardRef(function Input(
	{ label, textarea, variant = "default", className, ...props },
	ref
) {
	const VARIANTS = {
		default:
			"border rounded-lg focus:outline-none focus:outline-green-400 text-black p-1",
		ghost: "bg-transparent outline-none p-1",
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
				<input ref={ref} className={chosenVariant} {...props} />
			) : (
				<textarea
					ref={ref}
					className={chosenVariant}
					{...props}
				></textarea>
			)}
		</p>
	);
});

export default Input;
