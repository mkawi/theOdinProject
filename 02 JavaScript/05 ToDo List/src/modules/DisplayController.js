import format from "date-fns/format";
import Storage from "./Storage";
import Project from "./Project";
import Task from "./Task";

export default class DisplayController {
	// ============================================
	// Loading initial State: Content and Listeners
	// ============================================

	static loadApp() {
		DisplayController.loadProjects();
		DisplayController.addProjectListeners();
		DisplayController.openProject("Inbox", document.getElementById("inbox"));
		DisplayController.updateCounter();
	}

	static loadProjects() {
		Storage.getTodoList()
			.getProjects()
			.forEach((project) => {
				if (
					project.name !== "Inbox" &&
					project.name !== "Today" &&
					project.name !== "This Week"
				) {
					DisplayController.createProject(project.name);
				}
			});
		DisplayController.addProjectPopupListeners();
	}

	static loadTasks(projectName) {
		Storage.getTodoList()
			.getProject(projectName)
			.getTasks()
			.forEach((task) =>
				DisplayController.createTask(task.title, task.dueDate)
			);

		if (projectName !== "Today" && projectName !== "This Week") {
			DisplayController.addTaskBtnListeners();
		}
		DisplayController.updateCounter();
	}

	static loadProjectContent(projectName) {
		const projectContainer = document.querySelector(".todo-container");
		projectContainer.innerHTML = `
			<div class="todo-header">
                <h2 id="project-name">${projectName}</h2>
                <h4><i class="fas fa-angle-down"></i> Due Date</h4>
            </div>
			<div class="todo-list"></div>`;

		if (projectName !== "Today" && projectName !== "This Week") {
			projectContainer.innerHTML += `
				<button class="add-todo" id="add-todo">
                    <i class="far fa-plus-square"></i>
                    <span class="todo-action">Add Task</span>
                </button>

				<div class="add-task-popup inactive" id="add-task-popup">
					<div class="popup-inputs">
						<input
							class="input-add-task-popup"
							id="input-add-task-popup"
							type="text"
							placeholder="Enter task name"
						/>
						<input
							class="input-add-date-popup"
							id="input-add-date-popup"
							type="date"
						/>
					</div>
					<div class="add-task-popup-buttons">
						<button class="button-add-task-popup" id="button-add-task-popup">
						Add
						</button>
						<button
						class="button-cancel-task-popup"
						id="button-cancel-task-popup"
						>
						Cancel
						</button>
					</div>
				</div>`;
		}

		DisplayController.loadTasks(projectName);
		DisplayController.updateCounter();
	}

	static updateCounter() {
		document.querySelectorAll(".button-project").forEach((button) => {
			if (button.id === "add-project") return;
			const projectName = button.children[0].children[1].textContent;
			button.children[1].textContent = Storage.getTodoList()
				.getProject(projectName)
				.getTotalTasks();
		});
	}

	// ============================================
	// Project Management
	// ============================================

	static openProject(projectName, projectButton) {
		const projectButtons = document.querySelectorAll(".button-project");

		projectButtons.forEach((button) => button.classList.remove("active"));
		projectButton.classList.add("active");
		DisplayController.closeAddProject();
		DisplayController.loadProjectContent(projectName);
		DisplayController.updateCounter();
	}

	static openInboxTasks() {
		DisplayController.openProject("Inbox", this);
	}

	static openTodayTasks() {
		Storage.updateTodayProject();
		DisplayController.openProject("Today", this);
	}

	static openWeekTasks() {
		Storage.updateWeekProject();
		DisplayController.openProject("This Week", this);
	}

	static createProject(projectName) {
		const userProjects = document.querySelector(".sub-category");
		userProjects.innerHTML += ` 
            <button class="button-project" id="${projectName}" data-project-button>
                <div class="wrapper">
                    <i class="fas fa-tasks"></i>
                    <h4>${projectName}</h4>
                </div>
                <span class="counter active">${Storage.getTodoList()
									.getProject(projectName)
									.getTotalTasks()}</span>
                <i class="fas fa-times inactive"></i>
            </button>`;

		DisplayController.addProjectListeners();
	}

