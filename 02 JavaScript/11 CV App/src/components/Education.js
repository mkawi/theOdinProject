import React, { useState } from "react";
import Listing from "./Listing";
import Options from "./Options";
import "../styles/Education.css";

function Education() {
	const [jobs, setJobs] = useState({
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
	});

	function addEd() {
		setJobs({
			jobs: [
				...jobs,
				{
					role: "Course Type",
					company: "School/Organization",
					duration: "Duration",
				},
			],
		});
	}

	function removeEd() {
		const newArr = [...jobs];
		newArr.pop();
		setJobs({
			jobs: newArr,
		});
	}

	return (
		<div className="education-section">
			<h2>Education</h2>
			{jobs.jobs.map((listing, index) => {
				return (
					<Listing
						id={index}
						role={listing.role}
						company={listing.company}
						duration={listing.duration}
					/>
				);
			})}
			<Options add={addEd} remove={removeEd} />
		</div>
	);
}

export default Education;
