import logo from './logo.svg';
import './App.css';
import songData from "./assets/song-data.json";
import SongCard from "./components/SongCard";

function App() {
  return (
    <div className="App">
      <div className="top">
        <h1>Make a Playlist</h1>
      </div>
      <div className="Info">
        <div className="sort/filter">
          <h3>sort</h3>
          <h3>filter</h3>
          <h3>reset</h3>
        </div>
        <div className="songCards">
          {/* TODO: personalize your bakery (if you want) */}
          {songData.map(
            (
              item,
              index // TODO: map bakeryData to BakeryItem components
            ) => (
              // <p>Bakery Item {index}</p> // replace with BakeryItem component
              <SongCard
                song={item.song}
                artist={item.artist}
                length={item.length}
              />
            )
          )}
        </div>
      </div>
      <div className="playlistSection">
        <h2>Playlist #n</h2>
      </div>
    </div>
  );
}

export default App;
