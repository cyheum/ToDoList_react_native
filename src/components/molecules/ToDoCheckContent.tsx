import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import CheckBox from "../item/CheckBox";
import { backColor } from "../../styles/common";
import { TouchableOpacity } from "react-native-gesture-handler";
import { checkToggle } from "../../modules/store/store";
import useGetDoList from "../../hooks/useGetDoList";
import { font } from "../../styles/common";
import DeleteButton from "../item/DeleteButton";

interface itemProps {
  content: string;
  isChecked: boolean;
  index: number;
}

export default function ToDoCheckContent({
  content,
  isChecked,
  index,
}: itemProps) {
  const dispatch = useDispatch();
  const checkItem = (item: any) => dispatch(checkToggle(item));
  const { toDoList } = useGetDoList();
  const checkReverse = [...toDoList];
  checkReverse[index] = { text: content, checked: !isChecked };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => checkItem(checkReverse)}>
        <View style={styles.textBox}>
          <CheckBox isChecked={isChecked} />
          <Text style={[styles.text, isChecked && styles.checked]}>
            {content}
          </Text>
          <DeleteButton index={index} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  textBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: backColor.lightGray,
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: "400",
  },
  checked: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: font.middleGray,
  },
});
