import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import StartGameScreen from "./screens/start-game-screen";
import GameScreen from "./screens/game-screen";

export default function App() {
  const [userNumber, setuserNumber] = useState();

  const startGameHandler = selectedNumber => {
    setuserNumber(selectedNumber);
  };

  let content = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen usersChoice={userNumber} />;
  }

  return (
    <View style={styles.appHome}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  appHome: {
    flex: 1
  }
});
