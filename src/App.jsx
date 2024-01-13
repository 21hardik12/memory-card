import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Utility from "./components/Utility";
import BackgroundVid from "./components/BackgroundVid";
import GamePage from "./components/GamePage";

function App() {
  const [difficulty, setDifficulty] = useState(null);

  return (
    <div className="content">
      <BackgroundVid></BackgroundVid>
      {difficulty ? (
        <GamePage difficulty={difficulty}></GamePage>
      ) : (
        <HomePage setDifficulty={setDifficulty}></HomePage>
      )}
      <Utility></Utility>
    </div>
  );
}

export default App;
