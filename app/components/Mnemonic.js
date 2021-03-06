import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../utility/colors";
import AppButton from "./AppButton";
import { useNavigation } from "@react-navigation/native";
import AppTouchable from "./AppTouchable";
import Menu, { MenuItem } from "react-native-material-menu";
import AppIcon from "./AppIcon";

function Mnemonic({ mnemonic, onLike }) {
  const navigation = useNavigation();
  const { _id, title, author, likes } = mnemonic;
  const userId = "dedededede";

  const [_menu, set_Menu] = useState(null);

  const setMenuRef = (ref) => {
    set_Menu(ref);
  };

  const hideMenu = () => {
    _menu.hide();
  };

  const showMenu = () => {
    _menu.show();
  };

  const goToReport = () => {
    hideMenu();
    navigation.navigate("Report Mnemonic");
  };

  const goToEdit = () => {
    hideMenu();
    navigation.navigate("Report User");
  };

  if (!_id) return null;

  return (
    <AppTouchable
      rippleColor={colors.lightGrey}
      style={styles.container}
      onPress={() =>
        navigation.navigate("HomeStack", {
          screen: "MnemonicScreen",
          params: { mnemonic },
        })
      }
    >
      <View>
        <View style={styles.body}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: "https://via.placeholder.com/300x300",
              }}
            />
          </View>
          <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.bottom}>
              {userId && (
                <AppButton
                  // bgColor={likes.includes(userId) ? "primary" : "white"}
                  styleBtn={styles.button}
                  styleText={styles.buttonText}
                  onPress={() => onLike(mnemonic._id)}
                  icon={{ name: "thumb-up-line", color: colors.grey }}
                >
                  10
                </AppButton>
              )}
              {!userId && (
                <AppButton
                  styleBtn={styles.button}
                  styleText={styles.buttonText}
                  icon={{ name: "thumb-up-line", color: colors.grey }}
                >
                  10
                </AppButton>
              )}
              <AppButton
                styleBtn={styles.button}
                styleText={styles.buttonText}
                icon={{ name: "share-forward-line", color: colors.grey }}
              >
                Share
              </AppButton>
            </View>
            <Menu
              ref={setMenuRef}
              button={
                <AppIcon
                  onPress={showMenu}
                  style={{ width: 30, height: 30 }}
                  icon={{
                    name: "more-fill",
                    size: "20",
                    color: colors.lightGrey,
                  }}
                />
              }
            >
              <MenuItem onPress={goToReport}>Report</MenuItem>
              <MenuItem onPress={goToEdit}>Edit</MenuItem>
            </Menu>
          </View>
        </View>
      </View>
    </AppTouchable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    marginRight: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    lineHeight: 23,
    color: colors.primary,
  },
  content: {
    fontSize: 13,
    color: colors.grey,
  },
  button: {
    backgroundColor: "transparent",
    paddingHorizontal: 0,
    paddingVertical: 8,
    marginRight: 15,
    borderColor: colors.light,
    borderWidth: 1,
    borderStyle: "solid",
  },
  buttonText: {
    color: colors.lightGrey,
    fontSize: 12,
  },
  authorButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 0,
    paddingVertical: 5,
  },
  authorText: {
    fontSize: 12,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    color: colors.grey,
    opacity: 0.7,
    textTransform: "uppercase",
  },
  optionsBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    borderRadius: 100,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Mnemonic;
