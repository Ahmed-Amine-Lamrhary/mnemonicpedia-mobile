import React from "react";
import { View } from "react-native";
import Mnemonics from "../../components/Mnemonics";

function UserMnemonics({ route }) {
  console.log(route);
  return (
    <View>
      <Mnemonics />
    </View>
  );
}

export default UserMnemonics;
