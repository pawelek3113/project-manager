import { useState } from "react";
import Navbar from "./components/Navbar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
	});

	function handleAddProject() {
		setProjectsState((prevProjectsState) => {
			return { ...prevProjectsState, selectedProjectId: null };
		});
	}
	function handleCancel() {
		setProjectsState((prevProjectsState) => {
			return { ...prevProjectsState, selectedProjectId: undefined };
		});
	}

	const content =
		projectsState.selectedProjectId === null ? (
			<NewProject onCancel={handleCancel} />
		) : (
			<NoProjectSelected onAddingProject={handleAddProject} />
		);

	return (
		<main className="h-screen w-full flex flex-col md:flex-row gap-4 md:gap-10 bg-slate-800 text-white">
			<Navbar onAddingProject={handleAddProject} />
			<Sidebar onAddingProject={handleAddProject} />
			<div className="flex flex-col gap-2">{content}</div>
		</main>
	);
}

export default App;
