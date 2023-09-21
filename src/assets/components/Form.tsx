import React from "react";
import { TextField, Stack, Button } from "@mui/material";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

const Form = ({ task, setTask, handleAdd }: Props) => {
  return (
    <Stack spacing={2} direction="row" pt={3}>
      <TextField
        id="outlined-basic"
        label="Add todo"
        variant="outlined"
        color="info"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </Stack>
  );
};

export default Form;
