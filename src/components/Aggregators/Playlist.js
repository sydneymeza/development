import { useState } from "react";
import "./Playlist.css";
//props.playlist -> the songs added to the current playlist

export default function Playlist(props) {
  const [numPlaylist, setNumPlaylist] = useState(1);

  function resetClick() {
    setNumPlaylist(numPlaylist + 1);
  }

  if (props.playlist.length === 0) {
    return (
      <div className="playlist-area">
        <div className="playlist" aria-label="playlist">
          <div>
            <h1>Playlist #{numPlaylist}</h1>
            <p>Nothing is here yet!</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="playlist">
        <div className="playlist" aria-label="playlist">
          <div>
            <h1>Playlist #{numPlaylist}</h1>
            {props.playlist.map((song) => (
              <div className="playlist-info">
                <p>{song.title}</p>
                <p className="playlist-length">{song.length}</p>
              </div>
            ))}
          </div>
          <div className="states">
            <div className="playlist-info">
              <h2>Total songs: </h2>
              <h2>{props.playlist.length}</h2>
            </div>

            <div className="playlist-info">
              <h2>Total length:</h2>
            </div>
          </div>
          <div>
            <button className="blueButton" onClick={resetClick}>
              reset
            </button>
          </div>
          {/* <h1>Total: ${props.cartPrice}</h1> */}
        </div>
      </div>
    );
  }
}
