import React, { Component } from "react";

class Counter extends React.Component {
	state = {
		count: 0,
		imageURL: "https://picsum.photos/200",
		tags: [],
	};

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no tags!</p>;
		return (
			<ul>
				{this.state.tags.map((tag) => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
	}

	handleIncrement = () => {
		console.log("Increment Clicked");
	};

	render() {
		return (
			<React.Fragment>
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={this.handleIncrement}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				<div>
					{this.state.tags.length === 0 && "Please create a new tag!"}
					{this.renderTags()}
				</div>
			</React.Fragment>
		);
	}

	getBadgeClasses() {
		let classes = "bg m-2 bg-";
		classes += this.state.count == 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;
