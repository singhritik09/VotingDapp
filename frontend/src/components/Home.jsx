import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home()
{
    return (
        <div className="container">
            <Navbar/>
            <Sidebar/>
        </div>
    );
}

export default Home;