import { FunctionComponent } from "react";
import { Icon, IconButton } from "@mui/material";
import styles from "./Account.module.css";

const Account: FunctionComponent = () => {
  return (
    <div className={styles.ul}>
      <IconButton color="primary">
        <Icon>arrow_forward_sharp</Icon>
      </IconButton>
      <div className={styles.spacerhorizontal}>
        <div className={styles.frame}>
          <div className={styles.spacer} />
        </div>
      </div>
      <IconButton color="primary">
        <Icon>arrow_forward_sharp</Icon>
      </IconButton>
      <div className={styles.spacerhorizontal}>
        <div className={styles.frame}>
          <div className={styles.spacer} />
        </div>
      </div>
      <IconButton color="primary">
        <Icon>arrow_forward_sharp</Icon>
      </IconButton>
      <div className={styles.spacerhorizontal}>
        <div className={styles.frame}>
          <div className={styles.spacer} />
        </div>
      </div>
      <IconButton color="primary">
        <Icon>arrow_forward_sharp</Icon>
      </IconButton>
      <div className={styles.spacerhorizontal}>
        <div className={styles.frame}>
          <div className={styles.spacer} />
        </div>
      </div>
      <IconButton color="primary">
        <Icon>arrow_forward_sharp</Icon>
      </IconButton>
      <div className={styles.spacerhorizontal}>
        <div className={styles.frame}>
          <div className={styles.spacer} />
        </div>
      </div>
      <IconButton color="primary">
        <Icon>person_sharp</Icon>
      </IconButton>
    </div>
  );
};

export default Account;
