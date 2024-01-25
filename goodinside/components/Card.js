import React from "react";
import Headline from "./Headline";
import styles from "../styles/Card.module.css";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";

const getStyleForCardType = (cardType) => {
  switch (cardType) {
    case "community":
      return { color: "#88CABE" };
    case "General Validation":
      return { color: "#8C9CB3" };
    case "Topic Learn":
      return { color: "#F372C2" };
    case "Topic Validation":
      return { color: "brown" };
    case "seasonal":
      return { color: "#D97629" };
    case "GI Essentials":
      return { color: "#C76CF1" };
    case "age":
      return { color: "#E1F16C" };
    default:
      return {};
  }
};

const Card = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>{card.card_id}</div>
      <div
        className={styles.card_title}
        style={getStyleForCardType(card.card_type)}
      >
        {card.card_type &&
          card.card_type.charAt(0).toUpperCase() + card.card_type.slice(1)}
      </div>
      <div className={styles.headline}>
        {card && card.headline !== null ? (
          <Headline headline={card.headline} />
        ) : (
          <p>*Check back tomorrow for a new headline!*</p>
        )}
      </div>
      <div className={styles.cardBody}>
        <CardBody cardbody={card.body} headline={card.headline}></CardBody>
      </div>
      <div className={styles.card_footer}>
        {card && card.type && (
          <CardFooter type={card.type} interstitial={card.interstitial_type} />
        )}
      </div>
    </div>
  );
};

export default Card;
