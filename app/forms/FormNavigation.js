import React from "react";
import { Text, View } from "react-native";

function FormNavigation({ links }) {
  return (
    <View>
      {links.map((link, index) => (
        <Text key={index}>{link.text}</Text>
      ))}
    </View>
  );
}

export default FormNavigation;
