import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import HeaderBar from "../../components/bar/HeaderBar";
import { backColor } from "../../styles/common";
import { useGetActiveTab } from "../../hooks/useGetDoList";
import ToDoListContainer from "../../components/organizm/ToDoListContainer";
import BottomAddBar from "../../components/bar/BottomAddBar";

export default function DoneList() {
  return (
    <ScrollView>
      <ToDoListContainer toggle={"done"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: backColor.default,
  },
});
