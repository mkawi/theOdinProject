export default class Task {
	constructor(title, dueDate = "No due date", completed = false) {
		this.title = title;
		this.dueDate = dueDate;
		this.completed = completed;
	}

	getTitle() {
		return this.title;
	}

	setTitle(title) {
		this.title = title;
	}

	getDate() {
		return this.dueDate;
	}

	getFormattedDate() {
		const day = this.dueDate.split("/")[0];
		const month = this.dueDate.split("/")[1];
		const year = this.dueDate.split("/")[2];
		return `${month}/${day}/${year}`;
	}

	setDate(date) {
		this.dueDate = date;
	}

	getCompleted() {
		return this.completed;
	}

	setCompleted(completed) {
		this.completed = completed;
	}
}
