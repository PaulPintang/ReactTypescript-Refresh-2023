import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { TextField, Button, Stack } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Typescript</h1>
      <Stack spacing={2} direction="row" justifyContent="center">
        <TextField
          id="outlined-basic"
          label="Add todo"
          variant="outlined"
          color="info"
        />
        <Button variant="contained">Add</Button>
      </Stack>
    </>
  );
}

export default App;
