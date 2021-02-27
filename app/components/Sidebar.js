import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import colors from "../utility/colors";
import AppTouchable from "./AppTouchable";

function Sidebar({ navigation, state }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Mnemonicpedia</Text>

      <View style={styles.routes}>
        {state.routes.map(({ name }) => (
          <AppTouchable
            onPress={() => navigation.navigate(name)}
            style={styles.route}
          >
            <Text style={styles.routeText}>{name}</Text>
          </AppTouchable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  container: {
    paddingTop: StatusBar.currentHeight + 20,
  },
  routes: {},
  route: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 2,
  },
  routeText: {
    fontSize: 13,
    color: colors.grey,
  },
});

export default Sidebar;
