import React, { Component } from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TextInput,
	ActivityIndicator,
	Alert
} from "react-native";
import TodoList from "todoList/src/components/TodoList/index";
import AddTodo from "todoList/src/components/AddTodo/index";
import FAB from "todoList/src/components/FAB/index";
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
			loading: true,
			addModalVisible: false
		};
	}

	componentDidMount = async () => {
		const todos = await getTodos();
		this.setState({ todos: todos, loading: false });
	};

	handleAdd = newTodo => {
		const { todos } = this.state;
		const newList = addTodo(todos, newTodo);
		this.setState({ todos: newList, newTodo: null });
	};

	handleUpdate = todo => {
		const { todos } = this.state;
		const newList = updateTodo(todos, todo);
		this.setState({ todos: newList });
	};

	handleDelte = todo => {
		Alert.alert("¿Quere eliminar tarea?", todo.text, [
			{
				text: "Cancelar",
				style: "cancel"
			},
			{
				text: "OK",
				onPress: () => {
					const { todos } = this.state;
					const newList = deleteTodo(todos, todo);
					this.setState({ todos: newList });
				}
			}
		]);
		const { todos } = this.state;
		const newList = deleteTodo(todos, todo);
		this.setState({ todos: newList });
	};

	toggleModal = () => {
		this.setState({ addModalVisible: !this.state.addModalVisible });
	};

	render() {
		const { todos, newTodo, loading, addModalVisible } = this.state;
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.title} selectable>
					ToDo List App
				</Text>
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
				<FAB
					text="+"
					fabStyle={{ backgroundColor: "#0066ff" }}
					textStyle={{ color: "#fff" }}
					onPress={this.toggleModal}
				/>
				<AddTodo
					visible={addModalVisible}
					onCloseModal={this.toggleModal}
					onAddTodo={this.handleAdd}
				/>
			</SafeAreaView>
		);
	}
}
export default MainScreen;
