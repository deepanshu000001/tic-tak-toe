import { toContainElement } from "@testing-library/jest-dom/matchers";
import "./App.css";
import React, { useState } from "react";

let ticTacToeArr = new Array(9).fill("empty");

function App() {
  // const [ticTacToeArr, setTicTacToeArr] = useState(new Array(9).fill("empty"));
  /* circle, cross, empty */
  const [isCross, setIsCross] = useState(true);
  const [gameEndMessage, setGameEndMessage] = useState(""); // Winner, Draw

  function checkIsWinnerOrDraw() {
    if (
      ticTacToeArr[0] == ticTacToeArr[1] &&
      ticTacToeArr[1] === ticTacToeArr[2] &&
      ticTacToeArr[0] != "empty"
    ) {
      setGameEndMessage(`${ticTacToeArr[0]} won`);
      return;
    }
    if (
      ticTacToeArr[3] == ticTacToeArr[4] &&
      ticTacToeArr[4] === ticTacToeArr[5] &&
      ticTacToeArr[3] != "empty"
    ) {
      setGameEndMessage(`${ticTacToeArr[0]} won`);
      return;
    }
    if (
      ticTacToeArr[6] == ticTacToeArr[7] &&
      ticTacToeArr[7] === ticTacToeArr[8] &&
      ticTacToeArr[6] != "empty"
    ) {
      setGameEndMessage(`${ticTacToeArr[0]} won`);
      return;
    }
    if (
      ticTacToeArr[0] == ticTacToeArr[3] &&
      ticTacToeArr[3] === ticTacToeArr[6] &&
      ticTacToeArr[0] != "empty"
    ) {
      setGameEndMessage(`${ticTacToeArr[0]} won`);
      return;
    }
    if (
      ticTacToeArr[1] == ticTacToeArr[4] &&
      ticTacToeArr[4] === ticTacToeArr[7] &&
      ticTacToeArr[1] != "empty"
    ) {
      setGameEndMessage(`${ticTacToeArr[0]} won`);
      return;
    }
    if (
      ticTacToeArr[2] == ticTacToeArr[5] &&
      ticTacToeArr[5] === ticTacToeArr[8] &&
      ticTacToeArr[2] != "empty"
    ) {
      setGameEndMessage(`${ticTacToeArr[0]} won`);
      return;
    }
    if (
      ticTacToeArr[0] == ticTacToeArr[4] &&
      ticTacToeArr[4] === ticTacToeArr[8] &&
      ticTacToeArr[0] != "empty"
    ) {
      setGameEndMessage(`${ticTacToeArr[0]} won`);
      return;
    }
    if (
      ticTacToeArr[2] == ticTacToeArr[4] &&
      ticTacToeArr[4] === ticTacToeArr[6] &&
      ticTacToeArr[2] != "empty"
    ) {
      setGameEndMessage(`${ticTacToeArr[0]} won`);
      return;
    }
    // for Draw
    let isDrwa = true;
    for (let i = 0; i < ticTacToeArr.length; i++) {
      if (ticTacToeArr[i] === "empty") {
        isDrwa = false;
        break;
      }
    }

    if (isDrwa) {
      setGameEndMessage("The game is Draw");
    }
  }

  function updateTicTacToe(index) {
    if (gameEndMessage) {
      console.log("Already game has ended");
      return;
    }
    if (ticTacToeArr[index] != "empty") {
      console.log("Position already filled, try another position");
      return;
    }
    // const tempArr = [...ticTacToeArr];
    ticTacToeArr[index] = isCross ? "cross" : "circle";
    // setTicTacToeArr(tempArr);
    setIsCross(!isCross);

    checkIsWinnerOrDraw();
  }

  function resetGame() {
    ticTacToeArr = new Array(9).fill("empty");
    setIsCross(true);
    setGameEndMessage("");
  }
  return (
    <div className="container">
      <div>
        <h1>It's {isCross ? "cross" : "circle"}'s turn</h1>
      </div>
      <div className="gridContainer">
        {ticTacToeArr.map((item, index) => {
          return (
            <div
              key={index}
              className="gridItems"
              onClick={() => updateTicTacToe(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
      {gameEndMessage ? (
        <div>
          <h2>{gameEndMessage}</h2>
        </div>
      ) : null}

      <div className="reset">
        {gameEndMessage ? (
          <button onClick={() => resetGame()}>Reset Game</button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
// rfc

// Featrures ->
/*1)Reset -> when their is a draw or winnner declared (game
  is not ongoing) -> condationally I would appear a button 
  -> reset 
  2) we would be displaying who the winner is at the end
  3) React-Toastify -> Toast (popup messages is Toast) -> 
  Bonus -> To choose the starting player -> 
*/

/*
Interview Question on key -> 
1) Why we need Key
=> we use for optimaization.if particular element change then that only element will be render using id.
2) Why we shouldn't use arry indexex as keys 
=> Because it was not unique if we add or delete somthing befor all index will be change and keys also it will render whole thing.
*/
