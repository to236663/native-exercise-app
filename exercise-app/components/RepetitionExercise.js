import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RepetitionExercise = ({ route, navigation }) => {
  const { exercise } = route.params;
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text style={styles.Text}>{exercise.name}</Text>
      <Text style={styles.counter}>Repetitions: {count}</Text>
      <View>
      <Button styles={styles.containerButtons} title="Increase Count" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
      <Button title="Home" onPress={() => navigation.popToTop()} />
      </View>
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
export default RepetitionExercise;