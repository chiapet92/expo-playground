import React from "react";
import { Text, StyleSheet } from "react-native";

// <Heading></Heading>
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

// rnss = react native style sheet
const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 30,
    fontFamily: "Avenir",
  },
});
export default AppText;
