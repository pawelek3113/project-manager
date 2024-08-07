import { useState } from "react";
import HideMenuIcon from "../assets/hide_menu.svg?react";
import MenuIcon from "../assets/menu.svg?react";
import PlusIcon from "../assets/plus.svg?react";
import Button from "./Button";
import ProjectListItem from "./ProjectListItem";

export default function Sidebar({
	onStartAddProject,
	onSelect,
	projects,
	selectedProjectId,
}) {
	const [sidebarVisibility, setSidebarVisibility] = useState(true);

	function handleHideMenu() {
		setSidebarVisibility((prevSidebarVisibility) =>
			prevSidebarVisibility === true ? false : true
		);
	}

	const projectsList = projects.map((project) => (
		<ProjectListItem
			project={project}
			onSelect={onSelect}
			key={project.id}
			selected={project.id === selectedProjectId ? true : false}
		/>
	));

	const content = sidebarVisibility ? (
		<aside className="bg-slate-900/85 h-lvh md:w-4/12 lg:w-3/12 xl:w-2/12 max-md:hidden md:p-6 flex flex-col md:gap-6 items-center">
			<div className="flex flex-row gap-4 items-center">
				<Button
					onClick={handleHideMenu}
					icon={<HideMenuIcon className="size-5" />}
					className="max-md:hidden"
				/>
				<h2 className="text-xl leading-10 text-nowrap">
					Project Manager
				</h2>
			</div>
			<Button
				text="Add project"
				icon={<PlusIcon className="size-5" />}
				onClick={onStartAddProject}
			/>
			<div className="flex flex-col w-full">{projectsList}</div>
		</aside>
	) : (
		<aside className="bg-slate-900 h-lvh w-16 p-2 pt-6 flex flex-col gap-6 items-center max-md:hidden">
			<Button
				icon={<MenuIcon className="size-5" />}
				onClick={handleHideMenu}
			/>

			<Button
				icon={<PlusIcon className="size-4" />}
				className="size-8"
				onClick={onStartAddProject}
			/>
		</aside>
	);
	return content;
}
