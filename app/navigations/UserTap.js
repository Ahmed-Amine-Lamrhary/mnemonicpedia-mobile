import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserMnemonics from "../screens/user/UserMnemonics";
import UserLikedMnemonics from "../screens/user/UserLikedMnemonics";

const Tab = createBottomTabNavigator();

function UserTap(props) {
  return (
    <Tab.Navigator initialRouteName="Posts">
      <Tab.Screen name="Posts" component={UserMnemonics} />
      <Tab.Screen name="Likes" component={UserLikedMnemonics} />
    </Tab.Navigator>
  );
}

export default UserTap;
