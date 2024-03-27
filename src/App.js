import logo from "./logo.svg";
import "./App.css";
import songData from "./assets/song-data.json";
import Songs from "./components/Songs";


function App() {
  var ogSongList = [];

  songData.map(function (item) {
    ogSongList.push({
      song: item.song,
      image: item.image,
      artist: item.artist,
      length: item.length,
    });
  });

  const [songList, updateSongList] = ogSongList;

  return (
    <div className="App">
      <div className="top">
        <h1>Make a Playlist</h1>
      </div>
      <div className="Info">
        <div className="songCards">
          <Songs/>
        </div>
      </div>
      <div className="playlistSection">
        <h2>Playlist #n</h2>
      </div>
    </div>
  );
}

export default App;