	static deleteProject(projectName, button) {
		if (button.classList.contains("active")) {
			DisplayController.clearProjectPreview();
		}
		Storage.deleteProject(projectName);
		DisplayController.clearProjects();
		DisplayController.loadProjects();
		DisplayController.updateCounter();
	}

	static addProject() {
		const addProjectInput = document.getElementById("input-add-project");
		const projectName = addProjectInput.value;
		if (projectName === "") {
			alert("Project name can't be empty");
			return;
		}

		if (Storage.getTodoList().containsProject(projectName)) {
			addProjectInput.value = "";
			alert("Project names must be different");
			return;
		}

		Storage.addProject(new Project(projectName));
		DisplayController.createProject(projectName);
		DisplayController.closeAddProject();
	}

	static clearProjects() {
		const projectsList = document.querySelector(".sub-category");
		projectsList.textContent = "";
	}

	static clearProjectPreview() {
		const projectPreview = document.querySelector(".todo-container");
		projectPreview.textContent = "";
		DisplayController.openProject("Inbox", document.querySelector("#inbox"));
	}

	static addProjectListeners() {
		// Existing Projects
		const inboxBtn = document.getElementById("inbox");
		const todayBtn = document.getElementById("today");
		const weekBtn = document.getElementById("week");
		const projectBtns = document.querySelectorAll("[data-project-button]");

		inboxBtn.addEventListener("click", DisplayController.openInboxTasks);
		todayBtn.addEventListener("click", DisplayController.openTodayTasks);
		weekBtn.addEventListener("click", DisplayController.openWeekTasks);
		projectBtns.forEach((project) =>
			project.addEventListener("click", DisplayController.clickProjectButton)
		);
		projectBtns.forEach((project) =>
			project.addEventListener("mouseover", DisplayController.mouseOverProject)
		);
		projectBtns.forEach((project) =>
			project.addEventListener("mouseout", DisplayController.mouseOutProject)
		);
	}

	static addProjectPopupListeners() {
		// Add Project Btn
		const addProject = document.getElementById("add-project");
		const addProjectInput = document.getElementById("input-add-project");
		const addProjectButton = document.getElementById("button-add-project");
		const cancelProjectButton = document.getElementById(
			"button-cancel-project"
		);

		addProject.addEventListener("click", DisplayController.openAddProject);
		addProjectInput.addEventListener(
			"keypress",
			DisplayController.handleAddProjectInput
		);
		addProjectButton.addEventListener("click", DisplayController.addProject);
		cancelProjectButton.addEventListener(
			"click",
			DisplayController.closeAddProject
		);
	}

	static clickProjectButton(e) {
		const projectName = this.children[0].children[1].textContent;
		if (e.target.classList.contains("fa-times")) {
			DisplayController.deleteProject(projectName, this);
			return;
		}

		DisplayController.openProject(projectName, this);
	}

	static mouseOverProject() {
		const counter = this.children[1];
		const removeIcon = this.children[2];

		counter.classList.remove("active");
		counter.classList.add("inactive");
		removeIcon.classList.remove("inactive");
		removeIcon.classList.add("active");
	}

	static mouseOutProject() {
		const counter = this.children[1];
		const removeIcon = this.children[2];

		counter.classList.remove("inactive");
		counter.classList.add("active");
		removeIcon.classList.remove("active");
		removeIcon.classList.add("inactive");
	}

	static handleAddProjectInput(e) {
		if (e.key === "Enter") DisplayController.addProject();
	}

	static openAddProject() {
		const addProjectPopup = document.getElementById("add-project-popup");
		const addProjectButton = document.getElementById("add-project");
		DisplayController.closeAllPopups();
		addProjectPopup.classList.remove("inactive");
		addProjectButton.classList.add("inactive");
	}

