import React from "react";
import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

// View -> UIView for iOS
export default function App() {
  // return <WelcomeScreen />;
  return <ViewImageScreen />;
}
