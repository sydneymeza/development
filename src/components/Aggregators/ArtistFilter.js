export default function ArtistFilter(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    <div className="artistFilter">
      <div>{/* <img alt="photo of the album" src={props.image} /> */}</div>
      <button>
        Filter by Artist
      </button>
      {/* TODO: personalize your bakery (if you want) */}
    </div>
  );
}