	static closeAddProject() {
		const addProjectPopup = document.getElementById("add-project-popup");
		const addProjectButton = document.getElementById("add-project");
		const addProjectPopupInput = document.getElementById("input-add-project");

		addProjectPopup.classList.add("inactive");
		addProjectButton.classList.remove("inactive");
		addProjectPopupInput.value = "";
	}

	static closeAllPopups() {
		DisplayController.closeAddProject();
		if (document.getElementById("add-task-popup")) {
			DisplayController.closeAddTaskPopup();
		}
		if (
			document.getElementsByClassName("todo-list") &&
			document.getElementsByClassName("todo-list").innerHTML !== ""
		) {
			DisplayController.closeAllInputs();
		}
	}

	static closeAllInputs() {
		const taskButtons = document.querySelectorAll(".todo");

		taskButtons.forEach((button) => {
			DisplayController.closeEditTaskInputs(button);
		});
	}

	// ============================================
	// Tasks Management
	// ============================================

	static createTask(name, dueDate) {
		const projectName = document.getElementById("project-name").textContent;
		const tasksList = document.querySelector(".todo-list");
		let date, formattedDate;

		if (dueDate === "") {
			formattedDate = "";
		} else {
			date = dueDate.split("/");
			formattedDate = format(
				new Date(Number(date[2]), Number(date[1] - 1), Number(date[0])),
				"yyyy-MM-dd"
			);
		}

		tasksList.innerHTML += `
			<div class="todo ${
				Storage.getTodoList()
					.getProject(projectName)
					.getSpecificTask(name)
					.getCompleted()
					? "complete"
					: ""
			}">
				<div class="left-section">
					<input type="checkbox" ${
						Storage.getTodoList()
							.getProject(projectName)
							.getSpecificTask(name)
							.getCompleted()
							? "checked"
							: ""
					}>
					<span class="todo-action">${name}</span>
					<input type="text" class="input-task-name inactive" data-input-task-name placeholder="${name}">
				</div>
				<div class="right-section">
					<span class="todo-date">${dueDate ? dueDate : "No due date"}</span>
					<input type="date" class="input-due-date inactive" data-input-due-date ${
						formattedDate ? `value=${formattedDate}` : ""
					}>
					<i class="fas fa-edit"></i>
					<i class="far fa-trash-alt"></i>
				</div>
            </div>
		`;
		DisplayController.addTaskListeners();
		DisplayController.updateCounter();
	}

	static addTask() {
		const projectName = document.getElementById("project-name").textContent;
		const addTaskPopupInput = document.getElementById("input-add-task-popup");
		const addDatePopupInput = document.getElementById("input-add-date-popup");
		const taskName = addTaskPopupInput.value;
		const dueDate = addDatePopupInput.value
			.replace(/-/g, "/")
			.split("/")
			.reverse()
			.join("/");

		if (taskName === "") {
			alert("Task name can't be empty");
			return;
		}
		if (Storage.getTodoList().getProject(projectName).containsTask(taskName)) {
			alert("Task names must be different");
			addTaskPopupInput.value = "";
			return;
		}

		Storage.addTask(projectName, new Task(taskName, dueDate));
		DisplayController.createTask(taskName, dueDate);
		DisplayController.closeAddTaskPopup();
		DisplayController.updateCounter();
	}

	static deleteTask(taskButton) {
		const projectName = document.getElementById("project-name").textContent;
		const taskName = taskButton.children[0].children[1].textContent;

		if (projectName === "Today" || projectName === "This Week") {
			const mainProjectName = taskName.split("(")[1].split(")")[0];
			Storage.deleteTask(mainProjectName, taskName);
		}
		Storage.deleteTask(projectName, taskName);
		DisplayController.clearTasks();
		DisplayController.loadTasks(projectName);
		DisplayController.updateCounter();
	}

	static clearTasks() {
		const tasksList = document.querySelector(".todo-list");
		tasksList.textContent = "";
	}

