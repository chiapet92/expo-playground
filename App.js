import React from "react";
import { Text, View } from "react-native";

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
      <Text
        style={{
          fontFamily: "Courier", // iOS only
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          fontSize: 30,
          textTransform: "capitalize",
          textAlign: "center",
          lineHeight: 40,
        }}
      >
        I love react native. Here is some more text
      </Text>
    </View>
  );
}
