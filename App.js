import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

// View -> UIView for iOS
export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WelcomeScreen />
    </View>
  );
}
