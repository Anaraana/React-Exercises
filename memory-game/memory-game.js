import React, { useEffect, useState } from "react";
import "./memory-game.css";

import {
  Gi3DGlasses,
  GiAbstract004,
  GiAbstract042,
  GiAbstract069,
  GiAbstract096,
  GiAirBalloon,
  GiAllSeeingEye,
  GiAcorn,
} from "react-icons/gi";
const cardImages = [
  { image: Gi3DGlasses, name: "glasses" },
  { image: GiAbstract004, name: "castle" },
  { image: GiAbstract042, name: "hanzi" },
  { image: GiAbstract069, name: "circle" },
  { image: GiAbstract096, name: "bomb" },
  { image: GiAirBalloon, name: "airballoon" },
  { image: GiAllSeeingEye, name: "seeingeye" },
  { image: GiAcorn, name: "acorn" },
];

const MemoryGame = () => {
  // a state that saves a list of cards - array (making it a state so that we can shuffle later)
  const [saveCards, setSaveCards] = useState([...cardImages, ...cardImages]);

  // a state that saves whose turn it is - boolean
  // a state that saves all the turned cards, so it stays flipped - array
  const [turnCards, setTurnCards] = useState([]);
  // a state that saves the 2 flipped cards - object (keys would be locations, values would be cards)
  const [twoFlippedCards, setTwoFlippedCards] = useState({});
  // later add a stata that saves the scores of the players - object
  // later add a state that saves the winner result - initial value would null, when the game ends, it becomes a string
  //     const handle=(square, squareIdx)=>{
  //         if(Object.keys(twoFlippedCards).length===2){
  //             const [first,second]=Object.keys(twoFlippedCards);
  //         }

  //     if(
  //         square.name===square.name ?turnCards :"square"
  //     )

  // }
  const playAgain = () => {
    const shuffleCards = [...cardImages, ...cardImages].sort(
      () => Math.random() - 0.5
    );
  setSaveCards(shuffleCards)
  setTurnCards ([]);
  setTwoFlippedCards({});
  };

  useEffect(() => {
    const flippedCardsArray = Object.keys(twoFlippedCards);
    if (flippedCardsArray.length === 2) {
      if (
        twoFlippedCards[flippedCardsArray[0]] ===
        twoFlippedCards[flippedCardsArray[1]]
      ) {
        console.log("yes");

        setTimeout(() => {
          setTurnCards((currState) => {
            return [...currState, twoFlippedCards[flippedCardsArray[0]]];
          });
          setTwoFlippedCards({});
        }, 1500);
      } else {
        console.log("no");

        setTimeout(() => {
          setTwoFlippedCards({});
        }, 1500);
      }
    }
  });

  // a function that handles a card click
  // it should update the currently flipped cards state, so that the cards flip immediately
  // depending on how many of the 2 current flipped cards are flipped, check if the cards match

  console.log(twoFlippedCards);

  return (
    <div className="memory-game-big-container">
    <div className="memory-game-name-style">
      <span><h2>Memory Game</h2></span>
      <button onClick={playAgain}>Play again</button>
      <div className="memory-container">
        {saveCards.map((square, squareIdx) => {
          return (
            <button
              className="memory-button"
              key={squareIdx}
              onClick={() => {
                setTwoFlippedCards((currState) => {
                  return {
                    ...currState,
                    [squareIdx]: square.name,
                  };
                });
              }}
            >
              {twoFlippedCards[squareIdx] || turnCards.includes(square.name) ? (
                <square.image />
              ) : (
                "?"
              )}
            </button>
          );
        })}

        {/* render the cards */}
        {/* each card has a click event handler  */}
      </div>
    </div>
    </div>
  );
};

export default MemoryGame;
