import React, { Fragment } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
	listItem: {
		borderWidth: 1,
		margin: 5,
		width: "80%",
		flexDirection: "row",
		alignItems: "center"
	},
	text: {
		padding: 5,
		fontWeight: "bold"
	},
	textDone: {
		color: "#aaa",
		textDecorationLine: "line-through",
		fontWeight: "normal"
	}
});

const TodoList = ({ todos, onUpdate }) => (
	<Fragment>
		{todos.map(todo => (
			<TouchableOpacity
				style={styles.listItem}
				key={todo.text}
				onPress={() => onUpdate({ ...todo, done: !todo.done })}
			>
				<Text style={styles.text}>-</Text>
				<Text style={[styles.text, todo.done && styles.textDone]}>
					{todo.text}
				</Text>
			</TouchableOpacity>
		))}
	</Fragment>
);

export default TodoList;
