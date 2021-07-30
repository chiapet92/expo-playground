import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";

// View -> UIView for iOS
export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click me" onPress={() => console.log("button tapped.")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
