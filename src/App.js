import logo from "./logo.svg";
import "./App.css";
import songData from "./assets/song-data.json";
import Songs from "./components/Songs";
import Playlist from "./components/Playlist";

function App() {

  return (
    <div className="App">
      <div className="top">
        <h1>Make a Playlist</h1>
      </div>
      <div className="Info">
        <div className="songCards">
          <Songs />
        </div>
      </div>
      <div className="playlistSection">
        <Playlist />
      </div>
    </div>
  );
}

export default App;
