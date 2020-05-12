import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import homeImage from "..//assets/Image/door.png";



export default function Start({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <ImageBackground source={homeImage} style={styles.container}>
      <TouchableOpacity onPress={pressHandler} style={styles.btn}>
        <Text style={styles.ltext}>Start</Text>
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
    width: 150,
    height: 120,
    justifyContent: "center",
    marginTop: 350
  },

  ltext: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
});
