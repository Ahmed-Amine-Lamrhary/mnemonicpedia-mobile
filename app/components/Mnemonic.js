import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../utility/colors";
import AppButton from "./AppButton";

function Mnemonic({ mnemonic, onLike }) {
  const { _id, title, content, author, likes } = mnemonic;
  const userId = "dedededede";

  if (!_id) return null;

  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <View>
          <Text style={styles.icon}>
            {/* <i className="ri-user-line"></i> */}
            <Text style={styles.author}>Author name</Text>
          </Text>
        </View>

        <View>
          {/* {userId === author._id && (
            <Text>
              Edit
              <i className="ri-pencil-line"></i>
            </Text>
          )} */}

          <Text>Edit Mnemonic</Text>

          <Text>
            {/* <i className="ri-flag-2-line"></i> */}
            Report User
          </Text>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>

      {/* <View dangerouslySetInnerHTML={{ __html: content }} /> */}
      <View>
        <Text>Mnemonic Content</Text>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.helpful}>Helpful?</Text>
        {userId && (
          <AppButton
            // bgColor={likes.includes(userId) ? "primary" : "white"}
            onPress={() => onLike(mnemonic._id)}
          >
            {/* <i className="ri-thumb-up-line"></i> */}
            10
          </AppButton>
        )}
        {!userId && (
          <AppButton
          // bgColor="white"
          >
            {/* <i className="ri-thumb-up-line"></i> */}
            10
          </AppButton>
        )}
        <AppButton
        // bgColor="white"
        >
          {/* <i className="ri-share-forward-line"></i>  */}
          Share
        </AppButton>
      </View>
    </View>
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
  },
  options: {},
  title: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 23,
    color: colors.primary,
  },
  helpful: {
    fontWeight: "bold",
    marginRight: 10,
  },
  button: {},
  author: {
    fontSize: 14,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "#919292",
    fontSize: 18,
    marginLeft: 13,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Mnemonic;
