import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../utility/colors";

function AppSeparator(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default AppSeparator;
