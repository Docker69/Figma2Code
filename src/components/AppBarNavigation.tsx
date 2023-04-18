import { FunctionComponent } from "react";
import Tabs from "./Tabs";
import Account from "./Account";
import styles from "./AppBarNavigation.module.css";

const AppBarNavigation: FunctionComponent = () => {
  return (
    <nav className={styles.appBarNavigation}>
      <div className={styles.logo}>
        <div className={styles.spacerhorizontal}>
          <div className={styles.frame}>
            <div className={styles.spacer} />
          </div>
        </div>
        <div className={styles.logoipsum}>
          <img className={styles.shapeIcon} alt="" src="/shape.svg" />
        </div>
      </div>
      <div className={styles.spacerhorizontal}>
        <div className={styles.frame}>
          <div className={styles.spacer} />
        </div>
      </div>
      <Tabs />
      <div className={styles.spacerhorizontal2}>
        <div className={styles.frame}>
          <div className={styles.spacer} />
        </div>
      </div>
      <Account />
      <div className={styles.spacerhorizontal}>
        <div className={styles.frame}>
          <div className={styles.spacer} />
        </div>
      </div>
    </nav>
  );
};

export default AppBarNavigation;
