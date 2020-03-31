import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import StartGameScreen from "./screens/start-game-screen";

export default function App() {
  return (
    <View style={styles.appHome}>
      <Header title="Guess a number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  appHome: {
    flex: 1
  }
});
