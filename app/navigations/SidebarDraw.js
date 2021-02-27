import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";
import LoginStack from "./LoginStack";
import RegisterStack from "./RegisterStack";
import MeStack from "./MeStack";
import Sidebar from "../components/Sidebar";

const Drawer = createDrawerNavigator();

function SidebarDraw(props) {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      drawerType="slide"
      drawerContent={({ navigation, state }) => (
        <Sidebar navigation={navigation} state={state} />
      )}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="LoginStack"
        component={LoginStack}
        options={{ title: "Login" }}
      />
      <Drawer.Screen
        name="RegisterStack"
        component={RegisterStack}
        options={{ title: "Register" }}
      />
      <Drawer.Screen
        name="ProfileStack"
        component={MeStack}
        options={{ title: "Profile" }}
      />
    </Drawer.Navigator>
  );
}

export default SidebarDraw;
