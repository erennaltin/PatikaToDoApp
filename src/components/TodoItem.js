import React, {useState, useEffect} from 'react';
import {Text, TouchableHighlight, StyleSheet, Alert} from 'react-native';

const TodoItem = props => {
  const [containerClass, setContainerClass] = useState([
    styles.container,
    styles.notDone,
  ]);
  const [textClass, setTextClass] = useState([styles.text, styles.decoration]);

  const changeContainerClass = () => {
    containerClass[1] === styles.notDone
      ? setContainerClass([styles.container, styles.Done])
      : setContainerClass([styles.container, styles.notDone]);
  };

  useEffect(() => {
    containerClass[1] === styles.notDone
      ? setTextClass([styles.text])
      : setTextClass([styles.text, styles.decoration]);
  }, [containerClass]);

  const deleteTodo = () => {
    const index = props.todos.indexOf(props.item);
    const reserve = [...props.todos];
    Alert.alert(
      'Bunu sil?',
      'Bu bildiriyi silmek istediğinizden emin misiniz?',
      [
        {
          text: 'Iptal',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            reserve.splice(index, 1);
            props.setTodos(reserve);
          },
        },
      ],
    );
  };

  return (
    <TouchableHighlight
      style={containerClass}
      onPress={changeContainerClass}
      onLongPress={deleteTodo}>
      <Text style={textClass}> {props.item.text} </Text>
    </TouchableHighlight>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
    marginBottom: 8,
    // backgroundColor: 'lightgreen',
    borderRadius: 4,
  },
  notDone: {
    backgroundColor: 'green',
  },
  Done: {
    backgroundColor: 'grey',
  },
  text: {
    color: 'white',
  },
  decoration: {
    textDecorationLine: 'line-through',
  },
});
