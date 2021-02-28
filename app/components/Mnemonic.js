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
        {/* <View style={styles.options}>
          <AppButton
            onPress={() =>
              navigation.navigate("HomeStack", {
                screen: "User",
              })
            }
            styleBtn={styles.authorButton}
            styleText={styles.authorText}
          >
            Author name
          </AppButton>

          <View style={styles.optionsBlock}>
            {userId === author._id && (
            <Text>
              Edit
              <i className="ri-pencil-line"></i>
            </Text>
          )}

            <AppIcon
              style={styles.icon}
              rippleColor="red"
              icon={{
                name: "pencil-line",
                size: "18",
                color: colors.grey,
              }}
            />

            <AppIcon
              style={styles.icon}
              onPress={() =>
                navigation.navigate("HomeStack", {
                  screen: "Report Mnemonic",
                  params: { mnemonic },
                })
              }
              rippleColor="red"
              icon={{
                name: "flag-2-line",
                size: "18",
                color: colors.grey,
              }}
            />
          </View>
        </View> */}

        <View style={styles.body}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://images.pexels.com/photos/2492097/pexels-photo-2492097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
                  icon={{
                    name: "more-fill",
                    size: "20",
                    color: colors.lightGrey,
                  }}
                />
              }
            >
              <MenuItem onPress={hideMenu}>Report</MenuItem>
              <MenuItem onPress={hideMenu}>Edit</MenuItem>
            </Menu>
          </View>
        </View>
      </View>
    </AppTouchable>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 15,
    // paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 15,
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
    height: 105,
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
