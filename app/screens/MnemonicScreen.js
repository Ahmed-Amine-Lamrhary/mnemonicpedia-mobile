import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Container from "../components/Container";
// import { getMnemonic } from "../../api/mnemonic";
import Heading from "../components/Heading";
import colors from "../utility/colors";
import Icon from "react-native-remix-icon";

function MnemonicScreen() {
  const [mnemonic, setMnemonic] = useState({});
  // const { params } = match;

  const handleGetMnemonic = async () => {
    setMnemonic({
      _id: {
        $oid: "6011d740b157a22b48ce4ede",
      },
      isPublished: true,
      likes: [],
      categories: ["60107036ccf8a13720c82f41", "60214a39015f8443c0cd3efe"],
      title: "Hello world",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: {
        $oid: "6005768d61f1a14c04582570",
      },
      dateCreated: {
        $date: "2021-01-27T21:12:32.658Z",
      },
    });

    // try {
    //   const { data: mnemonic } = await getMnemonic(params.id);
    //   setMnemonic(mnemonic);
    // } catch (error) {
    //   console.error(error);
    //   history.push("/notFound");
    // }
  };

  useEffect(() => {
    handleGetMnemonic();
  }, []);

  return (
    <Container>
      <Heading>{mnemonic.title}</Heading>
      <View style={styles.infoUnit}>
        <Icon name="user-3-line" size={15} color={colors.lightGrey} />
        <Text style={{ marginLeft: 5 }}>Christina</Text>
      </View>
      <Image
        style={styles.previewImage}
        source={{
          uri:
            "https://images.pexels.com/photos/2492097/pexels-photo-2492097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{mnemonic.content}</Text>
      </View>
    </Container>
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
