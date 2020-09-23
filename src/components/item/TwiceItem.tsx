import React from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { font } from "../../styles/common";
import { changeTab } from "../../modules/store/store";

export default function HeaderBar() {
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    tabContainer: {
      flex: 1,
    },
    tabItem: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: font.skyBlue,
      paddingVertical: 6,
    },
    text: {
      fontSize: 20,
      color: "white",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => dispatch(changeTab("toDo"))}
        >
          <Text style={styles.text}>할 일</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => dispatch(changeTab("done"))}
        >
          <Text style={styles.text}>완료된 일</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
