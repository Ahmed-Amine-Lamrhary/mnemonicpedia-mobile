import React from "react";
import CheckBox from "@react-native-community/checkbox";
import { StyleSheet, Text, View } from "react-native";
// import colors from "../../utility/colors";

function FormCheck({ label, id, checked, onChange }) {
  return (
    <View style={styles.container}>
      <CheckBox value={checked} onValueChange={onChange} />

      <Text
        // style={{ color: colors.primary }}
        style={styles.label}
        htmlFor={id}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: { fontSize: 13, fontWeight: "500" },
});

export default FormCheck;
