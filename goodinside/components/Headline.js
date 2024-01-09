import React from "react";
import styles from "../styles/Headline.module.css";

const Headline = ({ headline }) => {
  return (
    <div className={styles.headline}>
      {/* cards_headline is sometimes null, edge case */}
      <p>{headline ? headline : "Check back tomorrow for a new headline!"}</p>
    </div>
  );
};

export default Headline;
