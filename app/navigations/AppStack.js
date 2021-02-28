import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppIcon from "../components/AppIcon";
import colors from "../utility/colors";

function AppStack({ children, stack: Stack }) {
  const HeaderTitle = ({ navigation, route }) => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerContainerLeft}>
          {navigation.dangerouslyGetState().routes.length === 1 && (
            <AppIcon
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 10 }}
              rippleColor={colors.black}
              icon={{
                name: "menu-2-fill",
                size: "30",
                color: colors.black,
              }}
            />
          )}
          {navigation.dangerouslyGetState().routes.length > 1 && (
            <AppIcon
              onPress={() => navigation.goBack()}
              style={{ marginRight: 10 }}
              rippleColor={colors.black}
              icon={{
                name: "arrow-left-line",
                size: "24",
                color: colors.black,
              }}
            />
          )}
          <Text style={styles.headerTitle}>
            {route.params ? route.params.mnemonic.title : route.name}
          </Text>
        </View>
        <View>
          <AppIcon
            onPress={() => console.log("search")}
            rippleColor={colors.black}
            icon={{
              name: "search-line",
              size: "25",
              color: colors.black,
            }}
          />
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
        gestureDirection: "vertical",
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateY: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.height, 0],
                  }),
                },
              ],
            },
          };
        },
      })}
      mode="modal"
    >
      {children}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.light,
    height: 100,
    elevation: 0,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 2,
    color: colors.lightGrey,
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
