import { useState } from "react";
import { v4 as uuid } from "uuid";
import Navbar from "./components/Navbar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const [projectEditing, setProjectEditing] = useState(false);
  const [addingProjectTask, setAddingProjectTask] = useState(false);

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
        selectedProjectId: projectId,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
  }

  function handleSelect(id) {
    setProjectEditing(false);
    setAddingProjectTask(false);
    setProjectsState((prevProjectsState) => {
      return { ...prevProjectsState, selectedProjectId: id };
    });
  }

  function handleEditSave(projectData) {
    setProjectEditing(false);
    setProjectsState((prevProjectsState) => {
      const updatedProjects = prevProjectsState.projects.map((p) => {
        if (p.id === projectData.id) {
          return {
            ...p,
            title: projectData.title.trim(),
            description: projectData.description.trim(),
            dueDate: projectData.dueDate,
          };
        }
        return p;
      });
      return { ...prevProjectsState, projects: updatedProjects };
    });
  }

  function handleAddProjectTask(projectData) {
    setAddingProjectTask(false);
    setProjectsState((prevProjectsState) => {
      const updatedProjects = prevProjectsState.projects.map((p) => {
        if (p.id === projectData.id) {
          return {
            ...p,
            tasks: projectData.tasks,
          };
        }
        return p;
      });
      return { ...prevProjectsState, projects: updatedProjects };
    });
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onCancel={handleCancel} onAddProject={handleAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = (
      <Project
        project={projectsState.projects.find(
          (project) => project.id === projectsState.selectedProjectId,
        )}
        onEditSave={handleEditSave}
        editing={projectEditing}
        setEditing={setProjectEditing}
        addingTask={addingProjectTask}
        setAddingTask={setAddingProjectTask}
        onTaskAdd={handleAddProjectTask}
      />
    );
  }

  return (
    <main className="flex h-full w-full flex-col gap-4 bg-slate-800 text-white md:flex-row md:gap-10">
      <Navbar onStartAddProject={handleStartAddProject} />
      <Sidebar
        selectedProjectId={projectsState.selectedProjectId}
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelect={handleSelect}
      />
      <div className="flex w-full flex-col gap-2">{content}</div>
    </main>
  );
}

export default App;
