// TODO: create a component that displays a single bakery item
import SongButton from "./SongButton";

export default function SongCard(props) {
  return (
    <div className="SongCard">
      <div className="container">
        <img src={process.env.PUBLIC_URL + "/" + props.image} />
        <SongButton
          title={props.song}
          artist={props.artist}
          length={props.length}
          date={props.date}
          playlist={props.playlist}
          updatePlaylist={props.updatePlaylist}
        />
      </div>
      <div className="flexible"></div>
      <h1 className="songTitle">{props.song}</h1>
      <div className="flexible"></div>
      <p className="songArtist">{props.artist}</p>
      <div className="flexible"></div>
      <p className="songGenre">{props.genre}</p>
      <div className="flexible"></div>
      <p className="songLength">{props.length}</p>
      <div className="flexible"></div>
    </div>
  );
}
