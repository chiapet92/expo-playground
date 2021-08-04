import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
      {/* https://icons.expo.fyi/ */}
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
    </View>
  );
}
