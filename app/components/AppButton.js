import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../utility/colors";

function AppButton({ children, onPress }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{children}</Text>
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
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});

export default AppButton;
