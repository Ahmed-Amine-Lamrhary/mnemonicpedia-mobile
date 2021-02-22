import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Mnemonic({ mnemonic, onLike }) {
  const { _id, title, content, author, likes } = mnemonic;

  if (!_id) return null;

  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <View>
          <Text style={styles.icon}>
            {/* <i className="ri-user-line"></i> */}
            <Text style={styles.author}>{author.fullname}</Text>
          </Text>
        </View>

        <View>
          {/* {userId === author._id && (
            <Text>
              Edit
              <i className="ri-pencil-line"></i>
            </Text>
          )} */}

          <Text>
            {/* <i className="ri-flag-2-line"></i> */}
            Report
          </Text>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>

      {/* <View dangerouslySetInnerHTML={{ __html: content }} /> */}

      {/* <View>
        <Text>Helpful?</Text>
        {userId && (
          <Button
            bgColor={likes.includes(userId) ? "primary" : "white"}
            onClick={() => onLike(mnemonic._id)}
            className="mnemonic-btn"
          >
            <i className="ri-thumb-up-line"></i>
            <span>{likes.length}</span>
          </Button>
        )}
        {!userId && (
          <Button bgColor="white" className="mnemonic-btn" to="/login">
            <i className="ri-thumb-up-line"></i>
            <span>{likes.length}</span>
          </Button>
        )}
        <Button bgColor="white" className="mnemonic-btn">
          <i className="ri-share-forward-line"></i> Share
        </Button>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 26,
    paddingHorizontal: 40,
    borderStyle: "solid",
    borderColor: "#f1f3f4",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 20,
  },
  options: {},
  title: {
    fontSize: 18,
    lineHeight: 23,
  },
  helpful: {},
  button: {},
  author: {
    fontSize: 14,
    fontWeight: "500",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
  },
  icon: {
    color: "#919292",
    fontSize: 18,
    marginLeft: 13,
  },
});

export default Mnemonic;
