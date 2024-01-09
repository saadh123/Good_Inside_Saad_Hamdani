// Updated CardBody component
import React from "react";
import styles from "../styles/CardBody.module.css";

// Utility function to strip HTML tags and entities
// Import cheerio
//Figure out if using trim or looping

const cheerio = require("cheerio");

// Utility function to strip HTML tags
const stripHtmlTags = (html) => {
  const $ = cheerio.load(html);
  return $.text();
};

const CardBody = ({ cardbody, headline }) => {
  const plainText = stripHtmlTags(cardbody);

  return (
    <div className={styles.cardbody}>
      {plainText === headline ? "" : plainText}
    </div>
  );
};

export default CardBody;
