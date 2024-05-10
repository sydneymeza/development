
import SongButton from "./Aggregators/SongButton";

export default function SongCard(props) {
  return (
    <div className="SongCard">
      <div className="container">
        <img src={process.env.PUBLIC_URL + "/" + props.image} alt={props.alt} />
        <SongButton
          title={props.song}
          artist={props.artist}
          length={props.length}
          date={props.date}
          playlist={props.playlist}
          updatePlaylist={props.updatePlaylist}
        />
      </div>
      <div className="card-text">
        <h1 className="songTitle">{props.song}</h1>

        <p className="songArtist">{props.artist}</p>

        <p className="songGenre">{props.genre}</p>

        <p className="songLength">{props.length}</p>

      </div>
    </div>
  );
}
