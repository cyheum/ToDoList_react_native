import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { font } from "../../styles/common";

export default function WhenEmpty({ text }: { text: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    marginVertical: 15,
  },
  text: {
    fontSize: 24,
    color: font.middleGray,
  },
});
