import PlusIcon from "../icons/PlusIcon";
import ToolsIcon from "../icons/ToolsIcon";
import Button from "./Button";
export default function NoProjectSelected({ onStartAddProject }) {
	return (
		<div className="flex flex-col md:py-8 justify-center gap-2 text-center w-full">
			<div className="flex flex-col max-md:items-center ">
				<ToolsIcon width="176" height="176" />
				<h1 className="md:py-4 md:text-start text-center md:text-5xl text-lg font-bold">
					Manage your projects
				</h1>
			</div>
			<h2 className="text-center md:text-start">
				Select a project or get started by adding a new one
			</h2>

			<div className="flex py-2 justify-center md:justify-start">
				<Button
					text="Create a new project"
					icon={<PlusIcon width="20" height="20" />}
					onClick={onStartAddProject}
					className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 transition-all duration-300 bg-size-200 hover:bg-right"
				/>
			</div>
		</div>
	);
}
