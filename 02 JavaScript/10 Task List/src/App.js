import React, { Component, useDebugValue } from "react";
import Overview from "./components/Overview";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: [],
			query: "",
		};

		this.updateQuery = this.updateQuery.bind(this);
		this.updateTasks = this.updateTasks.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.onEnterPress = this.onEnterPress.bind(this);
	}

	updateQuery(e) {
		this.setState({
			query: e.target.value,
		});
	}

	updateTasks() {
		this.setState({
			tasks: this.state.tasks.concat(this.state.query),
			query: "",
		});
	}

	onEnterPress(e) {
		if (e.key === "Enter") {
			this.updateTasks();
		}
	}

	deleteTask(e) {
		const value = e.target.parentNode.firstChild.childNodes[2].nodeValue;
		this.setState({
			tasks: this.state.tasks.filter((task) => task !== value),
		});
	}

	render() {
		return (
			<div>
				<h2>Task List</h2>
				<input
					type="text"
					onChange={this.updateQuery}
					onKeyPress={this.onEnterPress}
					value={this.state.query}
				/>
				<button onClick={this.updateTasks}>Submit</button>
				<Overview tasks={this.state.tasks} onClick={this.deleteTask} />
			</div>
		);
	}
}

export default App;
