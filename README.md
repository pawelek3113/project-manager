# Project Manager

Project Manager is a web application designed to help users manage their projects and tasks efficiently. This application allows users to create, edit, and delete projects, as well as add and update tasks within those projects.

## Features

- **Project Management**: Create, edit, and delete projects.
- **Task Management**: Add and update tasks within projects.
- **Sidebar Navigation**: Easily navigate between different projects using the sidebar.
- **Project Details**: View detailed information about each project, including tasks and due dates.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/pawelek3113/project-manager.git
    cd project-manager
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

The application should now be running on `http://localhost:5173`.

## Usage

### Creating a New Project

1. Click on the "Add Project" button in the sidebar.
2. Fill out the project details, including title, description, due date, and icon.
3. Click "Save" to add the project.

### Editing a Project

1. Select a project from the sidebar.
2. Click on the "Edit" button.
3. Update the project details and click "Save" to apply the changes.

### Deleting a Project

1. Select a project from the sidebar.
2. Click on the "Delete" button.
3. Confirm the deletion in the modal that appears.

### Adding Tasks to a Project

1. Select a project from the sidebar.
2. Click on the "Add Task" button.
3. Fill out the task details and click "Save" to add the task.

### Updating Tasks

1. Select a project from the sidebar.
2. Click on the task you want to update.
3. Update the task details and click "Save" to apply the changes.

## Components

### App.jsx

- **State Management**: Manages the state of projects, selected project, sidebar visibility, and editing modes.
- **Handlers**: Contains functions to handle adding, editing, deleting projects, and updating tasks.

### Sidebar.jsx

- **Project List**: Displays a list of projects in the sidebar.
- **Project Selection**: Allows users to select a project to view its details.

### NewProject.jsx

- **Form**: Provides a form to create a new project.
- **Validation**: Ensures all required fields are filled before saving.

### Project.jsx

- **Project Details**: Displays detailed information about the selected project.
- **Task Management**: Allows users to add and update tasks within the project.
- **Deletion Modal**: Confirms project deletion.

## Dependencies

- **React**: [https://reactjs.org/](https://reactjs.org/) JavaScript library for building user interfaces.
- **uuid**: [https://www.npmjs.com/package/uuid](https://www.npmjs.com/package/uuid) Library to generate unique IDs for projects and tasks.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## Acknowledgements

- Thanks to all the contributors who have helped in the development of this project.

