import React from "react";
import { View } from "react-native";

// View -> UIView for iOS
export default function App() {
  return (
    <View
      style={{
        backgroundColor: "dodgerblue",
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: "dodgerblue", flex: 1 }} />
      <View style={{ backgroundColor: "gold", flex: 2 }} />
      <View style={{ backgroundColor: "tomato", flex: 1 }} />
    </View>
  );
}
