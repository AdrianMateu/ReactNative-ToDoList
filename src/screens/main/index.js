import React, { Component } from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	ActivityIndicator
} from "react-native";
import TodoList from "todoList/src/components/TodoList/index";
import {
	getTodos,
	addTodo,
	updateTodo,
	deleteTodo
} from "todoList/src/data/todos";

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
	addRow: {
		flexDirection: "row",
		width: "80%"
	},
	text: {
		flex: 1,
		borderBottomWidth: 1,
		padding: 5
	},
	loading: {
		flex: 1
	}
});

class MainScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			newTodo: null,
			loading: true
		};
	}

	componentDidMount = async () => {
		const todos = await getTodos();
		this.setState({ todos: todos, loading: false });
	};

	handleAdd = () => {
		const { todos, newTodo } = this.state;
		const newList = addTodo(todos, { text: newTodo });
		this.setState({ todos: newList, newTodo: null });
	};

	handleUpdate = todo => {
		const { todos } = this.state;
		const newList = updateTodo(todos, todo);
		this.setState({ todos: newList });
	};

	handleDelte = todo => {
		const { todos } = this.state;
		const newList = deleteTodo(todos, todo);
		this.setState({ todos: newList });
	};

	render() {
		const { todos, newTodo, loading } = this.state;
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.title} selectable>
					ToDo List App
				</Text>
				<View style={styles.addRow}>
					<TextInput
						placeholder="Nuevo ToDo"
						value={newTodo}
						onChangeText={todo => this.setState({ newTodo: todo })}
						style={styles.text}
						autoCapitalize="words"
						clearButtonMode="always"
						returnKeyType="done"
					/>
					<Button onPress={this.handleAdd} title="Añadir" />
				</View>
				{loading && (
					<ActivityIndicator
						style={styles.loading}
						size="large"
						color="#0066ff"
					/>
				)}
				{!loading && (
					<TodoList
						todos={todos}
						onUpdate={this.handleUpdate}
						onDelete={this.handleDelte}
					/>
				)}
			</SafeAreaView>
		);
	}
}
export default MainScreen;
