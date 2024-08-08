import { useState } from "react";
import { v4 as uuid } from "uuid";
import Navbar from "./components/Navbar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
	});

	function handleStartAddProject() {
		setProjectsState((prevProjectsState) => {
			return { ...prevProjectsState, selectedProjectId: null };
		});
	}
	function handleCancel() {
		setProjectsState((prevProjectsState) => {
			return { ...prevProjectsState, selectedProjectId: undefined };
		});
	}

	function handleAddProject(projectData) {
		setProjectsState((prevProjectsState) => {
			const projectId = uuid();
			const newProject = { ...projectData, id: projectId };

			return {
				...prevProjectsState,
				selectedProjectId: undefined,
				projects: [...prevProjectsState.projects, newProject],
			};
		});
	}

	function handleSelect(id) {
		setProjectsState((prevProjectsState) => {
			return { ...prevProjectsState, selectedProjectId: id };
		});
	}

	let content;
	if (projectsState.selectedProjectId === null) {
		content = (
			<NewProject
				onCancel={handleCancel}
				onAddProject={handleAddProject}
			/>
		);
	} else if (projectsState.selectedProjectId === undefined) {
		content = (
			<NoProjectSelected onStartAddProject={handleStartAddProject} />
		);
	} else {
		content = "chuj";
	}

	return (
		<main className="h-full w-full flex flex-col md:flex-row gap-4 md:gap-10 bg-slate-800 text-white">
			<Navbar onStartAddProject={handleStartAddProject} />
			<Sidebar
				onStartAddProject={handleStartAddProject}
				projects={projectsState.projects}
				onSelect={handleSelect}
			/>
			<div className="flex flex-col gap-2">{content}</div>
		</main>
	);
}

export default App;
