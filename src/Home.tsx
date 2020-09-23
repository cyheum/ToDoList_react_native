import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { font } from "./styles/common";

export default function Home({ navigation }: { navigation: any }) {
  const styles = StyleSheet.create({
    topContainer: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: font.skyBlue,
    },
    titleContainer: {
      alignItems: "center",
    },
    title: {
      fontSize: 50,
      color: "white",
      marginVertical: 20,
    },
    buttonContainer: {
      paddingHorizontal: 60,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginVertical: 8,
      marginHorizontal: 8,
      borderRadius: 30,
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    font: {
      fontSize: 24,
      color: font.middleGray,
    },
  });

  return (
    <View style={styles.topContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ye Do List!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ToDoList")}
        >
          <Text style={styles.font}>뭘 해야 하지?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.font}>Don't Touch Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
