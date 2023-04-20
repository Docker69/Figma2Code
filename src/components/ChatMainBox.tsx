import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import ChatMessages from "./ChatMessagesGrid";

const AVATAR = "/logo50.svg";

const ChatMainBox: FunctionComponent = () => {
  return (
    <Box height="100vh" justifySelf="flex-start">
      <div>
        <ChatMessages
          side={"left"}
          avatar={AVATAR}
          messages={[
            "Hi Jenny, How r u today?",
            "Did you train yesterday",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida."
          ]}
        />
        <ChatMessages
          avatar={""}
          side={"right"}
          messages={[
            "Great! What's about you?",
            "Of course I did. Speaking of which check this out"
          ]}
        />
        <ChatMessages side={"left"} avatar={AVATAR} messages={["Im good.", "See u later."]} />
      </div>
    </Box>
  );
};

export default ChatMainBox;
