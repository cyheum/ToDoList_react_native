import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CheckBox from "../item/CheckBox";
import AddButton from "../item/AddButton";

export default function BottomAddBar({
  keyboardHeight,
}: {
  keyboardHeight: number;
}) {
  const [addText, setAddText] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View
        style={[styles.textContainer, { paddingBottom: 40 + keyboardHeight }]}
      >
        <CheckBox isChecked={true} />
        <TextInput
          style={styles.text}
          placeholder={"할일 추가"}
          value={addText}
          onChangeText={(text) => setAddText(text)}
        ></TextInput>
        <AddButton newContent={addText} setAddText={setAddText} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 7,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    backgroundColor: "white",
  },
  text: {
    flex: 1,
    fontSize: 24,
    marginLeft: 7,
  },
});
