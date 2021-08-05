import { StyleSheet, Platform } from "react-native";

// rnss = react native style sheet
const styles = StyleSheet.create({
  text: {
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

export default styles;
