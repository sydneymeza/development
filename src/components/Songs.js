import "./Songs.css";
import ArtistFilter from "./FilterSort/ArtistFilter";
import GenreFilter from "./FilterSort/GenreFilter";
import ResetButton from "./FilterSort/ResetButton";
import { useState } from "react";
import SortByButton from "./FilterSort/SortBy";
import SongCard from "./SongCard";

export default function Songs(props) {
  var ogSongList = [];
  props.songData.map(function (item) {
    const time = item.length.split(":");
    var date = new Date(2024, 1, 1, 0, time[0].valueOf(), time[1].valueOf());
    ogSongList.push({
      song: item.song,
      image: item.image,
      artist: item.artist,
      genre: item.genre,
      length: item.length,
      date: date,
    });
  });

  var artists = [];
  props.songData.map(function (item) {
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

  var genres = [];
  props.songData.map(function (item) {
    genres.push(item.genre);
  });
  const genreList = [...new Set(genres)];

  console.log(ogSongList);

  const [songList, updateSongList] = useState(ogSongList);
  const [artistFilter, setArtistFilter] = useState("begin artist");
  const [genreFilter, setGenreFilter] = useState("begin genre");
  const [sortSetting, setSorting] = useState("begin sort");

  console.log(songList);

  return (
    <div className="mainStuff">
      <div className="filterSortButtons">
        <SortByButton
          ogList={ogSongList}
          currList={songList}
          updateList={updateSongList}
          sort={sortSetting}
          setSorting={setSorting}
        />
        <ArtistFilter
          ogList={ogSongList}
          artistList={artistList}
          currList={songList}
          updateList={updateSongList}
          artistFilter={artistFilter}
          sort={sortSetting}
          setArtistFilter={setArtistFilter}
          genreFilter={genreFilter}
        />
        <GenreFilter
          ogList={ogSongList}
          genreList={genreList}
          currList={songList}
          updateList={updateSongList}
          genreFilter={genreFilter}
          sort={sortSetting}
          setGenreFilter={setGenreFilter}
          artistFilter={artistFilter}
        />
        <ResetButton
          currList={songList}
          resetList={updateSongList}
          ogList={ogSongList}
          setArtistFilter={setArtistFilter}
          setGenreFilter={setGenreFilter}
          setSorting={setSorting}
        />
      </div>
      <div className="SongItems">
        {songList.map((song) => (
          <SongCard
            song={song.song}
            artist={song.artist}
            genre={song.genre}
            length={song.length}
            date={song.date}
            playlist={props.playlist}
            updatePlaylist={props.updatePlaylist}
            image={song.image}
          />
        ))}
      </div>
    </div>
  );
}
