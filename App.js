import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./app/utility/NavigationTheme";
import SidebarDraw from "./app/navigations/SidebarDraw";

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer theme={NavigationTheme}>
        <SidebarDraw />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default App;
