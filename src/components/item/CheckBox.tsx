import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CheckBox({ isChecked }: { isChecked?: boolean }) {
  return (
    <View style={[styles.container, isChecked && { backgroundColor: "black" }]}>
      {isChecked && <Text style={{ color: "white" }}>v</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    marginHorizontal: 8,
    borderColor: "rgba(0,0,0,0.6)",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "white",
  },
});
