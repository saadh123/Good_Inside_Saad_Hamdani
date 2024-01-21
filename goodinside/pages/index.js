import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Home({ cards }) {
  console.log("CARDS", cards);
  // const sortedCards = cards.sort((a, b) => a.card_id - b.card_id);

  //useState to assign each card an index and display that user on the card
  const [currentIndex, setCurrentIndex] = useState(0);

  //create button event handlers to increment/decrement currentIndex, which will display different users. Use functional form - Pass in previous state value as parameter vs directly incrementing to prevent batch state renders

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(cards.length - 1, prevIndex + 1));
  };

  // Add in Math.min/max for safety layer of indexing out of bounds, even though prev/next button won't show if <=1 && >=.length
  console.log(`User at ${currentIndex} index`, cards[currentIndex]);

  return (
    <>
      <Head>
        <title>Good Inside</title>
        <meta name="description" content="Good Inside Card App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        //tab company logo
        <link rel="icon" href="/goodinside_logo.png" />
      </Head>
      <div className={styles.logo_Container}>
        <a href="https://www.goodinside.com/">
          <img
            className={styles.logo}
            src="./goodinside_logo.png"
            alt="Good Inside logo"
          />
          {/* lazy loading and auto optimization? 
          <Image
            className={styles.logo}
            src="/goodinside_logo.png"
            alt="Good Inside logo"
            width={width} // Specify the width
            height={height} // Specify the height
          /> */}
        </a>
      </div>
      <h1 className={styles.title}>Cards @ Good Inside</h1>

      {/***Main Container Div***/}
      <div className={styles.card_Container}>
        <TransitionGroup>
          <CSSTransition key={currentIndex} timeout={750}>
            <Card card={cards[currentIndex]} />
          </CSSTransition>
        </TransitionGroup>
      </div>
      {/* Display buttons for navigating to the previous and next cards */}

      <div className={styles.buttons}>
        {/* Only show Previous button if >=1 */}

        {currentIndex !== 0 && (
          <button
            className={styles.button}
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
        )}
        {/* Only show Next button if <= length -1 */}

        {currentIndex !== cards.length - 1 && (
          <button
            className={styles.button}
            onClick={handleNextClick}
            disabled={currentIndex === cards.length - 1}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await fetch(`https://bff.goodinside.dev/api/p/cards/mock`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const cards = await res.json();

    return {
      props: {
        cards,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return {
      props: {
        cards: [],
      },
    };
  }
};

//fetch Data using useEffect, empty [] for initial mount only.
//useState and initialize to empty array, to store JSON API data
// const [users, setUsers] = useState([]);

// useEffect(() => {
//   //async/await vs .then nested calls
//   const fetchData = async () => {
//     try {
//       const res = await fetch(`https://bff.goodinside.dev/api/p/cards/mock`, {
//         headers: {
//           Accept: "application/json",
//         },
//       });
//       const userData = (await res.json()).results;
//       setUsers(userData);
//     } catch (error) {
//       console.log(`There is an error fetching data: ${error}`);
//     }
//   };
//   fetchData();
// }, []);
//if choosing [currentIndex] dependency, get flashes of pic changes which means there is a rendering issue due to async nature of fetchData call
