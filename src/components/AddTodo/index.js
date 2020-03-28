import React, { Component } from "react";
import {
	StyleSheet,
	Modal,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Button,
	Picker
} from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "flex-end",
		flexDirection: "row"
	},
	content: {
		padding: 20,
		paddingBottom: 30,
		flex: 1,
		backgroundColor: "#ffffff",
		shadowOffset: { width: 0, height: -3 },
		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 30
		// width: 200
	},
	text: {
		borderBottomWidth: 1,
		padding: 5
	},
	closeIcon: {
		color: "#fff"
	},
	buttonRow: {
		flexDirection: "row",
		justifyContent: "space-around",
		paddingBottom: 20
	},
	block: {
		margin: 10
	}
});
const initialState = {
	text: "",
	description: "",
	priority: 0
};

const priorities = ["Urgente", "Importante", "Normal", "No importante"];
export default class AddTodo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			...initialState
		};
	}

	addTodo = () => {
		const { onAddTodo, onCloseModal } = this.props;
		const { text, description, priority } = this.state;
		onAddTodo({ text, description, priority });
		// reset initialState for next Add
		this.setState(initialState);
		onCloseModal();
	};

	render() {
		const { visible, onCloseModal } = this.props;
		const { text, priority, description } = this.state;
		return (
			<Modal animationType="slide" transparent={true} visible={visible}>
				<View style={styles.container}>
					<View style={styles.content}>
						<View style={styles.block}>
							<Text>Título</Text>
							<TextInput
								style={styles.text}
								value={text}
								onChangeText={text => this.setState({ text })}
								clearButtonMode="always"
							/>
						</View>
						<View style={styles.block}>
							<Text>Descripción</Text>
							<TextInput
								style={styles.text}
								value={description}
								onChangeText={text =>
									this.setState({ description })
								}
								clearButtonMode="always"
							/>
						</View>
						<View style={styles.block}>
							<Text>Prioridad</Text>
							<Picker
								selectedValue={priority}
								onValueChange={priority =>
									this.setState({ priority })
								}
							>
								{priorities.map((item, idx) => (
									<Picker.Item label={item} value={idx} />
								))}
							</Picker>
						</View>
						<View style={styles.buttonRow}>
							<Button
								title="Cerrar"
								onPress={onCloseModal}
								color="#ff0000"
							/>
							<Button title="Añadir" onPress={this.addTodo} />
						</View>
					</View>
				</View>
			</Modal>
		);
	}
}
