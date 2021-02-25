import React from "react";
import { StyleSheet, ScrollView } from "react-native";

function Container({ children }) {
  return <ScrollView style={styles.subContainer}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  subContainer: { paddingHorizontal: 15 },
});

export default Container;
