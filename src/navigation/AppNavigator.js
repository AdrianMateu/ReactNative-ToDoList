import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import MainScreen from "todoList/src/screens/main";
export default createAppContainer(
	createStackNavigator(
		{
			Main: { screen: MainScreen }
		},
		{
			initialRouteName: "Main",
			defaultNavigationOptions: {
				headerStyle: {
					backgroundColor: "#0066ff"
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold"
				}
			}
		}
	)
);
