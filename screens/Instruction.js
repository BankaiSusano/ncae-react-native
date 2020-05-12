import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Card, ThemeProvider } from "react-native-elements";
import backgroundImage from "..//assets/Image/background.png";

const { width: WIDTH } = Dimensions.get("window");

export default function Start({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("HomeScreen");
  };

  const theme = {
    Card: {
      titleStyle: {
        color: "black",
        fontSize: 20,
      },
      containerStyle: {
        borderRadius: 10,
      },
    },
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <ThemeProvider theme={theme}>
        <Card title="Instructions">
          <Text style={styles.graph}>
            * Reviewing is consist of multiple choice only.
          </Text>
          <Text style={styles.graph}>
            * You can select the level in easy, normal, hard.
          </Text>
          <Text style={styles.graph}>
            * You can choice from different subject whether Science, Clerical
            Ability, Verbal Ability, Mathemathics, Entrepreneurship, Reading
            Comprehension.
          </Text>
          <Text style={styles.graph}>
            * You can use different Hints Like the Clue if the user choose CLUE,
            the system will give the meaning of every choices. 50/50. The
            Choices will remove 2 answers that is not right. PASS the user will
            know the answer.
          </Text>
          <Text style={styles.graph}>
            * Once you click the letter of your choice, it will go directly to
            the next question. 
          </Text>
          <Text style={styles.graph}>
            * Select the letter of the best answer
          </Text>
        </Card>
      </ThemeProvider>
      <TouchableOpacity onPress={pressHandler} style={styles.btn}>
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

 graph: {
    color: "black",
    fontSize: 14,
 },

  btn: {
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
