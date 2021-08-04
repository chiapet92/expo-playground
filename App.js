import React from "react";
import { View } from "react-native";

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
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          // for iOS
          shadowColor: "grey",
          shadowOffset: { height: 0, width: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          // for android
          elevation: 10,
        }}
      ></View>
    </View>
  );
}
