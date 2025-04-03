import React from 'react'; 
import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DurationExercise = ({ route, navigation }) => {
  const { exercise } = route.params;
  const [time, setTime] = useState(0);
  let timer;

  const startTimer = () => {
    timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(timer);
    setTime(0);
  };

  return (
    <View>
      <Text style={styles.Text}>{exercise.name}</Text>
      <Text style={styles.counter}>Time: {time}s</Text>
      <Button title="Start Timer" onPress={startTimer} />
      <Button title="Reset" onPress={resetTimer} />
      <Button title="Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
    Text: {
        fontSize: 36,
        alignItems: 'center',
    },
    counter: {
        fontSize: 24,
        paddingVertical: 10,
    }
})

export default DurationExercise;
