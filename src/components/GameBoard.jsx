import axios, { all } from "axios";
import { useEffect, useRef, useState } from "react";
import GameCard from "./GameCard";

function GameBoard({ cardList }) {
  return (
    <div className="game-board">
      <ul className="card-list">{cardList}</ul>
    </div>
  );
}

export default GameBoard;
