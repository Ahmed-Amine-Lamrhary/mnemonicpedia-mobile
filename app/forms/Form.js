import React, { useState } from "react";
import { View } from "react-native";
import Loading from "../components/Loading";

function Form({ children }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setLoading(true);
    // try {
    //   await onSubmit();
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <View>
      <Loading loading={loading} />

      <View>{children}</View>
    </View>
  );
}

export default Form;
