import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, FlatList } from "react-native";
import Mnemonic from "../components/Mnemonic";
import Loading from "../components/Loading";
import Nothing from "../components/Nothing";
import AppSeparator from "./AppSeparator";
import { getMnemonics } from "../api/mnemonic";
import AppButton from "./AppButton";
import colors from "../utility/colors";

function Mnemonics({ query }) {
  const [mnemonics, setMnemonics] = useState([]);
  const [reachEnd, setReachEnd] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [value, setValue] = useState("");
  const [filter, setFilter] = useState({});
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleGet = async () => {
    const finalQuery = { ...query, ...filter };
    const { load } = filter;

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
      setIsRefreshing(false);
      // if (load) window.scrollTo(0, document.body.scrollHeight);
    }
  };

  const loadMore = () => {
    const { page: currentPage } = filter;
    const newFilter = { ...filter, page: currentPage + 1, load: true };
    setFilter(newFilter);
  };

  // const userId = getMyId();

  useEffect(() => {
    // if ("search" in filter) {
    //   setValue(filter.search);
    //   handleGet();
    // }
    handleGet();
  }, [filter]);

  useEffect(() => {
    setFilter({
      page: 1,
    });
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
      {!loading && !reachEnd && (
        <View>
          <AppButton
            onPress={loadMore}
            icon={{ name: "restart-line", color: colors.white }}
          >
            Load More
          </AppButton>
        </View>
      )}

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
          keyExtractor={(index) => index._id.toString()}
          refreshing={isRefreshing}
          onRefresh={() => handleGet()}
          ItemSeparatorComponent={() => <AppSeparator />}
        />
      )}
      {mnemonics.length === 0 && !loading && <Nothing model="mnemonic" />}

      <Loading loading={loading} />
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
