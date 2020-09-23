import React from "react";
import { ScrollView } from "react-native";
import ToDoListContainer from "../../components/organizm/TodoListContainer";

export default function DoneList() {
  return (
    <ScrollView>
      <ToDoListContainer toggle={"done"} />
    </ScrollView>
  );
}
