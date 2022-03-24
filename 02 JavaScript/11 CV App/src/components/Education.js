import React, { Component } from "react";
import Listing from "./Listing";
import Options from "./Options";
import "../styles/Education.css";

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: [
				{
					role: "BSc Computer Science",
					company: "University Of Birmingham",
					duration: "2014 - 2017",
				},
				{
					role: "CS50: Introduction to Computer Science",
					company: "Harvard EDx",
					duration: "2013 - 2014",
				},
				{
					role: "Web Development Bootcamp",
					company: "School Of Code",
					duration: "2017 - 2017",
				},
			],
		};
		this.addEd = this.addEd.bind(this);
		this.removeEd = this.removeEd.bind(this);
	}

	addEd(e) {
		this.setState({
			jobs: [
				...this.state.jobs,
				{
					role: "Course Type",
					company: "School/Organization",
					duration: "Duration",
				},
			],
		});
	}

	removeEd(e) {
		const newArr = [...this.state.jobs];
		newArr.pop();
		this.setState({
			jobs: newArr,
		});
	}

	render() {
		return (
			<div className="education-section">
				<h2>Education</h2>
				{this.state.jobs.map((listing) => {
					return (
						<Listing
							role={listing.role}
							company={listing.company}
							duration={listing.duration}
						/>
					);
				})}
				<Options add={this.addEd} remove={this.removeEd} />
			</div>
		);
	}
}

export default Education;
