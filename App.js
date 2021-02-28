import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./app/utility/NavigationTheme";
import SidebarDraw from "./app/navigations/SidebarDraw";

function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <SidebarDraw />
    </NavigationContainer>
  );
}

export default App;
