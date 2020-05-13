import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import Start from "../screens/Start";
import Clerical from "../screens/Clerical/Clerical";
import Entrep from "../screens/Entrep/Entrep";
import Math from "../screens/Math/Math";
import Reading from "../screens/Reading/Reading";
import Verbal from "../screens/Verbal/Verbal";
import Easy from "../screens/Clerical/Easy";
import Instruction from "../screens/Instruction";
import Science from "../screens/Science/Science";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen" headerMode="none">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Clerical" component={Clerical} />
        <Stack.Screen name="Verbal" component={Verbal} />
        <Stack.Screen name="Entrep" component={Entrep} />
        <Stack.Screen name="Math" component={Math} />
        <Stack.Screen name="Reading" component={Reading} />
        <Stack.Screen name="Science" component={Science} />
        <Stack.Screen name="Easy" component={Easy} />
        <Stack.Screen name="Instruction" component={Instruction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
