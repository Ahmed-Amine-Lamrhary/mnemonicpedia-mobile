import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MeTab from "./MeTab";
import AppStack from "./AppStack";

const Stack = createStackNavigator();

function MeStack(props) {
  return (
    <AppStack stack={Stack}>
      <Stack.Screen name="Profile" component={MeTab} />
    </AppStack>
  );
}

export default MeStack;
