import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity
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
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNum, setSelectedNum] = useState();

  const inputHandler = value => {
    setinputValue(value.replace(/[^0-9]/g, ""));
  };

  const resetFunc = () => {
    setinputValue("");
    setConfirmed(false);
  };

  const confirmFunc = () => {
    const chosenNumber = parseInt(inputValue);
    if (chosenNumber <= 0) {
      Alert.alert("Inavalid Number", "Number must be between 1 & 99", [
        { text: "Okay", style: "cancel", onPress: resetFunc }
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNum(parseInt(inputValue));
    setinputValue("");
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = <Text>chosen Number : {selectedNum}</Text>;
  }

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
                onPress={resetFunc}
              />
            </View>
            <View style={styles.buttons}>
              <Button
                color={Colors.primaryColor}
                title="Confirm"
                onPress={confirmFunc}
              />
            </View>
          </View>
        </Card>
        {confirmed ? (
          <View>
            <Card style={{ padding: 10, marginTop: 10, alignItems: "center" }}>
              <Text style={{ color: "#666563" }}>Selected Number</Text>
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
                {selectedNum}
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    color: Colors.accentColor,
                    // borderColor: Colors.accentColor,
                    // borderWidth: 2,
                    // borderRadius: 7,
                    padding: 4,
                    marginTop: 4
                  }}
                >
                  Start Game
                </Text>
              </TouchableOpacity>
            </Card>
          </View>
        ) : (
          <Text></Text>
        )}
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
    marginVertical: 10,
    color: "#666563"
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
    marginTop: 7,
    width: wp("13%"),
    textAlign: "center",
    height: hp("7%"),
    borderBottomColor: "grey",
    borderWidth: 1,
    borderStyle: "dotted",
    borderRadius: 10,
    marginBottom: hp("2%")
  }
});

export default StartGameScreen;
