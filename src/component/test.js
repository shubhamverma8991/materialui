import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function Test() {
  return (
    <div>
      <h4>Test Component</h4>
      <Stack spacing={2} direction="column">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <br></br>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </div>
  );
}
