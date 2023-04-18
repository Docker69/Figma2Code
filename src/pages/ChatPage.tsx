import { FunctionComponent } from "react";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import AppBarNavigation from "../components/AppBarNavigation";
import styles from "./ChatPage.module.css";

const ChatPage: FunctionComponent = () => {
  return (
    <div className={styles.chatpage}>
      <Main />
      <Sidebar />
      <AppBarNavigation />
    </div>
  );
};

export default ChatPage;
