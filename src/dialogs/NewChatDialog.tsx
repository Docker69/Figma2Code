import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ChatContext, SET_NEW_CHAT_DIALOG_STATE } from '../context/ChatProvider';

export default function NewChatDialog() {
  const { state, dispatch } = React.useContext(ChatContext);

  const handleClose = () => {
    dispatch({
      type: SET_NEW_CHAT_DIALOG_STATE,
      payload: false,
    });
  };

  return (
    <div>
      <Dialog open={state.chatDialogOpen} onClose={handleClose}>
        <DialogTitle>Create New Chat Session</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the desired role for the new chat.
            For example, "Customer Service" or "Helpful Developer"
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ChatGPT Role"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}