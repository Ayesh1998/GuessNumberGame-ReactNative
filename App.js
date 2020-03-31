import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";

export default function App() {
  return (
    <View style={styles.appHome}>
      <Header title="Guess a number" />
    </View>
  );
}

const styles = StyleSheet.create({
  appHome: {
    flex: 1
  }
});
