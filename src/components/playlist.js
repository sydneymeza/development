export default function Playlist(props) {
    const n = 1;

    return (
      <div className="playlist">
        <div className="playlist" aria-label="playlist">
          <div>
            <h1>Playlist #{n}</h1>
            <p>Nothing is here yet!</p>
          </div>
        </div>
      </div>
    );
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
