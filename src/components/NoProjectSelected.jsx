import PlusIcon from "../icons/PlusIcon";
import ToolsIcon from "../icons/ToolsIcon";
import Button from "./Button";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="flex w-full flex-col justify-center gap-2 text-center md:py-8">
      <div className="flex flex-col max-md:items-center">
        <ToolsIcon width="176" height="176" />
        <h1 className="text-center text-lg font-bold md:py-4 md:text-start md:text-5xl">
          Manage your projects
        </h1>
      </div>
      <h2 className="text-center md:text-start">
        Select a project or get started by adding a new one
      </h2>

      <div className="flex justify-center py-2 md:justify-start">
        <Button
          text="Create a new project"
          icon={<PlusIcon width="20" height="20" />}
          onClick={onStartAddProject}
          className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-size-200 transition-all duration-300 hover:bg-right"
        />
      </div>
    </div>
  );
}
