import React, { Component } from "react";
import "../styles/General.css";

class General extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Moe Kawi",
			title: "Software Engineer",
			phone: "+447888777666",
			email: "randomemail@gmail.com",
			address: "Birmingham, UK",
			summary:
				"Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.",
		};

		this.changeName = this.changeName.bind(this);
		this.changeTitle = this.changeTitle.bind(this);
		this.changePhone = this.changePhone.bind(this);
		this.changeEmail = this.changeEmail.bind(this);
		this.changeAddress = this.changeAddress.bind(this);
		this.changeSummary = this.changeSummary.bind(this);
	}

	changeName(e) {
		this.setState({
			name: e.target.textContent,
		});
	}
	changeTitle(e) {
		this.setState({
			title: e.target.textContent,
		});
	}
	changePhone(e) {
		this.setState({
			phone: e.target.textContent,
		});
	}
	changeEmail(e) {
		this.setState({
			email: e.target.textContent,
		});
	}
	changeAddress(e) {
		this.setState({
			address: e.target.textContent,
		});
	}
	changeSummary(e) {
		this.setState({
			summary: e.target.textContent,
		});
	}

	render() {
		return (
			<div className="general-section">
				<div className="cv-header">
					<div className="left-header">
						<h1 contentEditable="true" onBlur={this.changeName}>
							{this.state.name}
						</h1>
						<h2 contentEditable="true" onBlur={this.changeTitle}>
							{this.state.title}
						</h2>
					</div>
					<div className="right-header">
						<h4 contentEditable="true" onBlur={this.changePhone}>
							{this.state.phone}
						</h4>
						<h4 contentEditable="true" onBlur={this.changeEmail}>
							{this.state.email}
						</h4>
						<h4 contentEditable="true" onBlur={this.changeAddress}>
							{this.state.address}
						</h4>
					</div>
				</div>
				<hr />
				<p contentEditable="true" onBlur={this.changeSummary}>
					{this.state.summary}
				</p>
			</div>
		);
	}
}

export default General;
