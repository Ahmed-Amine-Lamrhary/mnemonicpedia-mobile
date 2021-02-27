import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../utility/colors";
import AppButton from "./AppButton";
import Icon from "react-native-remix-icon";
import { useNavigation } from "@react-navigation/native";
import AppTouchable from "./AppTouchable";

function Mnemonic({ mnemonic, onLike }) {
  const navigation = useNavigation();
  const { _id, title, content, author, likes } = mnemonic;
  const userId = "dedededede";

  if (!_id) return null;

  return (
    <AppTouchable
      underlayColor={colors.white}
      style={styles.container}
      onPress={() =>
        navigation.navigate("HomeStack", {
          screen: "MnemonicScreen",
          params: { mnemonic },
        })
      }
    >
      <View>
        <View style={styles.options}>
          <AppTouchable
            onPress={() =>
              navigation.navigate("HomeStack", {
                screen: "User",
              })
            }
            style={styles.optionsBlock}
          >
            <Icon name="user-line" size="15" color={colors.grey} />
            <Text style={styles.author}>Author name</Text>
          </AppTouchable>

          <View style={styles.optionsBlock}>
            {/* {userId === author._id && (
            <Text>
              Edit
              <i className="ri-pencil-line"></i>
            </Text>
          )} */}

            <AppTouchable style={styles.optionsBlockButton}>
              <Icon name="pencil-line" size="18" color={colors.grey} />
            </AppTouchable>

            <AppTouchable
              style={styles.optionsBlockButton}
              onPress={() =>
                navigation.navigate("HomeStack", {
                  screen: "Report Mnemonic",
                  params: { mnemonic },
                })
              }
            >
              <Icon name="flag-2-line" size="18" color={colors.grey} />
            </AppTouchable>
          </View>
        </View>

        <View style={styles.body}>
          <View>
            <View style={styles.image}></View>
          </View>
          <View>
            <Text style={styles.title}>{title}</Text>

            {/* <View dangerouslySetInnerHTML={{ __html: content }} /> */}
            <View>
              <Text style={styles.content}>{content}</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.helpful}>Helpful?</Text>
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
              // bgColor="white"
            >
              10
            </AppButton>
          )}
          <AppButton
            styleBtn={styles.button}
            styleText={styles.buttonText}
            icon={{ name: "share-forward-line", color: colors.grey }}
            // bgColor="white"
          >
            Share
          </AppButton>
        </View>
      </View>
    </AppTouchable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    backgroundColor: colors.white,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  body: {
    flexDirection: "row",
    marginBottom: 8,
  },
  image: {
    width: 85,
    height: 85,
    backgroundColor: colors.light,
    borderRadius: 2,
    marginRight: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    lineHeight: 23,
    marginBottom: 5,
    color: colors.black,
  },
  content: {
    fontSize: 14,
    color: colors.grey,
  },
  helpful: {
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    borderColor: colors.light,
    borderWidth: 1,
    borderStyle: "solid",
  },
  buttonText: {
    color: colors.lightGrey,
    fontSize: 12,
  },
  author: {
    fontSize: 12,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    color: colors.grey,
    marginLeft: 3,
    opacity: 0.7,
  },
  optionsBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionsBlockButton: {
    borderRadius: 100,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Mnemonic;
