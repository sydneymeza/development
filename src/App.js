import logo from "./logo.svg";
import "./App.css";
import songData from "./assets/song-data.json";
import Songs from "./components/Songs";
import Playlist from "./components/Playlist";
import { useState } from "react";

function App() {

  const [playlist, updatePlaylist]= useState([]);

  return (
    <div className="App">
      <div className="mainSide">
        <div className="top">
          <h1>Make a Playlist</h1>
        </div>

        <div className="songCards">
          <Songs />
        </div>
      </div>
      <div className="playlistSection">
        <Playlist playlist={playlist}/>
      </div>
    </div>
  );
}

export default App;
