import React from "react";
import { Platform, Text, StyleSheet } from "react-native";

// <Heading></Heading>
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

// rnss = react native style sheet
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default AppText;
