import backgroundVid from '../assets/background.mp4'
import { useState } from 'react'

function HomePage() {
  const [music, setMusic] = useState(true);
  const [volume, setVolume] = useState(true);
  const [help, setHelp] = useState(true);

  return (
    <div className="home-page">
      <video className="videoTag" muted>
        <source src={backgroundVid} type="video/mp4" />
      </video>
      <div className="logo">
        <img src="src\assets\logo.svg" alt="rick and morty logo" />
      </div>
      <div className="title">Memory Game</div>
      <ul className="difficulty">
        <li>
          <button>Easy</button>
        </li>
        <li>
          <button>Medium</button>
        </li>
        <li>
          <button>Hard</button>
        </li>
      </ul>
      <ul className="utility">
        <li>
          <button className="volume-btn" onClick={() => setVolume(!volume)}>
            {volume ? (
              <img src="src\assets\volume_on.svg"></img>
            ) : (
              <img src="src\assets\volume_off.svg"></img>
            )}
          </button>
        </li>
        <li>
          <button className="music-btn" onClick={() => setMusic(!music)}>
            {music ? (
              <img src="src\assets\music_on.svg"></img>
            ) : (
              <img src="src\assets\music_off.svg"></img>
            )}
          </button>
        </li>
        <li>
          <button className="help-btn" onClick={() => setHelp(!help)}>
            {help ? (
              <img src="src\assets\help.svg"></img>
            ) : (
              <img src="src\assets\help_close.svg"></img>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
