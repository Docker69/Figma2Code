import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Tabs.module.css";

const Tabs: FunctionComponent = () => {
  return (
    <div className={styles.tabs}>
      <Button className={styles.tab} variant="text" color="primary">
        Tab
      </Button>
      <div className={styles.tab1}>
        <div className={styles.container}>
          <div className={styles.icon}>
            <img
              className={styles.starfilledIcon}
              alt=""
              src="/starfilled1.svg"
            />
          </div>
          <Button className={styles.button} variant="text" color="primary">
            Tab
          </Button>
        </div>
      </div>
      <div className={styles.tab1}>
        <div className={styles.container}>
          <div className={styles.icon}>
            <img
              className={styles.starfilledIcon}
              alt=""
              src="/starfilled1.svg"
            />
          </div>
          <Button className={styles.button} variant="text" color="primary">
            Tab
          </Button>
        </div>
      </div>
      <div className={styles.tab1}>
        <div className={styles.container}>
          <div className={styles.icon}>
            <img
              className={styles.starfilledIcon}
              alt=""
              src="/starfilled1.svg"
            />
          </div>
          <Button className={styles.button} variant="text" color="primary">
            Tab
          </Button>
        </div>
      </div>
      <div className={styles.tab1}>
        <div className={styles.container}>
          <div className={styles.icon}>
            <img
              className={styles.starfilledIcon}
              alt=""
              src="/starfilled1.svg"
            />
          </div>
          <Button className={styles.button} variant="text" color="primary">
            Tab
          </Button>
        </div>
      </div>
      <div className={styles.tab1}>
        <div className={styles.container}>
          <div className={styles.icon}>
            <img
              className={styles.starfilledIcon}
              alt=""
              src="/starfilled1.svg"
            />
          </div>
          <Button className={styles.button} variant="text" color="primary">
            Tab
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
