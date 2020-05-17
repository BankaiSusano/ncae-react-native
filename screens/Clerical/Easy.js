import React, { Component, useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  Modal,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Card, Button, Icon, ThemeProvider } from "react-native-elements";
import backgroundImage from "../../assets/Image/background.png";
import ClericalAbility from "../../assets/json/Science/easy.json";
import { render } from "react-dom";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default function Easy({ navigation }) {
  const theme = {
    Card: {
      containerStyle: {
        borderRadius: 10,
        marginTop: "20%",
      },
    },
    Button: {
      containerStyle: {
        marginTop: "10%",
        borderRadius: 10,
      },
      buttonStyle: {
        backgroundColor: "#50B9FA",
        width: WIDTH * 0.8,
        height: 50,
      },
    },
  };

  const pressHandler = (pageName) => navigation.navigate(pageName);

  const [counter, setCounter] = useState(0);
  const [quizzes, setQuizzes] = useState(ClericalAbility);
  const [selected, setSelected] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [check, setCheck] = useState(null);

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <ThemeProvider theme={theme}>
        <Card>
          <Text style={styles.questionsText}>{quizzes[counter].question}</Text>
        </Card>
      </ThemeProvider>
      {quizzes[counter].choices.map((data, index) => (
        <View key={index}>
          <TouchableOpacity
            style={{
              ...(data.key == selected ? styles.btnColor : styles.btn),
              marginTop: 10,
            }}
            onPress={() => {
              setSelected(data.key);
              setIsSelected(true);
            }}
          >
            <Text
              style={styles.choicesText}
            >{`${data.key}. ${data.choice}`}</Text>
            {/*String Literal, Spread Operator*/}
          </TouchableOpacity>
        </View>
      ))}
      {correctAnswer ? quizzes[counter].answer == isCorrect : setIsCorrect(true) ? check : setModalVisible(true) ?  (<Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.modalView}>
              <Icon name="check-circle" type="font-awesome-5" color="#00B103"/>
              <Text>You're Correct</Text>
              <Button
                title="Next"
                onPress={() => {
                  setCounter(counter + 1);
                  setSelected(null);
                  setIsSelected(null);
                  setModalVisible(true);
                }}
              />
            </View>
          </Modal>
      ) : (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modalView}>
            <Icon name="times-circle" type="font-awesome-5" color="#C50004" />
            <Text>You're Wrong</Text>
            <Text>The Correct Answer is {quizzes[counter].answer}</Text>
            <Button
              title="Next"
              onPress={() => {
                setCounter(counter + 1);
                setSelected(null);
                setIsSelected(null);
                setModalVisible(false);
              }}
            />
          </View>
        </Modal>)}

      {isSelected ? (
        <ThemeProvider theme={theme}>
          <Button
            title="Check"
            onPress={() => {
              setCorrectAnswer(correctAnswer)
              setSelected(null);
              setIsSelected(null);
            }}
          />
        </ThemeProvider>
      ) : (
        <></>
      )}
      {/*Conditional (ternary)*/}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  btn: {
    width: WIDTH * 0.8,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 150,
  },

  btnColor: {
    width: WIDTH * 0.8,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#0D90E2",
  },

  questionsText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },

  choicesText: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
