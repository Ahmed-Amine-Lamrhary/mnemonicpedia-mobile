import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
// import { getMnemonic } from "../../api/mnemonic";
import Heading from "../components/Heading";
import colors from "../utility/colors";
import Icon from "react-native-remix-icon";
import Screen from "./Screen";
import { TouchableOpacity } from "react-native-gesture-handler";

function MnemonicScreen({ route, navigation }) {
  const { mnemonic } = route.params;

  return (
    <Screen color="white">
      <Heading>{mnemonic.title}</Heading>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("HomeStack", {
            screen: "User",
            params: { user: mnemonic.author },
          })
        }
      >
        <View style={styles.infoUnit}>
          <Icon name="user-3-line" size={15} color={colors.lightGrey} />
          <Text style={{ marginLeft: 5 }}>{mnemonic.author.username}</Text>
        </View>
      </TouchableOpacity>
      <Image
        style={styles.previewImage}
        source={{
          uri: "https://via.placeholder.com/300x300",
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{mnemonic.content}</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  previewImage: {
    width: "100%",
    height: 250,
    borderRadius: 20,
    marginTop: 25,
    marginBottom: 25,
  },
  contentContainer: {},
  contentText: {
    fontSize: 17,
    color: colors.grey,
    lineHeight: 30,
  },
  infoUnit: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default MnemonicScreen;
