import "./App.css";
import songData from "./assets/song-data.json";
import Songs from "./components/Songs";
import Playlist from "./components/Playlist";
import { useState } from "react";

// songData.forEach((item) => {
//   item.image = process.env.PUBLIC_URL + "/" + item.image;
// });


function App() {
  const [playlist, updatePlaylist] = useState([]);

  return (
    <div className="App">
      <div className="mainSide">
        <div className="top">
          <h1>Make a Playlist</h1>
        </div>
        <div className="songCards">
          <Songs songData={songData} playlist={playlist} updatePlaylist={updatePlaylist}/>
        </div>
      </div>
      <div className="playlistSection">
        <Playlist playlist={playlist} />
      </div>
    </div>
  );
}

export default App;
