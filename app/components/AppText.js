import React from "react";
import { Platform, Text, StyleSheet } from "react-native";

// <Heading></Heading>
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

// rnss = react native style sheet
const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 30,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});
export default AppText;
