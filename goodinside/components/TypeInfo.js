import React from "react";
import styles from "../styles/TypeInfo.module.css";

const TypeInfo = ({ type, interstitial }) => {
  return (
    <div className={styles.type}>
      <ul>
        <li>{`Type: ${type}`.toUpperCase()}</li>
        <li>{`Interstitial Type: ${interstitial}`.toUpperCase()}</li>
      </ul>
      {/* <p>{`Type: ${type}`}</p>
      <p>{`Interstitial Type: ${interstitial}`}</p> */}
    </div>
  );
};

export default TypeInfo;
