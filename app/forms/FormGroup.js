import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

function FormGroup({ type, label, value, onChange }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        type={type}
        placeholder={label}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  textInput: {
    borderRadius: 3,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#d0d0d0",
    paddingHorizontal: 12,
    paddingVertical: 14,
    fontSize: 14,
  },
});

export default FormGroup;
