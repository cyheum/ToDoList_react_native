import React, { useState, useEffect } from "react";
import { ScrollView, Keyboard, KeyboardEvent } from "react-native";
import useGetDoList from "../../hooks/useGetDoList";
import ToDoListContainer from "../../components/organizm/TodoListContainer";
import BottomAddBar from "../../components/bar/BottomAddBar";
import WhenEmpty from "../../components/item/WhenEmpty";

export default function ToDoList() {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const { toDoList } = useGetDoList();

  const onKeyboardDidShow = (e: KeyboardEvent): void => {
    setKeyboardHeight(e.endCoordinates.height);
  };

  const onKeyboardDidHide = (): void => {
    setKeyboardHeight(0);
  };

  const CheckedNum = toDoList.filter((item: any) => item.checked === false)
    .length;

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", onKeyboardDidShow);
    Keyboard.addListener("keyboardWillHide", onKeyboardDidHide);
    return (): void => {
      Keyboard.removeListener("keyboardWillShow", onKeyboardDidShow);
      Keyboard.removeListener("keyboardWillHide", onKeyboardDidHide);
    };
  }, []);

  return (
    <>
      <ScrollView>
        {(toDoList.length < 1 || CheckedNum < 1) && (
          <WhenEmpty text={"할 일을 추가하세요!"} />
        )}
        <ToDoListContainer toggle={"toDo"} />
      </ScrollView>
      <BottomAddBar
        keyboardHeight={keyboardHeight > 0 ? keyboardHeight - 30 : 0}
      />
    </>
  );
}
