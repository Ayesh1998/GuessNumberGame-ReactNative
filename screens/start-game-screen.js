import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Card from "../components/card";
import Colors from "../constants/colors";
import InputField from "../components/input";

const StartGameScreen = () => {
  const [inputValue, setinputValue] = useState("");

  const inputHandler = value => {
    setinputValue(value.replace(/[^0-9]/g, ""));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game</Text>
        <Card style={styles.inputCont}>
          <Text>Select a number</Text>
          <InputField
            style={styles.input}
            blurOnSubmit
            autoCapitalization="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={inputHandler}
            value={inputValue}
          />

          <View style={styles.buttonsCont}>
            <View style={styles.buttons}>
              <Button
                color={Colors.accentColor}
                title="Reset"
                onPress={() => {}}
              />
            </View>
            <View style={styles.buttons}>
              <Button
                color={Colors.primaryColor}
                title="Confirm"
                onPress={() => {}}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: wp("4%"),
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonsCont: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  inputCont: {
    padding: wp("5%"),
    width: wp("80%"),
    alignItems: "center"
  },
  buttons: {
    width: wp("25%")
  },
  input: {
    paddingBottom: 0,
    width: wp("13%"),
    textAlign: "center",
    height: hp("7%"),
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginBottom: hp("2%")
  }
});

export default StartGameScreen;
