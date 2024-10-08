import { useRef, useState } from "react";
import PROJECT_ICONS from "../constants/projectIcons";
import AddProjectIcon from "../icons/AddProjectIcon";
import Button from "./Button";
import Error from "./Error";
import Input from "./Input";
import ProjectIcon from "./ProjectIcon";

export default function NewProject({ onCancel, onAddProject }) {
  const [selectedIconId, setSelectedIconId] = useState(PROJECT_ICONS[0].id);
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const error = useRef();

  const defaultDate = new Date(Date.now() + 7 * 24 * 3600 * 1000);
  const formattedDate = defaultDate.toISOString().split("T")[0];

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle && enteredDescription && enteredDueDate) {
      onAddProject({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
        iconId: selectedIconId,
        tasks: [],
      });
    } else {
      error.current.show();
    }
  }

  function handleSelectIcon(iconId) {
    setSelectedIconId(iconId);
  }

  return (
    <div className="flex flex-col gap-5 px-4 py-6 md:w-[30rem]">
      <div className="flex flex-row items-center gap-5">
        <AddProjectIcon height="124" width="124" />
        <h1 className="text-center text-lg font-bold md:py-8 md:text-start md:text-5xl">
          Add a project
        </h1>
      </div>

      <Error
        ref={error}
        title="Unable to save"
        description="All required fields must be filled out before saving."
      />

      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold uppercase text-gray-300">
          ICON
        </label>
        <ul className="flex flex-row gap-4">
          {PROJECT_ICONS.map((projIcon) => (
            <li key={projIcon.id}>
              <ProjectIcon
                icon={<projIcon.icon />}
                onSelectIcon={handleSelectIcon}
                iconId={projIcon.id}
                selected={projIcon.id === selectedIconId}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input
          ref={dueDate}
          label="Due Date"
          type="date"
          defaultValue={formattedDate}
        />
      </div>
      <menu className="flex flex-row items-center justify-end gap-4">
        <li>
          <Button text="Cancel" className="border-0" onClick={onCancel} />
        </li>
        <li>
          <Button text="Save" onClick={handleSave} />
        </li>
      </menu>
    </div>
  );
}
