import React, { Component } from "react";
import Listing from "./Listing";
import Options from "./Options";
import "../styles/Experience.css";

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: [
				{
					role: "Software Engineer",
					company: "Amazon",
					duration: "2018 - Present",
					description:
						"Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud. Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.",
				},
				{
					role: "Web Developer",
					company: "Google",
					duration: "2017 - 2018",
					description:
						"Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud. Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.",
				},
				{
					role: "Web Designer",
					company: "A Boring Company",
					duration: "2016 - 2017",
					description:
						"Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud. Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.",
				},
			],
		};
		this.addWork = this.addWork.bind(this);
		this.removeWork = this.removeWork.bind(this);
	}

	addWork(e) {
		this.setState({
			jobs: [
				...this.state.jobs,
				{
					role: "Course Type",
					company: "School/Organization",
					duration: "Duration",
					description: "An example of description text here.",
				},
			],
		});
	}

	removeWork(e) {
		const newArr = [...this.state.jobs];
		newArr.pop();
		this.setState({
			jobs: newArr,
		});
	}

	render() {
		return (
			<div className="experience-section">
				<h2>Work Experience</h2>
				{this.state.jobs.map((listing) => {
					return (
						<Listing
							role={listing.role}
							company={listing.company}
							duration={listing.duration}
							description={listing.description}
						/>
					);
				})}
				<Options add={this.addWork} remove={this.removeWork} />
			</div>
		);
	}
}

export default Experience;
