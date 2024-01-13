
function HomePage({setDifficulty}) {
  return (
    <div className="home-page">      
      <div className="logo">
        <img src="src\assets\logo.svg" alt="rick and morty logo" />
      </div>
      <div className="title">Memory Game</div>
      <ul className="difficulty">
        <li>
          <button onClick={() => setDifficulty('easy')}>Easy</button>
        </li>
        <li>
          <button onClick={() => setDifficulty('medium')}>Medium</button>
        </li>
        <li>
          <button onClick={() => setDifficulty('hard')}>Hard</button>
        </li>
      </ul>      
    </div>
  );
}

export default HomePage;
