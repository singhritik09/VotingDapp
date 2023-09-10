import React from "react";

function Card({ id, logo, name, onVote }) {
    const handleVoteClick = () => {
        onVote(id); 
    };

    return (
        <div className="rounded-lg mt-1 border-solid border-4 border-gray-300 hover:border-green-700 transition ease-in-out delay-100 px-4">
            <div className="flex justify-center items-center max-w-lg rounder overflow-hidden shadow-lg">
                <img src={logo} alt={name} className="w-56 h-48 "/>
            </div>
            <div className="max-w-lg px-10 my-4">
                <h3 className="text-lg">{name}</h3>
                <button className="hover:bg-green-700 bg-purple-700 px-4 py-2 rounded-md my-4" onClick={handleVoteClick}>Vote</button>

            </div>

        </div>
    );
}

export default Card;