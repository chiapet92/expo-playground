import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Button,
  Platform,
} from "react-native";

// View -> UIView for iOS
export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("text pressed");

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
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

const containerStyle = { backgroundColor: "orange" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
