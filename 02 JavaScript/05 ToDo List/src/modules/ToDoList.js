import { compareAsc, toDate } from "date-fns";
import Task from "./Task";
import Project from "./Project";

export default class ToDoList {
	constructor() {
		this.projects = [];
		this.projects.push(new Project("Inbox"));
		this.projects.push(new Project("Today"));
		this.projects.push(new Project("This Week"));
	}

	getProjects() {
		return this.projects;
	}

	setProjects(projects) {
		this.projects = projects;
	}

	getProject(projectName) {
		return this.projects.find((project) => project.getName() === projectName);
	}

	addProject(newProject) {
		if (this.projects.find((project) => project.name === newProject.name)) {
			return;
		}
		this.projects.push(newProject);
	}

	containsProject(projectName) {
		return this.projects.some((project) => project.getName() === projectName);
	}

	deleteProject(projectName) {
		const projectToDelete = this.projects.find(
			(project) => project.getName() === projectName
		);
		this.projects.splice(this.projects.indexOf(projectToDelete), 1);
	}

	updateTodayProject() {
		this.getProject("Today").tasks = [];

		this.projects.forEach((project) => {
			if (project.getName() === "Today" || project.getName() === "This Week")
				return;

			const todayTasks = project.getTodaysTasks();
			todayTasks.forEach((task) => {
				const taskName = task.getTitle();
				this.getProject("Today").addTask(
					new Task(taskName, task.getDate(), task.getCompleted())
				);
			});
		});
	}

	updateWeekProject() {
		this.getProject("This Week").tasks = [];

		this.projects.forEach((project) => {
			if (project.getName() === "Today" || project.getName() === "This Week")
				return;

			const weekTasks = project.getWeeklyTasks();
			weekTasks.forEach((task) => {
				const taskName = task.getTitle();
				this.getProject("This Week").addTask(
					new Task(taskName, task.getDate(), task.getCompleted())
				);
			});
		});

		this.getProject("This Week").setTasks(
			this.getProject("This Week")
				.getTasks()
				.sort((taskA, taskB) =>
					compareAsc(
						toDate(new Date(taskA.getFormattedDate())),
						toDate(new Date(taskB.getFormattedDate()))
					)
				)
		);
	}
}
