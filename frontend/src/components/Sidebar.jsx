import React from "react";
import Card from "./Card";
import Home from "./Home";
import party from "../Party"
function createCard(party) {
    return <Card
        logo={party.logo}
        name={party.name}
    />
}

function mapping(party)
{
    for(var i=0;i<party.length;i++){
    return party[i].name
    }
}

function Sidebar() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a
                                    href="/home"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    <span>Current Status</span>
                                </a>
                            </li>


                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="px-20 container mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                
                {party.map(createCard)}
                
            </div>

        </div>
    );

}

export default Sidebar;