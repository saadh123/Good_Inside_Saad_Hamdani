import React from "react";
import Headline from "./Headline";
import styles from "../styles/Card.module.css";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";
//Each section of card should be separated and organized, making it easy to modularize and maintain.
//Conditionally render different background-color depending on card_type for visual UI appeal

const Card = ({ card }) => {
  console.log(card);

  return (
    // Main card div, which will house card details and sections
    <div className={styles.card}>
      <div className={styles.card_image}>{card.card_id}</div>
      <div className={styles.card_title}>
        {/* //data not available during asynch fetch, so conditional check and then render values */}
        {card && card.card_type && (
          <>
            {card.card_type.charAt(0).toUpperCase() + card.card_type.slice(1)}
          </>
        )}
      </div>

      <div className={styles.headline}>
        {/* Implement Headline Component for reusability and modularity. */}
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
        {/* implement TypeInfo Component for dynamic content, incase we need to update UI easily  */}
        {card && card.type && (
          <CardFooter type={card.type} interstitial={card.interstitial_type} />
        )}
      </div>
    </div>
  );
};

export default Card;
