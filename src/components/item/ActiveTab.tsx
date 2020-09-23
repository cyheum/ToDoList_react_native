import React from "react";
import { View, StyleSheet } from "react-native";
import { backColor } from "../../styles/common";

export default function ActiveTab({ activeTab }: { activeTab: string }) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    tabItem: {
      flex: 1,
      height: 6,
      backgroundColor: backColor.skyBlue,
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.tabItem,
          activeTab === "toDo" && { backgroundColor: backColor.default },
        ]}
      />
      <View
        style={[
          styles.tabItem,
          activeTab === "done" && { backgroundColor: backColor.default },
        ]}
      />
    </View>
  );
}
