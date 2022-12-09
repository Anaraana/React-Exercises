import React, { useReducer } from "react";

const reduceCounter = (currState, action) => {
  switch (action.type) {
    case "-1":
      return currState - action.data;
    case "-10":
      return currState - action.data;
    case "+1":
      return currState + action.data;
    case "+10":
      return currState + action.data;
      default:
        break;
  }
};

export default function Counter() {
  const [counter, updateCounter] = useReducer(reduceCounter, 0);
  return (
    <div>
      <div>{counter}</div>
      <button
        onClick={() => {
          updateCounter({ type: "-1", data: 1 });
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          updateCounter({ type: "-10", data: 10 });
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          updateCounter({ type: "+1", data: 1 });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          updateCounter({ type: "+10", data: 10 });
        }}
      >
        +10
      </button>
    </div>
  );
}
