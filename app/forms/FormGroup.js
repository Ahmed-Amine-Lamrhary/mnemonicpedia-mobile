import React from "react";
import { TextInput, View } from "react-native";

function FormGroup({ type, label, value, onChange }) {
  return (
    <View>
      <TextInput
        type={type}
        placeholder={label}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

export default FormGroup;
