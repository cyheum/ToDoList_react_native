import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { StyleSheet } from "react-native";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./src/modules";
import { font } from "./src/styles/common";
import YeDoList from "./src/views/screen/YeDoList";
import Home from "./src/Home";

const Stack = createStackNavigator();
const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  const styles = StyleSheet.create({
    header: {
      height: 150,
      backgroundColor: font.skyBlue,
    },
    headerFont: {
      fontSize: 30,
      color: "white",
    },
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ToDoList"
            component={YeDoList}
            options={{
              title: "YeDoList",
              headerStyle: styles.header,
              headerTitleStyle: styles.headerFont,
            }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
