import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar";
import AppBarNavigation from "../components/AppBarNavigation";
import Main from "../components/Main";
import Footer from "../components/Footer";
import styles from "./ChatPage.module.css";

const ChatPage: FunctionComponent = () => {
  return (
    <div className={styles.chatpage}>
      <Sidebar />
      <div className={styles.secondcolumn}>
        <AppBarNavigation />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default ChatPage;
