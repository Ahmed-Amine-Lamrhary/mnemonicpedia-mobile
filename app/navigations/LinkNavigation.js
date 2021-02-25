import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MnemonicScreen from "../screens/MnemonicScreen";
import ReportMnemonic from "../screens/ReportMnemonic";
import ReportUser from "../screens/ReportUser";

function LinkNavigation(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MnemonicScreen" component={MnemonicScreen} />
      <Stack.Screen name="ReportMnemonic" component={ReportMnemonic} />
      <Stack.Screen name="ReportUser" component={ReportUser} />
    </Stack.Navigator>
  );
}

export default LinkNavigation;
