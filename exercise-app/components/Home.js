import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const exercises = [
  { id: '1', name: 'Push-Ups', type: 'Repetition', suggested: 'Jumping Jacks' },
  { id: '2', name: 'Jumping Jacks', type: 'Duration', suggested: 'Squats' },
  { id: '3', name: 'Squats', type: 'Repetition', suggested: 'Push-ups' },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem bottomDivider onPress={() => navigation.push(item.type === 'Repetition' ? 'RepetitionExercise' : 'DurationExercise', { exercise: item })}
          style={styles.button}>
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron/>
          </ListItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 300,
        paddingVertical: 20,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 12,
    },
    buttonText: {
        backgroundColor: '#007bff',
        color: '#fff',
    },

});

export default Home; 