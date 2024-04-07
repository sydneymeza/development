export function Filter(
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
  } else if (filter.includes("no") && otherFilter.includes("begin")) {
    console.log(filter);
    console.log(otherFilter);
    ogList.map((ogSong) => {
      newList.push(ogSong);
    });
  } else if (newList.length === 0) {
    ogList.map((ogSong) => {
      var checkSong = false;
      var checkOther = false;
      switch (filterby) {
        case "artist":
          checkOther =
            ogSong.genre.includes(otherFilter) || otherFilter.includes("begin");
          checkSong = ogSong.artist.includes(filter);
          break;
        case "genre":
          checkOther =
            ogSong.artist.includes(otherFilter) ||
            otherFilter.includes("begin");
          checkSong = ogSong.genre.includes(filter);
          break;
        default:
          break;
      }
      if (checkOther && checkSong) {
        newList.push(ogSong);
      }
    });
  }
  return newList;
}

export function handleSort(sortBy, updateList, currList) {
  switch (sortBy) {
    case "Title Ascending":
      currList.sort(function (a, b) {
        if (a.song < b.song) {
          return -1;
        }
        if (a.song > b.song) {
          return 1;
        }
        return 0;
      });
      break;

    case "Title Descending":
      currList.sort(function (a, b) {
        if (a.song < b.song) {
          return 1;
        }
        if (a.song > b.song) {
          return -1;
        }
        return 0;
      });
      break;

    case "Length Ascending":
      currList.sort((a, b) => a.date - b.date);
      break;

    case "Length Descending":
      currList.sort((a, b) => b.date - a.date);
      break;

    case "Artist Ascending":
      currList.sort(function (a, b) {
        if (a.artist < b.artist) {
          return -1;
        }
        if (a.artist > b.artist) {
          return 1;
        }
        return 0;
      });
      break;

    case "Artist Descending":
      currList.sort(function (a, b) {
        if (a.artist < b.artist) {
          return 1;
        }
        if (a.artist > b.artist) {
          return -1;
        }
        return 0;
      });

      break;

    default:
      updateList(currList);
      break;
  }
}

