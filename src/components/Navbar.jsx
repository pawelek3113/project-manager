import PlusIcon from "../assets/plus.svg?react";
import Button from "./Button";
export default function Navbar({onAddingProject}) {
	return (
		<nav className="flex flex-row bg-slate-900 justify-center items-center gap-6 p-4 md:hidden">
			<h2 className="text-lg text-nowrap font-bold">Project Manager</h2>
			<Button
				icon={<PlusIcon className="size-5" />}
				className="size-8"
				onClick={onAddingProject}
			/>
		</nav>
	);
}
