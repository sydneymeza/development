export default function SortByButton(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const sortList = [
    "Title Ascending",
    "Title Descending",
    "Length Ascending",
    "Length Descending",
    "Artist Ascending",
    "Artist Descending",
  ];

  function handleChange(e) {
    props.setSorting(e.target.value);
    switch (e.target.value) {
      case "Title Ascending":
        props.currList.sort(function (a, b) {
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
        props.currList.sort(function (a, b) {
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
        props.currList.sort((a, b) => a.date - b.date);
        break;

      case "Length Descending":
        props.currList.sort((a, b) => b.date - a.date);
        break;

      case "Artist Ascending":
       props.currList.sort(function (a, b) {
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
        props.currList.sort(function (a, b) {
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
        break;
    }
  }
  return (
    <div className="sorting">
      <div>{/* <img alt="photo of the album" src={props.image} /> */}</div>
      {/* <button>Filter by Artist</button> */}
      {/* TODO: personalize your bakery (if you want) */}

      <div className="sort-select">
        <select
          name="sortBy"
          id="sortBy"
          onChange={(e) => handleChange(e)}
          value={props.sort}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              // onKeyDown();
            }
          }}
        >
          <option disabled value="begin sort">
            Sort by
          </option>
          <option value="no sort">No Sorting</option>
          {sortList.map((sort, index) => (
            <option key={index} value={sort}>
              {sort}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
