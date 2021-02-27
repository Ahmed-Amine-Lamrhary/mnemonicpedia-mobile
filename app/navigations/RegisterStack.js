import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/RegisterScreen";
import AppStack from "./AppStack";

const Stack = createStackNavigator();

function RegisterStack(props) {
  return (
    <AppStack stack={Stack}>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </AppStack>
  );
}

export default RegisterStack;
