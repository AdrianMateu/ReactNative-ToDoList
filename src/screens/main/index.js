import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TodoList from "todoList/src/components/TodoList/index";
import { getTodos } from "todoList/src/data/todos";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		marginTop: 30
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		margin: 4
	}
});

class MainScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		};
	}

	componentDidMount = () => {
		this.setState({ todos: getTodos() });
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.title} selectable>
					ToDo List App
				</Text>
				<TodoList todos={this.state.todos} />
			</SafeAreaView>
		);
	}
}
export default MainScreen;
