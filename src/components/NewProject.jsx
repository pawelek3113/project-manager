import { useRef } from "react";
import AddProject from "../assets/add_project.svg?react";
import Button from "./Button";
import Input from "./Input";
import SVGContainer from "./SVGContainer";

export default function NewProject({ onCancel, onAddProject }) {
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	function handleSave() {
		const enteredTitle = title.current.value;
		const enteredDescription = description.current.value;
		const enteredDueDate = dueDate.current.value;

		onAddProject({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	}

	return (
		<div className="px-4 py-6 flex flex-col gap-5 md:w-[30rem]">
			<SVGContainer SVG={<AddProject className="size-44" />} />
			<h1 className="md:py-8 text-center md:text-start md:text-5xl text-lg font-bold">
				Add a project
			</h1>
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
