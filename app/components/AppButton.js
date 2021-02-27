import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../utility/colors";
import Icon from "react-native-remix-icon";
import { BaseButton } from "react-native-gesture-handler";

function AppButton({ children, onPress, styleBtn, styleText, icon }) {
  return (
    <View>
      <BaseButton
        onPress={onPress}
        style={{ ...styles.container, ...styleBtn }}
      >
        {icon && (
          <Icon
            name={icon.name}
            size="17"
            color={icon.color}
            style={{ marginRight: 8 }}
          />
        )}
        <Text style={{ ...styles.text, ...styleText }}>{children}</Text>
      </BaseButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "400",
  },
});

export default AppButton;
