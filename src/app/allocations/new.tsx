import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function NewAllocationScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "New Allocation" }} />

      <Text>New Allocation</Text>
    </View>
  );
}
