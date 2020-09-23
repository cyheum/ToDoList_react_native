import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { deleteContent } from "../../modules/store/store";
import useGetDoList from "../../hooks/useGetDoList";
import { backColor } from "../../styles/common";

interface itemProps {
  index: number;
}

export default function DeleteButton({ index }: itemProps) {
  const dispatch = useDispatch();
  const { toDoList } = useGetDoList();

  const onDeleteContent = () => {
    const newDoList = toDoList.filter((el: any, idx: number) => idx !== index);

    dispatch(deleteContent(newDoList));
  };

  return (
    <TouchableOpacity onPress={() => onDeleteContent()}>
      <View style={[styles.container]}>
        <Text>🗑</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backColor.lightGray,
  },
});
