import { useState } from "react";

function Utility() {
    const [music, setMusic] = useState(true);
    const [volume, setVolume] = useState(true);
    const [help, setHelp] = useState(true);

    return (
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
    );
}

export default Utility;