	static addTaskBtnListeners() {
		const addTaskButton = document.getElementById("add-todo");
		const addTaskPopupButton = document.getElementById("button-add-task-popup");
		const cancelTaskPopupButton = document.getElementById(
			"button-cancel-task-popup"
		);
		const addTaskPopupInput = document.getElementById("input-add-task-popup");
		const addDatePopupInput = document.getElementById("input-add-date-popup");

		addTaskButton.addEventListener("click", DisplayController.openAddTaskPopup);
		addTaskPopupButton.addEventListener("click", DisplayController.addTask);
		cancelTaskPopupButton.addEventListener(
			"click",
			DisplayController.closeAddTaskPopup
		);
		addTaskPopupInput.addEventListener(
			"keypress",
			DisplayController.handleAddTaskPopupInput
		);
		addDatePopupInput.addEventListener(
			"keypress",
			DisplayController.handleAddTaskPopupInput
		);
	}

	static handleAddTaskPopupInput(e) {
		if (e.key === "Enter") DisplayController.addTask();
	}

	static openAddTaskPopup() {
		const addTaskPopup = document.getElementById("add-task-popup");
		const addTaskButton = document.getElementById("add-todo");

		DisplayController.closeAllPopups();
		addTaskPopup.classList.remove("inactive");
		addTaskButton.classList.add("inactive");
	}

	static closeAddTaskPopup() {
		const addTaskPopup = document.getElementById("add-task-popup");
		const addTaskButton = document.getElementById("add-todo");
		const addTaskPopupInput = document.getElementById("input-add-task-popup");
		const addDatePopupInput = document.getElementById("input-add-date-popup");

		addTaskPopup.classList.add("inactive");
		addTaskButton.classList.remove("inactive");
		addTaskPopupInput.value = "";
		addDatePopupInput.value = "";
	}

	static addTaskListeners() {
		const tasks = document.querySelectorAll(".todo");
		const taskNameInputs = document.querySelectorAll("[data-input-task-name");
		const dueDateInputs = document.querySelectorAll("[data-input-due-date");

		tasks.forEach((taskButton) =>
			taskButton.addEventListener("click", DisplayController.handleTaskButton)
		);
		taskNameInputs.forEach((taskNameInput) =>
			taskNameInput.addEventListener("keypress", DisplayController.renameTask)
		);
		dueDateInputs.forEach((dueDateInput) =>
			dueDateInput.addEventListener("change", DisplayController.setTaskDate)
		);
	}

	static handleTaskButton(e) {
		if (e.target.type === "checkbox") {
			DisplayController.setTaskCompleted(this);
			return;
		}
		if (e.target.classList.contains("fa-trash-alt")) {
			DisplayController.deleteTask(this);
			return;
		}
		if (e.target.classList.contains("fa-edit")) {
			DisplayController.openEditTaskInputs(this);
			return;
		}
	}

	static setTaskCompleted(taskButton) {
		const projectName = document.getElementById("project-name").textContent;
		const taskName = taskButton.children[0].children[1].textContent;

		if (!taskButton.classList.contains("complete")) {
			taskButton.classList.add("complete");
			Storage.setTaskCompleted(projectName, taskName, true);

			if (
				Storage.getTodoList().getProject("Today").containsTask(taskName) &&
				Storage.getTodoList().getProject("This Week").containsTask(taskName)
			) {
				Storage.setTaskCompleted("Today", taskName, true);
				Storage.setTaskCompleted("This Week", taskName, true);
				Storage.updateTodayProject();
				Storage.updateWeekProject();
			} else if (
				Storage.getTodoList().getProject("Today").containsTask(taskName)
			) {
				Storage.setTaskCompleted("Today", taskName, true);
				Storage.updateTodayProject();
			} else if (
				Storage.getTodoList().getProject("This Week").containsTask(taskName)
			) {
				Storage.setTaskCompleted("This Week", taskName, true);
				Storage.updateWeekProject();
			}
		} else {
			taskButton.classList.remove("complete");
			Storage.setTaskCompleted(projectName, taskName, false);

			if (
				Storage.getTodoList().getProject("Today").containsTask(taskName) &&
				Storage.getTodoList().getProject("This Week").containsTask(taskName)
			) {
				Storage.setTaskCompleted("Today", taskName, false);
				Storage.setTaskCompleted("This Week", taskName, false);
				Storage.updateTodayProject();
				Storage.updateWeekProject();
			} else if (
				Storage.getTodoList().getProject("Today").containsTask(taskName)
			) {
				Storage.setTaskCompleted("Today", taskName, false);
				Storage.updateTodayProject();
			} else if (
				Storage.getTodoList().getProject("This Week").containsTask(taskName)
			) {
				Storage.setTaskCompleted("This Week", taskName, false);
				Storage.updateWeekProject();
			}
		}
	}

