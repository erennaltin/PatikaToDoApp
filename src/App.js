import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import AddTodoInput from './components/AddTodoInput';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todoCount, setTodoCount] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodoCount(todos.length);
  }, [todos]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Yapılacaklar </Text>
        <Text style={styles.title}> {todoCount} </Text>
      </View>
      <FlatList
        style={styles.todoContainer}
        data={todos}
        renderItem={({item}) => (
          <TodoItem item={item} setTodos={setTodos} todos={todos} />
        )}
        keyExtractor={item => item.id}
      />
      <AddTodoInput setTodos={setTodos} todos={todos} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2b',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '96%',
    marginTop: 8,
    marginBottom: 8,
  },
  title: {
    color: 'goldenrod',
    fontSize: 24,
    fontWeight: 'bold',
  },
  todoContainer: {
    width: '96%',
  },
});
