import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function AccountListItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Profit</Text>
      <Text style={styles.percentage}>10%</Text>
      <Text style={styles.percentage}>20%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  percentage: {},
});
