import { toDate, isToday, isThisWeek, subDays } from "date-fns";

export default class Project {
	constructor(name) {
		this.name = name;
		this.tasks = [];
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	setTasks(tasks) {
		this.tasks = tasks;
	}

	getTasks() {
		return this.tasks;
	}

	getSpecificTask(taskTitle) {
		return this.tasks.find((task) => task.getTitle() === taskTitle);
	}

	getTotalTasks() {
		return this.tasks.length;
	}

	getTodaysTasks() {
		return this.tasks.filter((task) => {
			const taskDate = new Date(task.getFormattedDate());
			return isToday(toDate(taskDate));
		});
	}

	getWeeklyTasks() {
		return this.tasks.filter((task) => {
			const taskDate = new Date(task.getFormattedDate());
			return isThisWeek(subDays(toDate(taskDate), 1));
		});
	}

	containsTask(taskTitle) {
		return this.tasks.some((task) => task.getTitle() === taskTitle);
	}

	addTask(newTask) {
		this.tasks.push(newTask);
	}

	deleteTask(taskTitle) {
		this.tasks = this.tasks.filter((task) => task.getTitle() !== taskTitle);
	}
}
