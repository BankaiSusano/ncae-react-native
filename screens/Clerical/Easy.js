import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import backgroundImage from "../../assets/Image/board.png";
import  ClericalAbility from "../../assets/json/Science/easy.json"
import { render } from "react-dom";


const { width: WIDTH } = Dimensions.get("window");

export default function Easy({ navigation }) {
  const pressHandler = () => {
    navigation.goBack("Clerical");
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      {ClericalAbility.map((data, index) => (
        <View key={index}>
          <Text>{data.question}</Text>
        </View>
      ))}
      <View ></View>
      <TouchableOpacity onPress={pressHandler} style={styles.btnback}>
        <Text style={styles.ltext}>Back</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    width: WIDTH - 55,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 150,
  },

  btnback: {
    width: WIDTH - 200,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 450,
  },

  ltext: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
});
