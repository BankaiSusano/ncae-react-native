import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import backgroundImage from "../assets/Image/background.png";

const { width: WIDTH } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const pressHandler = (pageName) => navigation.navigate(pageName);

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <TouchableOpacity
        style={styles.btn1}
        onPress={() => pressHandler("Instruction")}
      >
        <Text style={styles.ltext}>Instructions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => pressHandler("Clerical")}
      >
        <Text style={styles.ltext}>Clerical Ability</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => pressHandler("Verbal")}
      >
        <Text style={styles.ltext}>Verbal Ability</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => pressHandler("Entrep")}
      >
        <Text style={styles.ltext}>Entrepreneurship</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => pressHandler("Math")}>
        <Text style={styles.ltext}>Mathematics</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => pressHandler("Reading")}
      >
        <Text style={styles.ltext}>Reading Comprehension</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => pressHandler("Science")}
      >
        <Text style={styles.ltext}>Science</Text>
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

  btn1: {
    width: WIDTH - 55,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "green",
    marginTop: 10,
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
