import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
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
	},
	text: {
		width: "80%",
		borderBottomWidth: 1,
		padding: 5
	}
});

class MainScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			newTodo: null
		};
	}

	componentDidMount = () => {
		this.setState({ todos: getTodos() });
	};

	render() {
		const { todos, newTodo } = this.state;
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.title} selectable>
					ToDo List App
				</Text>
				<TextInput
					placeholder="Nuevo ToDo"
					value={newTodo}
					onChangeText={todo => this.setState({ newTodo: todo })}
					style={styles.text}
					autoCapitalize="words"
					clearButtonMode="always"
					returnKeyType="done"
				/>
				<TodoList todos={todos} />
			</SafeAreaView>
		);
	}
}
export default MainScreen;
