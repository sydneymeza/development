import "./Songs.css";
import ArtistFilter from "./Aggregators/ArtistFilter";
import GenreFilter from "./Aggregators/GenreFilter";
import ResetButton from "./Aggregators/ResetButton";
import songData from "../assets/song-data.json";
import { useState } from "react";
import SortByButton from "./Aggregators/SortBy";
import DateObject from "react-date-object";

export default function Songs(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  var ogSongList = [];

  songData.map(function (item) {
    const time = item.length.split(":");
    var date = new Date(2024, 1, 1, 0, time[0].valueOf(), time[1].valueOf());
    // var date = DateObject($d);
    ogSongList.push({
      song: item.song,
      image: item.image,
      artist: item.artist,
      length: item.length,
      date: date,
    });
  });

  var artists = [];
  songData.map(function (item) {
    const words = item.artist.split(", ");
    if (words.length > 1) {
      const lastWord = words[words.length - 1];
      artists.push(words[0]);
      artists.push(lastWord);
    } else {
      artists.push(words[0]);
    }
  });

  const artistList = [...new Set(artists)];

  const [songList, updateSongList] = useState(ogSongList);
  const [artistFilter, setArtistFilter] = useState("begin artist");
  const [sort, setSorting] = useState("begin sort");

  return (
    <div className="mainStuff">
      <div className="buttons">
        <SortByButton
          currList={songList}
          updateList={updateSongList}
          sort={sort}
          setSorting={setSorting}
        />
        <ArtistFilter
          artistList={artistList}
          currList={ogSongList}
          updateList={updateSongList}
          artistFilter={artistFilter}
          setArtistFilter={setArtistFilter}
        />
        <GenreFilter />
        <ResetButton
          currList={songList}
          resetList={updateSongList}
          ogList={ogSongList}
          setArtistFilter={setArtistFilter}
          setSorting={setSorting}
        />
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
