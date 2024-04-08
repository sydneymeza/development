export default function ResetButton(props) {
  function handleClick() {
    props.resetList(props.ogList);
    props.setArtistFilter("begin artist");
    props.setSorting("begin sort");
    props.setGenreFilter("begin genre");
  }
  return (
    <div className="reset">
      <div>{/* <img alt="photo of the album" src={props.image} /> */}</div>
      <button className="blueButton" onClick={handleClick}>
        Reset
      </button>
      {/* TODO: personalize your bakery (if you want) */}
    </div>
  );
}
