import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderBar from "../../components/bar/HeaderBar";
import { backColor } from "../../styles/common";
import { useGetActiveTab } from "../../hooks/useGetDoList";
import ToDoList from "./ToDoList";
import DoneList from "./DoneList";

export default function YeDoList() {
  const { activeTab } = useGetActiveTab();

  return (
    <View style={styles.topContainer}>
      <HeaderBar activeTab={activeTab} />
      {activeTab === "toDo" && <ToDoList />}
      {activeTab === "done" && <DoneList />}
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: backColor.default,
  },
});
