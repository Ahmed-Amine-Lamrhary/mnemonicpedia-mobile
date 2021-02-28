import React from "react";
import { View, StyleSheet } from "react-native";
import Container from "../components/Container";
import colors from "../utility/colors";

function Screen({ children, color = "light" }) {
  return (
    <View style={{ ...styles.container, backgroundColor: colors[color] }}>
      <Container>{children}</Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flex: 1,
  },
});

export default Screen;
