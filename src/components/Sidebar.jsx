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
  sidebarSettings,
}) {
  const { sidebarVisibility, setSidebarVisibility } = sidebarSettings;

  function handleHideMenu() {
    setSidebarVisibility((prevSidebarVisibility) => !prevSidebarVisibility);
  }

  const projectsList = projects.map((project) => (
    <ProjectListItem
      project={project}
      onSelect={onSelect}
      key={project.id}
      selected={project.id === selectedProjectId ? true : ""}
      long={sidebarVisibility}
    />
  ));

  return (
    <aside
      className={`fixed top-0 min-h-screen bg-slate-900/85 backdrop-blur-sm ${sidebarVisibility ? "md:w-[288px]" : "w-[64px]"} max-md:hidden md:py-6 ${sidebarVisibility ? "md:p-6" : "md:p-2"} flex flex-col items-center md:gap-6`}
    >
      <div className="flex flex-row items-center gap-4">
        <Button
          onClick={handleHideMenu}
          icon={
            sidebarVisibility ? (
              <HideMenuIcon width="20" height="20" />
            ) : (
              <MenuIcon width="20" height="20" />
            )
          }
        />
        {sidebarVisibility && (
          <>
            <h2 className="text-nowrap text-xl leading-10">Project Manager</h2>
            <LogoIcon />
          </>
        )}
      </div>
      <Button
        text={sidebarVisibility && "Add project"}
        icon={<PlusIcon width="20" height="20" />}
        onClick={onStartAddProject}
      />
      <div className="flex w-full flex-col gap-1">{projectsList}</div>
    </aside>
  );
}
