import React, { useState } from "react";
import './tic-tac-toe.css' 

const WinnerChance = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];
const TicTacToe = () => {
  const [currSymbol, setCurrSymbol] = useState(firstSymbol);
  const [clickedTiles, setclickedTiles] = useState({});
  const [isWin, setIsWin] = useState(false);
  return (
    <div className="big-container">

      <button className="tic-tac-restart-button"
        onClick={() => {
          setIsWin(false);
          setCurrSymbol(firstSymbol);
          setclickedTiles({});
        }}
      >
        Restart
      </button>
      <div>{isWin ? "Win" : ""}</div>
      <div className="tic-tac-container">
        {[...Array(9)].map((tile, tileLoc) => {
          return (
            <button
              className="tic-tac-button"
              key={tileLoc}
              onClick={() => {
                // if the tile has X or O, do not do nothing
                if (clickedTiles[tileLoc] || isWin) return;
                const tileDataTemp = { ...clickedTiles, [tileLoc]: currSymbol };
                console.log(clickedTiles);
                setclickedTiles(tileDataTemp);
                const currSymbolLoc = Object.keys(tileDataTemp).filter(
                  (key) => tileDataTemp[key] === currSymbol
                );
                WinnerChance.forEach((winCh) => {
                  if (
                    winCh.every((element) =>
                      currSymbolLoc.includes(element.toString())
                    )
                  ) {
                    setIsWin(true);
                  }
                });

                setCurrSymbol((currState) => {
                  return currState === symbolA ? symbolB : symbolA;
                });
              }}
            >
              {clickedTiles[tileLoc]}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const symbolA = "X";
const symbolB = "O";
const firstSymbol = symbolA;

export default TicTacToe
