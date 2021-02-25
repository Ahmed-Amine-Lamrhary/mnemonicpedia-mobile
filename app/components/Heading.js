import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Heading({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Heading;
