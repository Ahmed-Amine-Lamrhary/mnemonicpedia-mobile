import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import AppStack from "./AppStack";

const Stack = createStackNavigator();

function LoginStack(props) {
  return (
    <AppStack stack={Stack}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </AppStack>
  );
}

export default LoginStack;
