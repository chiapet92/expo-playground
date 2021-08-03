import React from "react";
import { View } from "react-native";

// View -> UIView for iOS
export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // horizontal
        justifyContent: "center", // main
        alignItems: "center", // secondary axis
        alignContent: "center", // only applies with wrapping
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flexBasis: 100, // primary axis
          // width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: "absolute",
        }}
      />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View>
  );
}