	static openEditTaskInputs(taskButton) {
		const taskNamePara = taskButton.children[0].children[1];
		let taskName = taskNamePara.textContent;
		const taskNameInput = taskButton.children[0].children[2];
		// Date Inputs
		const dueDate = taskButton.children[1].children[0];
		const dueDateInput = taskButton.children[1].children[1];

		DisplayController.closeAllPopups();
		taskNamePara.classList.add("inactive");
		taskNameInput.classList.remove("inactive");
		dueDate.classList.add("inactive");
		dueDateInput.classList.remove("inactive");
	}

	static closeEditTaskInputs(taskButton) {
		const taskNamePara = taskButton.children[0].children[1];
		let taskName = taskNamePara.textContent;
		const taskNameInput = taskButton.children[0].children[2];

		taskNamePara.classList.remove("inactive");
		taskNameInput.classList.add("inactive");
		// Date Inputs
		const dueDate = taskButton.children[1].children[0];
		const dueDateInput = taskButton.children[1].children[1];

		dueDate.classList.remove("inactive");
		dueDateInput.classList.add("inactive");
	}

	static renameTask(e) {
		if (e.key !== "Enter") return;

		const projectName = document.getElementById("project-name").textContent;
		const taskName = this.previousElementSibling.textContent;
		const newTaskName = this.value;

		if (newTaskName === "") {
			alert("Task name can't be empty");
			return;
		}

		if (
			Storage.getTodoList().getProject(projectName).containsTask(newTaskName)
		) {
			this.value = "";
			alert("Task names must be different");
			return;
		}

		if (projectName === "Today" || projectName === "This Week") {
			const mainProjectName = taskName.split("(")[1].split(")")[0];
			const mainTaskName = taskName.split(" ")[0];
			Storage.renameTask(
				projectName,
				taskName,
				`${newTaskName} (${mainProjectName})`
			);
			Storage.renameTask(mainProjectName, mainTaskName, newTaskName);
		} else {
			Storage.renameTask(projectName, taskName, newTaskName);
		}
		DisplayController.clearTasks();
		DisplayController.loadTasks(projectName);
		DisplayController.closeEditTaskInputs(this.parentNode.parentNode);
		DisplayController.updateCounter();
	}

	static setTaskDate() {
		const taskButton = this.parentNode.parentNode;
		const projectName = document.getElementById("project-name").textContent;
		const taskName = taskButton.children[0].children[1].textContent;
		const newDueDate = format(new Date(this.value), "dd/MM/yyyy");

		DisplayController.closeAllPopups();
		if (projectName === "Today" || projectName === "This Week") {
			const mainProjectName = taskName.split("(")[1].split(")")[0];
			const mainTaskName = taskName.split(" (")[0];
			Storage.setTaskDate(projectName, taskName, newDueDate);
			Storage.setTaskDate(mainProjectName, mainTaskName, newDueDate);
			if (projectName === "Today") {
				Storage.updateTodayProject();
			} else {
				Storage.updateWeekProject();
			}
		} else {
			Storage.setTaskDate(projectName, taskName, newDueDate);
		}
		DisplayController.clearTasks();
		DisplayController.loadTasks(projectName);
		DisplayController.closeEditTaskInputs(taskButton);
		DisplayController.updateCounter();
	}
}
