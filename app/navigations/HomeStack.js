import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MnemonicScreen from "../screens/MnemonicScreen";
import ReportMnemonic from "../screens/ReportMnemonic";
import ReportUser from "../screens/ReportUser";
import UserTap from "./UserTap";
import AppStack from "./AppStack";

const Stack = createStackNavigator();

function HomeStack(props) {
  return (
    <AppStack stack={Stack}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MnemonicScreen" component={MnemonicScreen} />
      <Stack.Screen name="Report Mnemonic" component={ReportMnemonic} />
      <Stack.Screen name="Report User" component={ReportUser} />
      <Stack.Screen name="User" component={UserTap} />
    </AppStack>
  );
}

export default HomeStack;
