import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../utility/colors";

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
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 14,
    fontSize: 14,
  },
});

export default FormGroup;
