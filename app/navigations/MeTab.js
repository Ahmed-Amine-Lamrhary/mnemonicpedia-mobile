import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserMnemonics from "../screens/user/UserMnemonics";
import UserLikedMnemonics from "../screens/user/UserLikedMnemonics";
import UserSettings from "../screens/user/UserSettings";

const Tab = createBottomTabNavigator();

function MeTab(props) {
  return (
    <Tab.Navigator initialRouteName="Posts">
      <Tab.Screen name="Posts" component={UserMnemonics} />
      <Tab.Screen name="Likes" component={UserLikedMnemonics} />
      <Tab.Screen name="Settings" component={UserSettings} />
    </Tab.Navigator>
  );
}

export default MeTab;
