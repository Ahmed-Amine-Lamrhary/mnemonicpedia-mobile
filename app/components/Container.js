import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import colors from "../utility/colors";

function Container({ children }) {
  return <ScrollView style={styles.subContainer}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  subContainer: {
    paddingHorizontal: 15,
    backgroundColor: colors.light,
  },
});

export default Container;
