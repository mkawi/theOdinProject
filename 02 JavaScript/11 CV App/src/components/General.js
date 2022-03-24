import React, { useState } from "react";
import "../styles/General.css";

function General() {
	const [info, setInfo] = useState({
		name: "Moe Kawi",
		title: "Software Engineer",
		phone: "+447888777666",
		email: "randomemail@gmail.com",
		address: "Birmingham, UK",
		summary:
			"Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.",
	});

	function changeName(e) {
		setInfo({
			name: e.target.textContent,
		});
	}
	function changeTitle(e) {
		setInfo({
			title: e.target.textContent,
		});
	}
	function changePhone(e) {
		setInfo({
			phone: e.target.textContent,
		});
	}
	function changeEmail(e) {
		setInfo({
			email: e.target.textContent,
		});
	}
	function changeAddress(e) {
		setInfo({
			address: e.target.textContent,
		});
	}
	function changeSummary(e) {
		setInfo({
			summary: e.target.textContent,
		});
	}

	return (
		<div className="general-section">
			<div className="cv-header">
				<div className="left-header">
					<h1 contentEditable="true" onBlur={changeName}>
						{info.name}
					</h1>
					<h2 contentEditable="true" onBlur={changeTitle}>
						{info.title}
					</h2>
				</div>
				<div className="right-header">
					<h4 contentEditable="true" onBlur={changePhone}>
						{info.phone}
					</h4>
					<h4 contentEditable="true" onBlur={changeEmail}>
						{info.email}
					</h4>
					<h4 contentEditable="true" onBlur={changeAddress}>
						{info.address}
					</h4>
				</div>
			</div>
			<hr />
			<p contentEditable="true" onBlur={changeSummary}>
				{info.summary}
			</p>
		</div>
	);
}

export default General;
