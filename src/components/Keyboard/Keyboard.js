import React from "react";
import Key from "./Key";

function Keyboard({ keysStatus }) {
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <div className="keyboard">
      <div className="keyboard__row">
        {firstRow.map((letter) => {
          return (
            <Key key={letter} label={letter} status={keysStatus[letter]} />
          );
        })}
      </div>
      <div className="keyboard__row">
        {secondRow.map((letter) => {
          return (
            <Key key={letter} label={letter} status={keysStatus[letter]} />
          );
        })}
      </div>
      <div className="keyboard__row">
        {thirdRow.map((letter) => {
          return (
            <Key key={letter} label={letter} status={keysStatus[letter]} />
          );
        })}
      </div>
    </div>
  );
}

export default Keyboard;
