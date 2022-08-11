import React, { memo, useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Text,
  Pressable,
} from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { nextTodoId, Todo, todosState } from '../atoms/todos';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  inputWrapper: {
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  todos: {
    flex: 1,
  },
  todo: {
    flexDirection: 'row',
  },
  toggle: {
    justifyContent: 'center',
    flex: 1,
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
  },
});

interface IBlackButton {
  onPress(): void;
  title: string;
}

function BlackButton({ onPress, title }: IBlackButton) {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      android_ripple={{ color: 'white' }}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

function TodoItem({ id, text, done }: Todo) {
  const set = useSetRecoilState(todosState);

  const onToggle = () => {
    set((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      }),
    );
  };

  const onRemove = () => {
    set((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.todo}>
      <Pressable onPress={onToggle} style={styles.toggle}>
        <Text style={done && styles.doneText}>{text}</Text>
      </Pressable>

      <BlackButton onPress={onRemove} title="삭제" />
    </View>
  );
}

function Todos() {
  const todos = useRecoilValue(todosState);

  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  const ListFooterComponent = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  return (
    <FlatList
      style={styles.todos}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem id={item.id} done={item.done} text={item.text} />
      )}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListFooterComponent={ListFooterComponent}
    />
  );
}

function TodoInput() {
  const [text, setText] = useState('');

  const set = useSetRecoilState(todosState);
  const nextId = useRecoilValue(nextTodoId);

  const onPress = () => {
    set((prev) =>
      prev.concat({
        id: nextId,
        text,
        done: false,
      }),
    );

    setText('');
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 입력하세요"
        value={text}
        onChangeText={setText}
      />
      <BlackButton onPress={onPress} title="등록" />
    </View>
  );
}

function TodoApp() {
  return (
    <SafeAreaView style={styles.block}>
      <Todos />

      <TodoInput />
    </SafeAreaView>
  );
}

export default memo(TodoApp);
