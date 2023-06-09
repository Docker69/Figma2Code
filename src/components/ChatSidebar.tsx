import { FunctionComponent, useContext, useEffect } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { ChatContext, SET_DRAWER_STATE, SET_NEW_CHAT_DIALOG_STATE } from "../context/ChatProvider";
import NewChatDialog from "../dialogs/NewChatDialog";

const ChatSidebar: FunctionComponent = () => {
  const drawerWidth = 240;
  const { state, dispatch } = useContext(ChatContext);

  // Set the state of the Mobile Drawer
  const setDrawerState = () => {
    dispatch({ type: SET_DRAWER_STATE, payload: !state.mobileDrawerOpen });
  };

  // Set the state of the New Chat Dialog
  const openNewChatDialog = () => {
    dispatch({
      type: SET_NEW_CHAT_DIALOG_STATE,
      payload: true,
    });
  };
  
  useEffect(() => {
    console.log("state.mobileDrawerOpen", state.mobileDrawerOpen);
  }, [state.mobileDrawerOpen]);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem key="New Chat" disablePadding>
          <ListItemButton onClick={openNewChatDialog}>
            <ListItemIcon>
              <AddCommentIcon />
            </ListItemIcon>
            <ListItemText primary={"New Chat"} />
          </ListItemButton>
        </ListItem>
      </List>
      <NewChatDialog />
    </div>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={state.mobileDrawerOpen}
        onClose={setDrawerState}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default ChatSidebar;
