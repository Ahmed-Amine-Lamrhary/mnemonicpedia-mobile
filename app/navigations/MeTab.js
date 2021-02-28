import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserMnemonics from "../screens/user/UserMnemonics";
import UserLikedMnemonics from "../screens/user/UserLikedMnemonics";
import UserSettings from "../screens/user/UserSettings";
import Icon from "react-native-remix-icon";
import colors from "../utility/colors";

const Tab = createBottomTabNavigator();

function MeTab(props) {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      tabBarOptions={{
        tabStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        style: {
          height: 50,
        },
        labelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        labelPosition: "beside-icon",
        activeTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Posts"
        component={UserMnemonics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="t-box-line" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={UserLikedMnemonics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart-line" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={UserSettings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings-2-line" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MeTab;
