import { FunctionComponent, memo } from "react";
import { Box, TextField } from "@mui/material";

const ChatInputBox: FunctionComponent = memo(() => {
  return (
    <Box display="flex" justifySelf="flex-start">
      <TextField
        id="outlined-basic"
        label="Start typing ....."
        variant="outlined"
        fullWidth
        sx={{ml: 2, mr: 1, mb: 1}}
      />
      <Box sx={{ p: 1.5, mr: 3, justifySelf: "flex-end" }}>
        <img
          alt=""
          src="/paperairplane.svg"
        />
      </Box>
    </Box>
  );
});

export default ChatInputBox;
