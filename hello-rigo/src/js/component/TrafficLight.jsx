import React from "react";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		console.log(this.state);

		let redExtraStuff = "";
		if (this.state.clickedLight == "red") redExtraStuff = "selected";

		let yellowExtraStuff = "";
		if (this.state.clickedLight == "yellow") yellowExtraStuff = "selected";

		let greenExtraStuff = "";
		if (this.state.clickedLight == "green") greenExtraStuff = "selected";

		return (
			<div id="container">
				<div id="hanging" />
				<div id="full-light">
					<div
						className={"red light " + redExtraStuff}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={"yellow light " + yellowExtraStuff}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className={"green light " + greenExtraStuff}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
