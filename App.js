import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import StartGameScreen from "./screens/start-game-screen";
import GameScreen from "./screens/game-screen";
import GameOver from "./screens/gameOver-screen";

export default function App() {
  const [userNumber, setuserNumber] = useState();
  const [noRounds, setnoRounds] = useState(0);

  const restartGameHandler = () => {
    setuserNumber(null);
    setnoRounds(0);
  };

  const startGameHandler = selectedNumber => {
    setuserNumber(selectedNumber);
    setnoRounds(0);
  };

  const gameOverHandler = noOfRounds => {
    setnoRounds(noOfRounds);
  };

  let content = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNumber && noRounds <= 0) {
    content = (
      <GameScreen usersChoice={userNumber} gameOverHandler={gameOverHandler} />
    );
  } else if (noRounds) {
    content = (
      <GameOver
        noRounds={noRounds}
        userNumber={userNumber}
        restartGameHandler={restartGameHandler}
      />
    );
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
