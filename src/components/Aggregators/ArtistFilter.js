import * as React from "react";
import { Dispatch, SetStateAction } from "react";

export default function ArtistFilter(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  function change(e) {
    props.setArtistFilter(e.target.value);
    const newList = [];
    props.currList.map((song) => {
      if (song.artist.includes(e.target.value)) {
        newList.push(song);
      } else if (e.target.value.includes("no artist")) {
        newList.push(song);
      }
    });
    props.updateList(newList);
  }

  return (
    <div className="artistFilter">
      <div>{/* <img alt="photo of the album" src={props.image} /> */}</div>
      {/* <button>Filter by Artist</button> */}
      {/* TODO: personalize your bakery (if you want) */}

      <div className="artist-select">
        <select
          name="artist"
          id="artist"
          // onChange={(e) => props.setArtistFilter(e.target.value)}
          onChange={(e) => change(e)}
          value={props.artistFilter}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              // onKeyDown();
            }
          }}
        >
          <option disabled value="begin artist">
            Filter by Artist
          </option>
          <option value="no artist">No Filter</option>
          {props.artistList.map((artist, index) => (
            <option key={index} value={artist}>
              {artist}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

