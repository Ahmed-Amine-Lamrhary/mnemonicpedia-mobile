import React from "react";
import { RectButton } from "react-native-gesture-handler";

function AppTouchable({ children, onPress, style, rippleColor }) {
  return (
    <RectButton onPress={onPress} style={style} rippleColor={rippleColor}>
      <>{children}</>
    </RectButton>
  );
}

export default AppTouchable;
