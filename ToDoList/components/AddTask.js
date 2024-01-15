import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddTask = ({ onAddTask }) => {
  const [titles, settitle] = useState("");

  const handleAddtask = () => {
    if (titles.trim() !== "") {
      onAddTask(titles);
      settitle("");
    }
  };

  return (
    <View style={styles.addTodoForm}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task you have in mind"
        value={titles}
        onChangeText={(text) => settitle(text)}
        keyboardType="default"
        returnKeyType="done"
      />
      <Button title="Add Task" onPress={handleAddtask} />
    </View>
  );
};

const styles = StyleSheet.create({
  addTodoForm: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddTask;
