import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import useGetDoList from "../../hooks/useGetDoList";
import ToDoCheckContent from "../molecules/ToDoCheckContent";

export default function TodoListContainer({ toggle }: any) {
  const { toDoList } = useGetDoList();

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    if (toggle !== "toDo" && !item.checked) return <View />;
    if (toggle === "toDo" && item.checked) return <View />;
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
        renderItem={renderItem}
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
