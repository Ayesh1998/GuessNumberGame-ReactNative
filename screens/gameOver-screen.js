import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Button
} from "react-native";
import Colors from "../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Card from "../components/card";

const GameOver = ({ noRounds, userNumber, restartGameHandler }) => {
  return (
    <View style={styles.screen}>
      <Text>Game is over</Text>
      <Text>No of rounds : {noRounds}</Text>
      <Text>Number was : {userNumber}</Text>
      <Button title="New Game" onPress={restartGameHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOver;
