import React from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
} from "react-native";
// preferred way to detect screen flips
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";

// View -> UIView for iOS
export default function App() {
  console.log("App executed");
  console.log(Dimensions.get("screen"));
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "50%",
          // width: 150, // density independent pixels, also can do "50%"
          // height: 70,
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
