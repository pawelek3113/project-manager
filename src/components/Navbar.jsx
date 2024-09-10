import PlusIcon from "../icons/PlusIcon";
import Button from "./Button";
export default function Navbar({ onStartAddProject }) {
  return (
    <nav className="flex flex-row items-center justify-center gap-6 bg-slate-900 p-4 md:hidden">
      <h2 className="text-nowrap text-lg font-bold">Project Manager</h2>
      <Button
        icon={<PlusIcon width="20" height="20" />}
        className="size-8"
        onClick={onStartAddProject}
      />
    </nav>
  );
}
