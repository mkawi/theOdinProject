import React, { useState } from "react";
import Listing from "./Listing";
import Options from "./Options";
import "../styles/Experience.css";

function Experience() {
	const [jobs, setJobs] = useState({
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
	});

	function addWork() {
		setJobs({
			jobs: [
				...jobs,
				{
					role: "Course Type",
					company: "School/Organization",
					duration: "Duration",
					description: "An example of description text here.",
				},
			],
		});
	}

	function removeWork() {
		const newArr = [...jobs];
		newArr.pop();
		setJobs({
			jobs: newArr,
		});
	}

	return (
		<div className="experience-section">
			<h2>Work Experience</h2>
			{jobs.jobs.map((listing, index) => {
				return (
					<Listing
						id={index}
						role={listing.role}
						company={listing.company}
						duration={listing.duration}
						description={listing.description}
					/>
				);
			})}
			<Options add={addWork} remove={removeWork} />
		</div>
	);
}

export default Experience;
