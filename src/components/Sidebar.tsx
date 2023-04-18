import { FunctionComponent, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import styles from "./Sidebar.module.css";

const Sidebar: FunctionComponent = () => {
  const [expandingGroupItemAnchorEl, setExpandingGroupItemAnchorEl] =
    useState<HTMLElement | null>(null);
  const [expandingGroupItemSelectedIndex, setExpandingGroupItemSelectedIndex] =
    useState<number>(-1);

  const expandingGroupItemOpen = Boolean(expandingGroupItemAnchorEl);
  const handleExpandingGroupItemClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setExpandingGroupItemAnchorEl(event.currentTarget);
  };
  const handleExpandingGroupItemMenuItemClick = (index: number) => {
    setExpandingGroupItemSelectedIndex(index);
    setExpandingGroupItemAnchorEl(null);
  };
  const handleExpandingGroupItemClose = () => {
    setExpandingGroupItemAnchorEl(null);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img className={styles.logo50Icon} alt="" src="/logo50.svg" />
      </div>
      <div className={styles.expandinggroupitem}>
        <Button
          sx={{ width: 248 }}
          id="button-Chats"
          aria-controls="menu-Chats"
          aria-haspopup="true"
          aria-expanded={expandingGroupItemOpen ? "true" : undefined}
          onClick={handleExpandingGroupItemClick}
          color="primary"
        >
          Chats
        </Button>
        <Menu
          anchorEl={expandingGroupItemAnchorEl}
          open={expandingGroupItemOpen}
          onClose={handleExpandingGroupItemClose}
        />
      </div>
    </div>
  );
};

export default Sidebar;
