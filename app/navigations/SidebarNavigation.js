import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LinkNavigation from "./LinkNavigation";

function SidebarNavigation(props) {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Root">
      <Drawer.Screen name="Home" component={LinkNavigation} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
    </Drawer.Navigator>
  );
}

export default SidebarNavigation;
