import { FunctionComponent } from "react";
import styles from "./Main.module.css";

const Main: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.helloMrRobotoWrapper}>
        <b className={styles.helloMrRoboto}>Hello Mr. Roboto</b>
      </div>
    </div>
  );
};

export default Main;
