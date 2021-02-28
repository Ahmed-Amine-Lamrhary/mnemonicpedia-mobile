import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import Icon from "react-native-remix-icon";

function AppIcon({ onPress, style, rippleColor, icon }) {
  return (
    <BorderlessButton onPress={onPress} style={style} rippleColor={rippleColor}>
      <Icon name={icon.name} size={icon.size} color={icon.color} />
    </BorderlessButton>
  );
}

export default AppIcon;
