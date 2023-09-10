import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


function Home()
{
    return (
        <div className="container bg-gray-100">
            <Navbar/>
            <Sidebar/>
        </div>
    );
}

export default Home;