import {handleSort} from "./filterSortFunctions";

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

  function handleClick(e) {
    props.setSorting(e.target.value);
    handleSort(e.target.value, props.updateList, props.currList);
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
          onChange={(e) => handleClick(e)}
          value={props.sort}
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

