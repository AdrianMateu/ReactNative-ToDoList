import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { StatusBar } from "react-native";

export default class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<StatusBar barStyle="light-content" />
				<AppNavigator />
			</React.Fragment>
		);
	}
}
