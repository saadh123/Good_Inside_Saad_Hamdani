import React from "react";
import Headline from "./Headline";
import styles from "../styles/Card.module.css";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";

const getStyleForCardType = (cardType) => {
  switch (cardType) {
    case "community":
      return { color: "#4DA0A1" };
    case "General Validation":
      return { color: "#8C9CB3" };
    case "Topic Learn":
      return { color: "#C488CA" };
    case "Topic Validation":
      return { color: "#B28C4D" };
    case "seasonal":
      return { color: "#BC5D13" };
    case "GI Essentials":
      return { color: "#AA52D3" };
    case "age":
      return { color: "#9AB24D" };
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
