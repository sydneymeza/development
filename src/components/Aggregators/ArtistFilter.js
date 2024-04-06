import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import { handleSort } from "./SortBy";

export default function ArtistFilter(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  function change(e) {
    const filter = e.target.value;

    const newList = filterArtists(
      filter,
      props.setArtistFilter,
      props.currList,
      props.ogList,
      "artist",
      props.genreFilter
    );

    handleSort(props.sort, props.updateList, newList);
    // props.updateList(newList);
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

export function filterArtists(
  filter,
  setFilter,
  currentList,
  ogList,
  filterby,
  otherFilter
) {
  setFilter(filter);
  const newList = [];
  currentList.map((song) => {
    var checkFilter = false;
    var checkOtherFilter = false;
    switch (filterby) {
      case "artist":
        checkFilter = song.artist.includes(filter);
        checkOtherFilter =
          song.genre.includes(otherFilter) || otherFilter.includes("begin");
        console.log(song.song);
        console.log(checkFilter);
        console.log(song.artist);
        console.log(checkOtherFilter);

        break;
      case "genre":
        checkFilter = song.genre.includes(filter);
        checkOtherFilter =
          song.artist.includes(otherFilter) || otherFilter.includes("begin");
        break;
      default:
        break;
    }

    if (checkFilter && checkOtherFilter) {
      newList.push(song);
    }
  });

  if (filter.includes("no") && otherFilter.includes("no")) {
    ogList.map((ogSong) => {
      newList.push(ogSong);
    });
  } else if (newList.length === 0) {
    ogList.map((ogSong) => {
      var checkOther = false;
      switch (filterby) {
        case "artist":
          checkOther = ogSong.genre.includes(otherFilter);
          break;
        case "genre":
          checkOther = ogSong.artist.includes(otherFilter);
          break;
        default:
          break;
      }
      if (checkOther) {
        newList.push(ogSong);
      }
    });
  }

  console.log(newList);
  return newList;
}
