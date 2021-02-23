import React, { useEffect, useState } from "react";
// import { getMnemonic } from "../../api/mnemonic";
import Mnemonic from "../components/Mnemonic";

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
      title: "test test",
      content: "test test test",
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

  return <Mnemonic mnemonic={mnemonic} />;
}

export default MnemonicScreen;
