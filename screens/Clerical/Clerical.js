import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import backgroundImage from "../../assets/Image/background.png";

const { width: WIDTH } = Dimensions.get("window");

export default function Start({ navigation }) {
  const pressHandler = () => {
    navigation.goBack("HomeScreen");
  };

  const pressHandler2 = () => {
    navigation.push("Easy");
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <TouchableOpacity  style={styles.btn}>
        <Text style={styles.ltext} onPress={pressHandler2}>Easy</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btn}>
        <Text style={styles.ltext}>Average</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btn}>
        <Text style={styles.ltext}>Hard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressHandler} style={styles.btnback}>
        <Text style={styles.ltext}>Back</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    width: WIDTH - 55,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 10,
  },

  btnback: {
    width: WIDTH - 150,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 100,
  },

  ltext: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
});
