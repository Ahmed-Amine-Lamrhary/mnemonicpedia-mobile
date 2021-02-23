import React from "react";
import { Text, View } from "react-native";
import AppButton from "../components/AppButton";

function NotFoundScreen(props) {
  return (
    <View>
      <Text>Page not found</Text>
      <Text>We're sorry, we couldn't find the page you requested.</Text>
      <AppButton>Go to home page</AppButton>
    </View>
  );
}

export default NotFoundScreen;
