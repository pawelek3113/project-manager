import PlusIcon from "../assets/plus.svg?react";
import Tools from "../assets/tools.svg?react";
import Button from "./Button";
import SVGContainer from "./SVGContainer";
export default function NoProjectSelected({ onAddingProject }) {
	return (
		<div className="flex flex-col md:py-8 justify-center gap-2 text-center w-full">
			<SVGContainer SVG={<Tools className="size-44" />} />
			<h1 className="md:py-4 md:text-start text-center md:text-5xl text-lg font-bold">
				Manage your projects
			</h1>
			<h2 className="text-center md:text-start">
				Select a project or get started by adding a new one
			</h2>

			<div className="flex py-2 justify-center md:justify-start">
				<Button
					text="Create a new project"
					icon={<PlusIcon className="size-5" />}
					onClick={onAddingProject}
                    className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 transition-all duration-300 bg-size-200 hover:bg-right"
				/>
			</div>
		</div>
	);
}
