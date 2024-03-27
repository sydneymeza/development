import ArtistFilter from "./Aggregators/ArtistFilter";
import GenreFilter from "./Aggregators/GenreFilter";
import ResetButton from "./Aggregators/ResetButton";
import songData from "../assets/song-data.json";

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

  const [songList, updateSongList] = ogSongList;


  return (
    <div className="mainStuff">
      <div className="buttons">
        <ArtistFilter />
        <GenreFilter />
        <ResetButton />
      </div>
      <div className="SongItems">

        {/* TODO: personalize your bakery (if you want) */}
      </div>
    </div>
  );
}
