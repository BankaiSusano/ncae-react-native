import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import backgroundImage from "../assets/Image/background.png";

const { width: WIDTH } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {

  const pressHandler = () => {
    navigation.navigate("Clerical");
  }

  const pressHandler2 = () => {
    navigation.navigate("Verbal");
  }

  const pressHandler3 = () => {
    navigation.navigate("Entrep");
  }

  const pressHandler4 = () => {
    navigation.navigate("Math");
  }

  const pressHandler5 = () => {
    navigation.navigate("Reading");
  }

 
  

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={pressHandler}>
        <Text style={styles.ltext}>Clerical Ability</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={pressHandler2}>
        <Text style={styles.ltext}>Verbal Ability</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={pressHandler3}>
        <Text style={styles.ltext}>Entrepreneurship</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={pressHandler4}>
        <Text style={styles.ltext}>Mathematics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={pressHandler5}>
        <Text style={styles.ltext}>Reading Comprehension</Text>
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

  ltext: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
});
