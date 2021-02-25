import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./app/utility/NavigationTheme";
import SidebarNavigation from "./app/navigations/SidebarNavigation";

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer theme={NavigationTheme}>
        <SidebarNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 20,
    paddingBottom: 20,
    height: "100%",
  },
});

export default App;
