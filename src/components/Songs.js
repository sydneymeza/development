import "./Songs.css";
import ArtistFilter from "./Aggregators/ArtistFilter";
import GenreFilter from "./Aggregators/GenreFilter";
import ResetButton from "./Aggregators/ResetButton";
import songData from "../assets/song-data.json";
import { useState } from "react";

export default function Songs(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  var ogSongList = [];

  songData.map(function (item) {
    ogSongList.push({
      song: item.song,
      image: item.image,
      artist: item.artist,
      length: item.length,
    });
  });

  const [songList, updateSongList] = useState(ogSongList);

  return (
    <div className="mainStuff">
      <div className="buttons">
        <ArtistFilter />
        <GenreFilter />
        <ResetButton />
      </div>
      <div className="SongItems">
        {songList.map((song) => (
          <div className="SongCard">
            <h1 className="songTitle">{song.song}</h1>
            <div className="flexible"></div>
            <p className="songInfo">{song.artist}</p>
            <p className="songLength">{song.length}</p>
          </div>
        ))}
        {/* TODO: personalize your bakery (if you want) */}
      </div>
    </div>
  );
}
