import { useRef, useState } from "react";
import AddProjectIcon from "../icons/AddProjectIcon";
import PROJECT_ICONS from "../constants/projectIcons";
import Button from "./Button";
import Error from "./Error";
import Input from "./Input";
import ProjectIcon from "./ProjectIcon";

export default function NewProject({ onCancel, onAddProject }) {
	const [selectedIconId, setSelectedIconId] = useState(PROJECT_ICONS[0].id);
	const [error, setError] = useState(false);
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

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
			});
		} else {
			setError(true);
		}
	}

	function handleSelectIcon(iconId) {
		setSelectedIconId(iconId);
	}

	return (
		<div className="px-4 py-6 flex flex-col gap-5 md:w-[30rem]">
			<div className="flex flex-row items-center gap-5">
				<AddProjectIcon height="124" width="124" />
				<h1 className="md:py-8 text-center md:text-start md:text-5xl text-lg font-bold">
					Add a project
				</h1>
			</div>
			{error && (
				<Error
					title="Cannot save"
					description="Please enter correct data"
				/>
			)}
			<div className="flex flex-col gap-3">
				<label className="uppercase text-sm font-bold text-gray-300">
					ICON
				</label>
				<ul className="flex flex-row gap-4">
					{PROJECT_ICONS.map((projIcon) => (
						<li key={projIcon.id}>
							<ProjectIcon
								icon={<projIcon.icon/>}
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
				<Input ref={dueDate} label="Due Date" type="date" />
			</div>
			<menu className="flex flex-row gap-4 justify-end items-center">
				<li>
					<Button
						text="Cancel"
						className="border-0"
						onClick={onCancel}
					/>
				</li>
				<li>
					<Button text="Save" onClick={handleSave} />
				</li>
			</menu>
		</div>
	);
}
