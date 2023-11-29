import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

function HomePage(){

    useEffect(() => {
        document.title = "ALG"
    }, [])

    return (
        <>
            <Navbar />
            <Home />
        </>
    )
}

export default HomePage