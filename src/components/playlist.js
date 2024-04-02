import { useState } from "react";

//props.playlist -> the songs added to the current playlist

export default function Playlist(props) {
  const [numPlaylist, setNumPlaylist] = useState(1);

  function resetClick() {
    setNumPlaylist(numPlaylist + 1);
  }

  if (props.playlist.length === 0) {
    return (
      <div className="playlist-area">
        <div className="playlist" aria-label="playlist">
          <div>
            <h1>Playlist #{numPlaylist}</h1>
            <p>Nothing is here yet!</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="playlist">
        <div className="playlist" aria-label="playlist">
          <div>
            <h1>Playlist #{numPlaylist}</h1>
            {props.playlist.map((song) => (
              <div>
                <p>{song.title}</p>
                <p>{song.length}</p>
              </div>
            ))}
          </div>
          <div className="states">
            <h2>Total number of songs:{props.playlist.length}</h2>
            <h2>Total length:</h2>
          </div>
          <div><button onClick={resetClick}>reset</button></div>
          {/* <h1>Total: ${props.cartPrice}</h1> */}
        </div>
      </div>
    );
  }

  //   if (props.cartItems.length === 0) {
  //     return (
  //       <div className="playlist">
  //         <div className="playlist" aria-label="playlist">
  //           <div>
  //             <h1>Playlist #{n}</h1>
  //             <p>Nothing is here yet!</p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="playlist">
  //         <div className="playlist" aria-label="playlist">
  //           <div>
  //             <h1>Playlist #{n}</h1>
  //             {/* {props.cartItems.map((cartItem) => (
  //               <div>
  //                 <p>
  //                   {cartItem.number}x {cartItem.name}
  //                 </p>
  //               </div>
  //             ))} */}
  //           </div>
  //           {/* <h1>Total: ${props.cartPrice}</h1> */}
  //         </div>
  //       </div>
  //     );
  //   }
}
