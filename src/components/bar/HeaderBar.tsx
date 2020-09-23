import React from "react";
import { View, StyleSheet } from "react-native";
import TwiceItem from "../item/TwiceItem";
import ActiveTab from "../item/ActiveTab";

export default function HeaderBar({ activeTab }: { activeTab: string }) {
  const styles = StyleSheet.create({
    container: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.18,
      shadowRadius: 10,
    },
  });

  return (
    <View style={styles.container}>
      <TwiceItem />
      <ActiveTab activeTab={activeTab} />
    </View>
  );
}
