export default function SongButton(props) {
  function handleClick() {
    let newItem = true;

    // Re-render with the new array
    let newSong = {
      title: props.title,
      artist: props.artist,
      length: props.length,
    };

    if (props.playlist.length > 0) {
      for (let i = 0; i < props.playlist.length; i++) {
        console.log(props.playlist[i].title);
        if (newSong.title === props.playlist[i].title) {
          newItem = false;
        }
      }
    }

    if (newItem) {
      props.updatePlaylist([...props.playlist, newSong]);
    } else {
      const updatedPlaylist = props.playlist.filter(function (song) {
        return song.title !== newSong.title;
      });
      props.updatePlaylist(updatedPlaylist);
    }
  }

  const [button, updateButton] = "+";
  return (
    <div className="SongButton">
      <button onClick={handleClick}>{button}</button>
      {/* <p>this should be the song button</p> */}
    </div>
  );
}
