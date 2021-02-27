import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-remix-icon";
import AppTouchable from "../components/AppTouchable";
import colors from "../utility/colors";

function AppStack({ children, stack: Stack }) {
  const HeaderTitle = ({ navigation, route }) => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerContainerLeft}>
          {navigation.dangerouslyGetState().routes.length === 1 && (
            <AppTouchable
              onPress={() => navigation.openDrawer()}
              underlayColor={colors.white}
              style={{ marginRight: 10 }}
            >
              <Icon name="menu-fill" size="24" color={colors.white} />
            </AppTouchable>
          )}
          {navigation.dangerouslyGetState().routes.length > 1 && (
            <AppTouchable
              onPress={() => navigation.goBack()}
              underlayColor={colors.white}
              style={{ marginRight: 10 }}
            >
              <Icon name="arrow-left-line" size="24" color={colors.white} />
            </AppTouchable>
          )}
          <Text style={styles.headerTitle}>
            {route.params ? route.params.mnemonic.title : route.name}
          </Text>
        </View>
        <View>
          <AppTouchable
            onPress={() => console.log("search")}
            underlayColor={colors.white}
          >
            <Icon name="search-line" size="22" color={colors.white} />
          </AppTouchable>
        </View>
      </View>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: styles.header,
        headerTitle: () => (
          <HeaderTitle navigation={navigation} route={route} />
        ),
        headerLeft: null,
      })}
      mode="modal"
    >
      {children}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: 100,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 2,
    color: colors.white,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContainerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AppStack;
