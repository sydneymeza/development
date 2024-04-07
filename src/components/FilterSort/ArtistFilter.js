import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import { handleSort, Filter } from "../Functions";


export default function ArtistFilter(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  function change(e) {
    const filter = e.target.value;

    const newList = Filter(
      filter,
      props.setArtistFilter,
      props.currList,
      props.ogList,
      "artist",
      props.genreFilter
    );

    handleSort(props.sort, props.updateList, newList);
    props.updateList(newList);
  }

  return (
    <div className="artistFilter">
      <div className="artist-select">
        <select
          name="artist"
          id="artist"
          // onChange={(e) => props.setArtistFilter(e.target.value)}
          onChange={(e) => change(e)}
          value={props.artistFilter}
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
