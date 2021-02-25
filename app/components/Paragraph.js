import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Paragraph({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
  },
});

export default Paragraph;
