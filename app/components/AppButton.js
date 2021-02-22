import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function AppButton({ children, onPress }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 15,
    fontWeight: "400",
    borderRadius: 3,
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
});

export default AppButton;
