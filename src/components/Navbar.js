import React, { useState, useEffect, useRef} from "react";
import "./Navbar.css"
import { NavLink, Link } from "react-router-dom";
import { Turn as Hamburger } from 'hamburger-react';



function Navbar(){

    const [click, setClick] = useState(false)
    const [menuBtn, setMenuBtn] = useState(false)
    const [overlay, setOverlay] = useState(false)
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const toggleMenu = () => {
        setClick((prevClick) => !prevClick);
        setOverlay(!overlay);
    };

    const checkContainerWidth = () => {
        const newWindowSize = window.innerWidth
        setWindowSize(newWindowSize);

        if (newWindowSize <= 425) {
            setMenuBtn(true)
        } else if (newWindowSize >= 425) {
            setClick(false);
            setMenuBtn(false)
            setOverlay(false);
        }
    };

    useEffect(() => {
        checkContainerWidth();
        window.addEventListener('resize', checkContainerWidth)

        return () => {
            window.removeEventListener('resize', checkContainerWidth)
        };
    }, []);

    return (
        <>
            <nav>
            <div className="navbar-content-wrap">
                {menuBtn ? (
                        <div id="overlayMenu" className={overlay ? "overlayOpen" : ""}>
                            <ul className="overlayList">
                                <li className="overlayLi"><NavLink to="/">Domů</NavLink></li>
                                <li className="overlayLi"><NavLink to="/o-nas">O nás</NavLink></li>
                                <li className="overlayLi"><NavLink to="/">Příběhy</NavLink></li>
                                <li className="overlayLi"><a href="https://bewit.love/" target="_blank">Bewit</a></li>
                            </ul>
                        </div>
                    ) : (
                        <div className="nav-content-pc-wrap">
                           <ul>
                                <li><NavLink to="/">Domů</NavLink></li>
                                <li><NavLink to="/o-nas">O nás</NavLink></li>
                            </ul>
                            <h1 className="nav-heading">ALG</h1>
                            <ul>
                                <li><NavLink to="/pribehy">Příběhy</NavLink></li>
                                <li><a href="https://bewit.love/" target="_blank">Bewit</a></li>
                            </ul> 
                        </div>
                    )}
                </div>
                
                {menuBtn &&
                    <>
                        <h1 className="nav-heading-mobile">ALG</h1>
                        <div className="hamburger-menu-wrap">
                            <Hamburger direction="right" color="black" duration={0.25} onToggle={toggleMenu}/>
                        </div>
                    </>
                }
            </nav>
        </>
    )
}

export default Navbar