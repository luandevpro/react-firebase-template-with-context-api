import React, { Component } from "react";
import { Provider } from "./contexts";

export default class AppContext extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return <Provider value={this.state}>{this.props.children}</Provider>;
	}
}
