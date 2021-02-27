import React from "react";
import { RectButton } from "react-native-gesture-handler";

function AppTouchable({ children, onPress, style, underlayColor }) {
  return (
    <RectButton
      onPress={onPress}
      style={style}
      // underlayColor={underlayColor}
    >
      <>{children}</>
    </RectButton>
  );
}

export default AppTouchable;
