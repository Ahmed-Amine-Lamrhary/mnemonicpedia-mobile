import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, FlatList } from "react-native";
import Mnemonic from "../components/Mnemonic";
import Loading from "../components/Loading";
import Nothing from "../components/Nothing";
import AppButton from "./AppButton";
import colors from "../utility/colors";
import Container from "./Container";
import AppSeparator from "./AppSeparator";
import { getMnemonics } from "../api/mnemonic";

const mnemonicsData = [
  {
    _id: {
      $oid: "6011d740b157a22b48ce4ede",
    },
    isPublished: true,
    likes: [],
    categories: ["60107036ccf8a13720c82f41", "60214a39015f8443c0cd3efe"],
    title: "Inspiration for New Projects Can Be Found",
    content: "test test test",
    author: {
      $oid: "6005768d61f1a14c04582570",
    },
    dateCreated: {
      $date: "2021-01-27T21:12:32.658Z",
    },
  },
  {
    _id: {
      $oid: "6015b15e34a9793fdc70c3f7",
    },
    isPublished: true,
    likes: [],
    categories: [
      {
        $oid: "60107036ccf8a13720c82f41",
      },
      {
        $oid: "601071da5ccb201fd4b24f90",
      },
    ],
    title: "My new one",
    content: "mikasa armin eren sasha",
    author: {
      $oid: "601599b79893d022b0c43c94",
    },
    dateCreated: {
      $date: "2021-01-30T19:19:58.107Z",
    },
  },
  {
    _id: {
      $oid: "6015b902a3bb691f10dd8cd1",
    },
    isPublished: true,
    likes: [],
    categories: [
      {
        $oid: "60107036ccf8a13720c82f41",
      },
      {
        $oid: "601071da5ccb201fd4b24f90",
      },
    ],
    title: "Hello world",
    content: "Hello world Hello world Hello world",
    author: {
      $oid: "601599b79893d022b0c43c94",
    },
    dateCreated: {
      $date: "2021-01-30T19:52:34.322Z",
    },
  },
  {
    _id: {
      $oid: "6015b902a3bb691f10dd8cd2",
    },
    isPublished: true,
    likes: [],
    categories: [
      {
        $oid: "60107036ccf8a13720c82f41",
      },
      {
        $oid: "601071da5ccb201fd4b24f90",
      },
    ],
    title: "Hello world",
    content: "Hello world Hello world Hello world",
    author: {
      $oid: "601599b79893d022b0c43c94",
    },
    dateCreated: {
      $date: "2021-01-30T19:52:34.754Z",
    },
  },
  {
    _id: {
      $oid: "6015b903a3bb691f10dd8cd3",
    },
    isPublished: true,
    likes: [],
    categories: [
      {
        $oid: "60107036ccf8a13720c82f41",
      },
      {
        $oid: "601071da5ccb201fd4b24f90",
      },
    ],
    title: "Hello world",
    content: "Hello world Hello world Hello world",
    author: {
      $oid: "601599b79893d022b0c43c94",
    },
    dateCreated: {
      $date: "2021-01-30T19:52:35.235Z",
    },
  },
  {
    _id: {
      $oid: "6015b903a3bb691f10dd8cd4",
    },
    isPublished: true,
    likes: [],
    categories: [
      {
        $oid: "60107036ccf8a13720c82f41",
      },
      {
        $oid: "601071da5ccb201fd4b24f90",
      },
    ],
    title: "Hello world",
    content: "Hello world Hello world Hello world",
    author: {
      $oid: "601599b79893d022b0c43c94",
    },
    dateCreated: {
      $date: "2021-01-30T19:52:35.235Z",
    },
  },
  {
    _id: {
      $oid: "6015b903a3bb691f10dd8cd5",
    },
    isPublished: true,
    likes: [],
    categories: [
      {
        $oid: "60107036ccf8a13720c82f41",
      },
      {
        $oid: "601071da5ccb201fd4b24f90",
      },
    ],
    title: "Hello world",
    content: "Hello world Hello world Hello world",
    author: {
      $oid: "601599b79893d022b0c43c94",
    },
    dateCreated: {
      $date: "2021-01-30T19:52:35.235Z",
    },
  },
  {
    _id: {
      $oid: "6015b903a3bb691f10dd8cd6",
    },
    isPublished: true,
    likes: [],
    categories: [
      {
        $oid: "60107036ccf8a13720c82f41",
      },
      {
        $oid: "601071da5ccb201fd4b24f90",
      },
    ],
    title: "Hello world",
    content: "Hello world Hello world Hello world",
    author: {
      $oid: "601599b79893d022b0c43c94",
    },
    dateCreated: {
      $date: "2021-01-30T19:52:35.235Z",
    },
  },
];

