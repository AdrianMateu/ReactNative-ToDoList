import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from "todoList/src/components/TodoList/index";
import {getTodos} from "todoList/src/data/todos";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

class MainScreen extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        todos: []
      };
    };
    
    componentDidMount = () => {
        this.setState({ todos: getTodos() });
    }

    render (){

        return(
            <View style= {styles.container}>
                <Text selectable>ToDo List App</Text>
                <TodoList todos={this.state.todos}/>
            </View>
        );
    } 
}
export default MainScreen;