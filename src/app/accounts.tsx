import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React from "react";
import AccountsList from "../components/AccountsList";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

export default function AccountsScreen() {
  const [name, setName] = useState("");
  const [cap, setCap] = useState("");
  const [tap, setTap] = useState("");

  const createAccount = () => {
    console.warn("Create Account", name);
  };

  return (
    <View style={{ gap: 5, padding: 5 }}>
      <View style={styles.header}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>

      <AccountsList />

      <View style={styles.inputRow}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
          style={styles.input}
        />
        <TextInput
          value={cap}
          onChangeText={setCap}
          placeholder="CAP %"
          style={styles.input}
        />
        <TextInput
          value={tap}
          onChangeText={setTap}
          placeholder="TAP %"
          style={styles.input}
        />
        <Entypo name="check" size={20} color="green" />
      </View>

      <Button title="Add Account" onPress={createAccount} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
  },
});