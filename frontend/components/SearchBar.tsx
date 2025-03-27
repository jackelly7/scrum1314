import React from "react";
import styles from "./FriendsPage.module.css";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchContainer}>
      <i className={styles.searchIcon} />
    </div>
  );
};

export default SearchBar;
