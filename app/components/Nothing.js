import React from "react";
import { View, Text } from "react-native";

function Nothing({ model }) {
  return (
    <View>
      <Text>No {model} found</Text>
    </View>
  );
}

export default Nothing;
