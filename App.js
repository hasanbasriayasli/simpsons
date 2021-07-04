import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "./src/detail/Detail";
import AddForm from "./src/add/AddForm";
import List from "./src/list/List";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Simpsons" component={List} />
        <Stack.Screen name="Details" component={Detail} />
        <Stack.Screen name="Add New Character" component={AddForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
