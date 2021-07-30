import React from "react";
import { StyleSheet, SafeAreaView, Alert, Button } from "react-native";

// View -> UIView for iOS
export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click me"
        onPress={() =>
          Alert.alert("my title", "my message", [
            { text: "Yes", onPress: () => console.log("pressed yes") },
            { text: "No", onPress: () => console.log("pressed no") },
          ])
        }
      />
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