function Mnemonics({ query }) {
  const [mnemonics, setMnemonics] = useState([]);
  const [reachEnd, setReachEnd] = useState(false);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState({});
  const [isRefreshing, setIsRefreshing] = useState(false);

  // const history = useHistory();
  // const location = useLocation();

  const handleGet = async () => {
    setIsRefreshing(true);
    setLoading(true);

    const finalQuery = { ...query, ...filter };
    const { search, load } = filter;

    if (!load) {
      setReachEnd(false);
      setMnemonics([]);
    }
    setLoading(true);

    try {
      const { data } = await getMnemonics(finalQuery);
      if (!load) setMnemonics(data);
      else setMnemonics([...mnemonics, ...data]);

      if (data.length === 0) setReachEnd(true);
    } catch (error) {
      console.error(error);
      setReachEnd(true);
    } finally {
      setLoading(false);
      // if (load) window.scrollTo(0, document.body.scrollHeight);
    }
  };

  const loadMore = () => {
    // const { page: currentPage } = filter;
    // const newFilter = { ...filter, page: currentPage + 1, load: true };
    // setFilter(newFilter);
  };

  // const userId = getMyId();

  // useEffect(() => {
  //   if ("search" in filter) {
  //     setValue(filter.search);
  //     handleGet();
  //   }
  // }, [filter]);

  useEffect(() => {
    // let { search = "", page = 1 } = parse(location.search) || {};
    // setFilter({ search, page: parseInt(page), load: false });
    handleGet();
  }, []);

  const handleSearch = (e) => {
    // e.preventDefault();
    // const newFilter = { search: value, page: 1, load: false };
    // setFilter(newFilter);
  };

  const revertSearch = () => {
    // const newFilter = { search: "", page: 1, load: false };
    // setFilter(newFilter);
  };

  const handleLike = async (_id) => {
    // // UI
    // let newMnemonics = [...mnemonics];
    // let mnemonicLikes = newMnemonics.find((m) => m._id === _id).likes;
    // if (!mnemonicLikes.includes(userId)) mnemonicLikes.push(userId);
    // else
    //   newMnemonics.find((m) => m._id === _id).likes = newMnemonics
    //     .find((m) => m._id === _id)
    //     .likes.filter((l) => l !== userId);
    // setMnemonics(newMnemonics);
    // try {
    //   // change in db
    //   await likeMnemonic(_id);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <View>
      {/* <View>
        <TextInput
          style={styles.searchBar}
          type="words"
          placeholder="Search"
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        {value && <Button onPress={revertSearch} title="close" />}
      </View> */}

      {mnemonics.length > 0 && (
        <FlatList
          data={mnemonics}
          renderItem={({ item }) => (
            <Mnemonic mnemonic={item} onLike={handleLike} />
          )}
          keyExtractor={(index) => index._id.$oid.toString()}
          refreshing={isRefreshing}
          onRefresh={() => handleGet()}
          ItemSeparatorComponent={() => <AppSeparator />}
        />
      )}
      {mnemonics.length === 0 && !loading && <Nothing model="mnemonic" />}

      <Loading loading={loading} />

      {/* {!loading && !reachEnd && (
        <View>
          <AppButton
            onPress={loadMore}
            icon={{ name: "restart-line", color: colors.white }}
          >
            Load More
          </AppButton>
        </View>
      )} */}
    </View>
  );
}
const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#f1f3f4",
    fontSize: 15,
    fontWeight: "500",
    color: "#707070",
    paddingHorizontal: 20,
    borderRadius: 7,
    height: 52,
    marginBottom: 5,
  },
});

export default Mnemonics;
