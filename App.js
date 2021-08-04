import React from "react";
import { Text, View } from "react-native";
import AppText from "./app/components/AppText";

// View -> UIView for iOS
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>I love react native. Here is some more text</AppText>
    </View>
  );
}
