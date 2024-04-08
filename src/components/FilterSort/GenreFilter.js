import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import { handleSort, Filter } from "./Functions";

export default function GenreFilter(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  function change(e) {
    const filter = e.target.value;

    const newList = Filter(
      filter,
      props.setGenreFilter,
      props.currList,
      props.ogList,
      "genre",
      props.artistFilter
    );

    handleSort(props.sort, props.updateList, newList);
  }

  return (
    <div className="genreFilter">
      <div className="genre-select">
        <select
          name="genre"
          id="genre"
          onChange={(e) => change(e)}
          value={props.genreFilter}
        >
          <option disabled value="begin genre">
            Filter by Genre
          </option>
          <option value="no genre">No Filter</option>
          {props.genreList.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
