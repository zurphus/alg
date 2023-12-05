import React, { useState, useRef, useEffect } from "react";
import Backdrop from "./Backdrop";
import './Home.css'
import dialogData from "../data.js/dialogData";
import shadow from '../images/shadow.png'

import { RxCross2 } from 'react-icons/rx'

function Home() {
   
    const [isOpenLeft, setIsOpenLeft] = useState(false);
    const [isOpenMiddle, setIsOpenMiddle] = useState(false);
    const [isOpenRight, setIsOpenRight] = useState(false);
    const [backdrop, setBackdrop] = useState(false)

    const leftDialog = useRef()
    const middleDialog = useRef()
    const rightDialog = useRef()

    const openDialogLeft = () => {
        setIsOpenLeft(true);
    };
    const openDialogMiddle = () => {
        setIsOpenMiddle(true);
    };
    const openDialogRight = () => {
        setIsOpenRight(true);
    };

    const closeDialogLeft = () => {
        setIsOpenLeft(false);
    };
    const closeDialogMiddle = () => {
        setIsOpenMiddle(false);
    };
    const closeDialogRight = () => {
        setIsOpenRight(false);
    };

    function showBackdrop(){
        setBackdrop(isOpenLeft || isOpenMiddle || isOpenRight)
    }
    
    useEffect(() => {
        showBackdrop()
    }, [isOpenLeft, isOpenMiddle, isOpenRight])

    
    return (
        <>
            {
                backdrop && <Backdrop />
            }
            <main>
                <section id="products-section">
                        <img onClick={openDialogLeft} className="product product-left-hover" id="left-product" src={dialogData[0].image} alt="coldet bottle product"></img>
                        <div className="shadow-position">
                            <img onClick={openDialogMiddle} className="product product-middle-hover" id="middle-product" src={dialogData[1].image} alt="alg bottle product"></img>
                            <img className="shadow" src={shadow} alt="shadow"></img>
                        </div>
                        <img onClick={openDialogRight} className="product product-right-hover" id="right-product" src={dialogData[2].image} alt="miracle bottle product"></img>
                </section>
                <article id="left-article">
                    <dialog open={isOpenLeft} ref={leftDialog} id="left-dialog">
                        <div className="dialog-content-wrap">
                            <img src={dialogData[0].image} alt="coldet bottle product"></img>
                            <div className="dialog-text-wrap">
                                <RxCross2 className="closeIcons" onClick={closeDialogLeft}></RxCross2>
                                <h2>{dialogData[0].name}</h2>
                                <p>{dialogData[0].decription}</p>
                                <a href={dialogData[0].link} target="_blank" className="buttons">KOUPIT JEDNOTLIVĚ</a>
                            </div>
                        </div>
                    </dialog>
                </article>
                <article id="middle-article">
                    <dialog open={isOpenMiddle} ref={middleDialog} id="middle-dialog">
                        <div className="dialog-content-wrap">
                            <img src={dialogData[1].image} alt="alg bottle product"></img>
                            <div className="dialog-text-wrap">
                                <div>
                                    <RxCross2 className="closeIcons" onClick={closeDialogMiddle}></RxCross2>
                                </div>
                                <h2>{dialogData[1].name}</h2>
                                <p>{dialogData[1].decription}</p>
                                <a href={dialogData[1].link} target="_blank" className="buttons">KOUPIT JEDNOTLIVĚ</a>
                            </div>
                        </div>
                    </dialog>
                </article>
                <article id="right-article">
                    <dialog open={isOpenRight} ref={rightDialog} id="right-dialog">
                        <div className="dialog-content-wrap">
                            <img src={dialogData[2].image} alt="miracle bottle product"></img>
                            <div className="dialog-text-wrap">
                                <RxCross2 className="closeIcons" onClick={closeDialogRight}></RxCross2>
                                <h2>{dialogData[2].name}</h2>
                                <p>{dialogData[2].decription}</p>
                                <a href={dialogData[2].link} target="_blank" className="buttons">KOUPIT JEDNOTLIVĚ</a>
                            </div>
                        </div>
                    </dialog>
                </article>
                <section id="buy-set-section">
                    <a className="buttons" id="buy-set-button" href="https://bewit.love/?i=czbwtlb&gclid=CjwKCAjw8symBhAqEiwAaTA__H7DpJiT-LfHHu9GuQf9nMmBZEXTUEaTR5K9qmHCx7stBqIEzaGRWBoCrJUQAvD_BwE" target="_blank">OBJEDNAT SADU</a>
                </section>
            </main>
            <footer>
                <p className="copyright-text">© 2023</p>
            </footer>
        </>
    )
}

export default Home