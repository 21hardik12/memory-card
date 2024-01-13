import { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import Logo from "./Logo";
import ScoreBoard from "./ScoreBoard";
import axios from "axios";
import GameCard from "./GameCard";

const baseUrl = "https://rickandmortyapi.com/api/character";

function GamePage({ difficulty }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [allCharacters, setAllCharacters] = useState(null);
  const [cardList, setCardList] = useState([]);
  const [currentGame, setCurrentGame] = useState(0);

  let noOfGames = 0;
  let noOfCards = 0;
  if (difficulty === 'easy') {
    noOfGames = 5;
    noOfCards = 3;
  } else if (difficulty === 'medium') {
    noOfGames = 7;
    noOfCards = 4;
  } else if (difficulty === 'hard') {
    noOfGames = 10;
    noOfCards = 5;
  }

  useEffect(() => {
    const fetchData = () => {
        const randomIds = Array.from({length: noOfGames*noOfCards}, () => Math.floor(Math.random() * 826 + 1))
        axios.get(baseUrl + '/' + randomIds.toString()).then(response => {
            setAllCharacters(response.data.map(character => {
                return {id: character.id, name: character.name, image: character.image};
            }))
        }).catch(error => {
            console.log(error);
        })
    }

    let ignore = false;
    if (!ignore) {
        fetchData();        
    }

    return () => {
        ignore = true;
    }
  }, [])

  if (allCharacters) {
    for (let i = 0; i < noOfCards; i++) {
        let randomCard = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        cardList[i] = <li key={randomCard.id}>
                <GameCard url={randomCard.image} name={randomCard.name}></GameCard>
        </li>
    }
  }

  return (
    <div className="game-page">
      <Logo></Logo>
      <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
      <GameBoard cardList={cardList}></GameBoard>
      <div className="current-game">{currentGame}/{noOfGames}</div>
    </div>
  );
}

export default GamePage;
