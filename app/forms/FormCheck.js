import React from "react";
import CheckBox from "@react-native-community/checkbox";
import { Text, View } from "react-native";
// import colors from "../../utility/colors";

function FormCheck({ label, id, checked, onChange }) {
  return (
    <View>
      <CheckBox value={checked} onValueChange={onChange} />

      <Text
        // style={{ color: colors.primary }}
        htmlFor={id}
      >
        {label}
      </Text>
    </View>
  );
}

export default FormCheck;
