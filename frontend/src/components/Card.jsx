// import React from "react";

// const url1 = "data:image/png;base64,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";
// function Card(props) {
//     return (
//         <div className="rounded-lg mt-1 border-solid border-4 border-gray-300 hover:border-green-700 transition ease-in-out delay-100 px-4">
//             <div className="flex justify-center items-center max-w-lg rounder overflow-hidden shadow-lg">
//                 <img src={props.logo} alt="" className="w-56 h-48 "/>
               
//             </div>
//             <div className="max-w-lg px-10 my-4">
//                 <p className="text-lg">{props.name}</p>
//                 <button onClick={props.onVote} className=" hover:bg-green-700 bg-purple-700 px-4 py-2 rounded-md my-4">Vote</button>
//             </div>
//         </div>
//     );
// }

// export default Card;

import React from "react";

function Card({ id, logo, name, onVote }) {
  const handleVoteClick = () => {
    onVote(id); // Pass the candidate's ID to the onVote function
  };

  return (
    <div className="rounded-lg mt-1 border-solid border-4 border-gray-300 hover:border-green-700 transition ease-in-out delay-100 px-4">
          <div className="flex justify-center items-center max-w-lg rounder overflow-hidden shadow-lg">
      <img src={logo} alt={name} />
      </div>
      <div className="max-w-lg px-10 my-4">
      <h3>{name}</h3>
      <button className="hover:bg-green-700 bg-purple-700 px-4 py-2 rounded-md my-4" onClick={handleVoteClick}>Vote</button>
      </div>
     
    </div>
  );
}

export default Card;