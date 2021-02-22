import React from "react";
import { View, Text } from "react-native";

function Loading({ loading }) {
  if (!loading) return null;
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

export default Loading;
