import { useState } from "react";
import HideMenuIcon from "../icons/HideMenuIcon";
import LogoIcon from "../icons/LogoIcon";
import MenuIcon from "../icons/MenuIcon";
import PlusIcon from "../icons/PlusIcon";
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
			selected={project.id === selectedProjectId ? true : ""}
		/>
	));

	const content = sidebarVisibility ? (
		<aside className="bg-slate-900/85 h-lvh md:w-72 max-md:hidden md:p-6 flex flex-col md:gap-6 items-center">
			<div className="flex flex-row gap-4 items-center">
				<Button
					onClick={handleHideMenu}
					icon={<HideMenuIcon width="20" height="20" />}
					className="max-md:hidden"
				/>
				<h2 className="text-xl leading-10 text-nowrap">
					Project Manager
				</h2>
				<LogoIcon />
			</div>
			<Button
				text="Add project"
				icon={<PlusIcon width="20" height="20" />}
				onClick={onStartAddProject}
			/>
			<div className="flex flex-col w-full gap-1">{projectsList}</div>
		</aside>
	) : (
		<aside className="bg-slate-900 h-lvh w-16 p-2 pt-6 flex flex-col gap-6 items-center max-md:hidden">
			<Button
				icon={<MenuIcon width="20" height="20" />}
				onClick={handleHideMenu}
			/>

			<Button
				icon={<PlusIcon width="20" height="20" />}
				className="size-8"
				onClick={onStartAddProject}
			/>
		</aside>
	);
	return content;
}
