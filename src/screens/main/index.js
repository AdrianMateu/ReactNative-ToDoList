import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from "todoList/src/components/TodoList/index"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const todos = [
    { text: "Tarea 1", done: false },
    { text: "Tarea 2", done: false },
    { text: "Tarea 3", done: false },
    { text: "Tarea 4", done: true }
];

class MainScreen extends Component{
    render (){
        return(
            <View style= {styles.container}>
                <Text selectable>ToDo List App</Text>
                <TodoList todos={todos}/>
            </View>
        );
    } 
}
export default MainScreen;