import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";

function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 20,
  },
});

export default App;
