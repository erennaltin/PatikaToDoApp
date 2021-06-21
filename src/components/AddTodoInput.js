import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from 'react-native';

const AddTodoInput = props => {
  const [todo, setTodo] = useState('');
  const [id, setId] = useState(0);

  const setTodoList = () => {
    const newTodo = {
      text: todo,
      id: id,
    };
    props.setTodos([...props.todos, newTodo]);
    setId(id + 1);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="white"
        style={styles.input}
        onChangeText={value => setTodo(value)}
        value={todo}
        placeholder="Bugün ne yapacaksın?"
      />
      <TouchableOpacity style={styles.button} onPress={setTodoList}>
        <Text style={styles.buttonText}> Kaydet </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodoInput;

const styles = StyleSheet.create({
  container: {
    width: '96%',
    height: 100,
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    color: 'white',
    backgroundColor: 'slategray',
    marginBottom: 8,
  },
  input: {
    width: '94%',
    flex: 1,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightblue',
  },
  button: {
    width: '94%',
    flex: 1,
    flexGrow: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    width: '90%',
    textAlign: 'center',
    paddingBottom: 6,
    paddingTop: 6,
    backgroundColor: 'darkgrey',
    color: 'white',
    borderRadius: 6,
  },
});
