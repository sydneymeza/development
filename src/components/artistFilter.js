export default function ArtistFilter(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    <div className="SongItem">
      <div>{/* <img alt="photo of the album" src={props.image} /> */}</div>
      <h1>{props.song}</h1>
      <p>{props.artist}</p>
      <p>{props.length}</p>
      {/* TODO: personalize your bakery (if you want) */}
    </div>
  );
}
