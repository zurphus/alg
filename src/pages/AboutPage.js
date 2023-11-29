import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

function AboutPage(){

    useEffect(() => {
        document.title = "ALG | O nás"
    }, [])

    return (
        <>
            <Navbar />
        </>
    )
}

export default AboutPage