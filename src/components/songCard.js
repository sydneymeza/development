// TODO: create a component that displays a single bakery item
import SongButton from "./SongButton";

export default function SongCard(props) {
  return (
    <div className="SongCard">
      <div>
        <img src={process.env.PUBLIC_URL + "/" + props.image} />
      </div>
      <h1 className="songTitle">{props.song}</h1>
      <p className="songArtist">{props.artist}</p>
      <p className="songLength">{props.length}</p>

      <SongButton
        title={props.song}
        artist={props.artist}
        length={props.length}
        date={props.date}
        playlist={props.playlist}
        updatePlaylist={props.updatePlaylist}
      />
    </div>
  );
}
