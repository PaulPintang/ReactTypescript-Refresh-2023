import React, { useState } from "react";
import { Stack } from "@mui/material";
import Form from "./assets/components/Form";
import List from "./assets/components/List";

export interface Task {
  id: number;
  todo: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [list, setList] = useState<Task[]>([]);

  const handleAdd = () => {
    setList((list) => [
      ...list,
      { id: Date.now(), completed: false, todo: task },
    ]); // What it does: add the new todo to list state
    setTask(""); // What it does: set the task state to empty string after add
  };

  const handleDelete = (id: number) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleComplete = (id: number) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <Stack justifyContent="center">
      <Form task={task} setTask={setTask} handleAdd={handleAdd} />
      <List
        list={list}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </Stack>
  );
};

export default App;
