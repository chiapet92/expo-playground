import React from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";

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
      <AppButton title="Login" />
    </View>
  );
}
