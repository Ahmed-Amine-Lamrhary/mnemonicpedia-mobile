import React from "react";
import CheckBox from "@react-native-community/checkbox";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../utility/colors";
// import colors from "../../utility/colors";

function FormCheck({ label, id, checked, check, onChange }) {
  return (
    <View style={styles.container}>
      <CheckBox
        value={checked}
        onValueChange={onChange}
        tintColors={{ true: colors.primary, false: colors.lightGrey }}
      />

      <TouchableOpacity onPress={check}>
        <Text
          // style={{ color: colors.primary }}
          style={styles.label}
          htmlFor={id}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: { fontSize: 13, fontWeight: "bold", color: colors.grey },
});

export default FormCheck;
