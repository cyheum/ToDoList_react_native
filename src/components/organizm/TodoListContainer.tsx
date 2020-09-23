import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import useGetDoList from "../../hooks/useGetDoList";
import ToDoCheckContent from "../molecules/ToDoCheckContent";

export default function TodoListContainer({ toggle }: any) {
  const { toDoList } = useGetDoList();

  const renderItem = (
    item: any,
    index: number
  ): JSX.Element | undefined | null => {
    if (toggle !== "toDo" && !item.checked) return;
    if (toggle === "toDo" && item.checked) return;
    return (
      <ToDoCheckContent
        content={item.text}
        isChecked={item.checked}
        index={index}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={toDoList}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={(item: any, index) => item.text + index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 15,
  },
});
