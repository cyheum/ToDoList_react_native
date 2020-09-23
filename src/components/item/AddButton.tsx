import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addContent } from "../../modules/store/store";
import useGetDoList from "../../hooks/useGetDoList";

export default function AddButton({
  newContent,
  setAddText,
}: {
  newContent: string;
  setAddText: any;
}) {
  const dispatch = useDispatch();
  const { toDoList } = useGetDoList();

  const onAddContent = (content: string) => {
    if (!content) return;
    const newDoList = [
      ...toDoList,
      {
        text: content,
        checked: false,
      },
    ];
    dispatch(addContent(newDoList));
    setAddText("");
  };

  return (
    <TouchableOpacity onPress={() => onAddContent(newContent)}>
      <View style={[styles.container]}>
        <Text>➕</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    marginHorizontal: 18,
    marginVertical: 15,
    borderColor: "rgba(0,0,0,0.3)",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "white",
  },
});
