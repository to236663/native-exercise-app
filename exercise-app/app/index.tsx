import React from 'react';
import { Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import RepetitionExercise from '../components/RepetitionExercise';
import DurationExercise from '../components/DurationExercise';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RepetitionExercise" component={RepetitionExercise} />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
      </Stack.Navigator>
  );
}

/*import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}*/
