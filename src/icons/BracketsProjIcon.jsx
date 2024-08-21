export default function BracketsProjIcon({
	color = "white",
	width = "64",
	height = "64",
	...props
}) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			height={height}
			width={width}
			{...props}
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				{" "}
				<path
					d="M9 21C7.89543 21 7 20.1046 7 19V15.3255C7 14.8363 7 14.5917 6.94474 14.3615C6.89575 14.1575 6.81494 13.9624 6.70528 13.7834C6.5816 13.5816 6.40863 13.4086 6.06274 13.0627L5 12L6.06274 10.9373C6.40864 10.5914 6.5816 10.4184 6.70528 10.2166C6.81494 10.0376 6.89575 9.84254 6.94474 9.63846C7 9.40829 7 9.1637 7 8.67452V5C7 3.89543 7.89543 3 9 3M15 21C16.1046 21 17 20.1046 17 19V15.3255C17 14.8363 17 14.5917 17.0553 14.3615C17.1043 14.1575 17.1851 13.9624 17.2947 13.7834C17.4184 13.5816 17.5914 13.4086 17.9373 13.0627L19 12L17.9373 10.9373C17.5914 10.5914 17.4184 10.4184 17.2947 10.2166C17.1851 10.0376 17.1043 9.84254 17.0553 9.63846C17 9.40829 17 9.1637 17 8.67452V5C17 3.89543 16.1046 3 15 3"
					stroke={color}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{" "}
			</g>
		</svg>
	);
}
