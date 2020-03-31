import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import Colors from "../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Card from "../components/card";

const randomNumberBetweenGenerate = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return (randomNumberBetweenGenerate = (min, max, exclude));
  } else {
    return randomNum;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    randomNumberBetweenGenerate(1, 100, props.usersChoice)
  );

  return (
    <View style={styles.screen}>
      {/* <Text>Oponents Guess</Text> */}
      <Card
        style={{
          padding: 10,
          marginTop: 10,
          alignItems: "center",
          width: wp("80%")
        }}
      >
        <Text style={{ color: "#666563" }}>Oponents Guess</Text>
        <Text
          style={{
            borderWidth: 1,
            borderColor: Colors.primaryColor,
            borderRadius: 12,
            padding: 8,
            width: 40,
            textAlign: "center",
            marginTop: 7
          }}
        >
          {currentGuess}
        </Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.btnInBtnGroup}>Lower</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.btnInBtnGroup}>Greater</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonGroup: {
    flexDirection: "row",
    margin: 12,
    alignItems: "center",
    justifyContent: "space-between"
  },
  btnInBtnGroup: {
    textAlign: "center",
    width: wp("20%"),
    color: Colors.accentColor,
    borderColor: Colors.accentColor,
    borderWidth: 2,
    borderRadius: 7,
    padding: 4,
    marginTop: 4,
    marginHorizontal: wp("3%")
  }
});

export default GameScreen;
