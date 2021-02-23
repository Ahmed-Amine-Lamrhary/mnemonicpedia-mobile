import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MnemonicScreen from "./app/screens/MnemonicScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import NotFoundScreen from "./app/screens/NotFoundScreen";
import ReportMnemonic from "./app/screens/ReportMnemonic";
import ReportUser from "./app/screens/ReportUser";

function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <MnemonicScreen /> */}
      {/* <NotFoundScreen /> */}
      {/* <ReportMnemonic /> */}
      {/* <ReportUser /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 20,
  },
});

export default App;
