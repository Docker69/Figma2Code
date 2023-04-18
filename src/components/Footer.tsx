import { FunctionComponent, memo } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = memo(() => {
  return (
    <div className={styles.footer}>
      <div className={styles.startTypingWrapper}>
        <div className={styles.startTyping}>Start typing...</div>
      </div>
      <div className={styles.paperAirplaneWrapper}>
        <img
          className={styles.paperAirplaneIcon}
          alt=""
          src="/paperairplane.svg"
        />
      </div>
    </div>
  );
});

export default Footer;
