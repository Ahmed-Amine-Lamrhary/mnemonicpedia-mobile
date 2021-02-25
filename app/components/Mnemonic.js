import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../utility/colors";
import AppButton from "./AppButton";
import Icon from "react-native-remix-icon";
import { useNavigation } from "@react-navigation/native";

function Mnemonic({ mnemonic, onLike }) {
  const navigation = useNavigation();
  const { _id, title, content, author, likes } = mnemonic;
  const userId = "dedededede";

  if (!_id) return null;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("Home", {
          screen: "MnemonicScreen",
          params: { mnemonic },
        })
      }
    >
      <View>
        <View style={styles.options}>
          <View style={styles.optionsBlock}>
            <Icon name="user-line" size="17" color={colors.grey} />
            <Text style={styles.author}>Author name</Text>
          </View>

          <View style={styles.optionsBlock}>
            {/* {userId === author._id && (
            <Text>
              Edit
              <i className="ri-pencil-line"></i>
            </Text>
          )} */}

            <TouchableOpacity style={{ marginRight: 8 }}>
              <Icon name="pencil-line" size="20" color={colors.grey} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Home", {
                  screen: "ReportMnemonic",
                  params: { mnemonic },
                })
              }
            >
              <Icon name="flag-2-line" size="20" color={colors.grey} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.title}>{title}</Text>

        {/* <View dangerouslySetInnerHTML={{ __html: content }} /> */}
        <View>
          <Text>{content}</Text>
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderStyle: "solid",
    borderColor: "#f1f3f4",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: colors.white,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 23,
    marginBottom: 5,
    color: colors.primary,
  },
  helpful: {
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {
    backgroundColor: colors.white,
    paddingHorizontal: 14,
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
    fontSize: 14,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    color: colors.grey,
    marginLeft: 5,
  },
  optionsBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
});

export default Mnemonic;
