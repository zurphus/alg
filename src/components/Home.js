import React, { useState, useRef, useEffect } from "react";
import Backdrop from "./Backdrop";
import './Home.css'
import alg from '../images/alg-bewit.png'
import coldet from '../images/coldet-bewit.png'
import miracle from '../images/miracle-bewit.png'
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
                        <img onClick={openDialogLeft} className="product product-left-hover" id="left-product" src={coldet} alt="coldet bottle product"></img>
                        <div className="shadow-position">
                            <img onClick={openDialogMiddle} className="product product-middle-hover" id="middle-product" src={alg} alt="alg bottle product"></img>
                            <img className="shadow" src={shadow} alt="shadow"></img>
                        </div>
                        <img onClick={openDialogRight} className="product product-right-hover" id="right-product" src={miracle} alt="miracle bottle product"></img>
                </section>
                <article id="left-article">
                    <dialog open={isOpenLeft} ref={leftDialog} id="left-dialog">
                        <div className="dialog-content-wrap">
                            <img src={coldet} alt="coldet bottle product"></img>
                            <div className="dialog-text-wrap">
                                <RxCross2 className="closeIcons" onClick={closeDialogLeft}></RxCross2>
                                <h2>COLDET</h2>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi distinctio fugit quos dicta accusamus perferendis vitae laborum atque neque et, optio ullam ratione suscipit ad voluptates eligendi tempora natus omnis.
                                </p>
                                <a href="https://bewit.love/?i=czbwtlb&gclid=CjwKCAjw8symBhAqEiwAaTA__H7DpJiT-LfHHu9GuQf9nMmBZEXTUEaTR5K9qmHCx7stBqIEzaGRWBoCrJUQAvD_BwE" target="_blank" className="buttons">KOUPIT JEDNOTLIVĚ</a>
                            </div>
                        </div>
                    </dialog>
                </article>
                <article id="middle-article">
                    <dialog open={isOpenMiddle} ref={middleDialog} id="middle-dialog">
                        <div className="dialog-content-wrap">
                            <img src={alg} alt="alg bottle product"></img>
                            <div className="dialog-text-wrap">
                                <div>
                                    <RxCross2 className="closeIcons" onClick={closeDialogMiddle}></RxCross2>
                                </div>
                                <h2>ALG</h2>
                                <p>
                                    Vždy nám zastaví přehnané sezónní reakce vašeho těla.
                                    Jednoduchá inhalace nás zbaví otoků sliznice a svěží vůně protáhne nosní dírky a celé dýchací ústrojí.
                                    Okamžitě působí při akutním stavu jakékoli alergické reakce.
                                    Hravě s ním zvládáme období pylů, rozkvetlé louky, seno i zvířecí srst.
                                </p>
                                <a href="https://bewit.love/" target="_blank" className="buttons">KOUPIT JEDNOTLIVĚ</a>
                            </div>
                        </div>
                    </dialog>
                </article>
                <article id="right-article">
                    <dialog open={isOpenRight} ref={rightDialog} id="right-dialog">
                        <div className="dialog-content-wrap">
                            <img src={miracle} alt="miracle bottle product"></img>
                            <div className="dialog-text-wrap">
                                <RxCross2 className="closeIcons" onClick={closeDialogRight}></RxCross2>
                                <h2>MIRACLE</h2>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus veritatis ipsam corporis quasi aliquam rem ipsum, non illo incidunt labore quas accusamus minima dolore explicabo deserunt perferendis modi hic vel?
                                </p>
                                <a href="https://bewit.love/?i=czbwtlb&gclid=CjwKCAjw8symBhAqEiwAaTA__H7DpJiT-LfHHu9GuQf9nMmBZEXTUEaTR5K9qmHCx7stBqIEzaGRWBoCrJUQAvD_BwE" target="_blank" className="buttons">KOUPIT JEDNOTLIVĚ</a>
                            </div>
                        </div>
                    </dialog>
                </article>
                <section id="buy-set-section">
                    <a className="buttons" id="buy-set-button" href="https://bewit.love/?i=czbwtlb&gclid=CjwKCAjw8symBhAqEiwAaTA__H7DpJiT-LfHHu9GuQf9nMmBZEXTUEaTR5K9qmHCx7stBqIEzaGRWBoCrJUQAvD_BwE" target="_blank">OBJEDNAT SADU</a>
                </section>
            </main>
            <footer>
                <p className="copyright-text">copyright</p>
            </footer>
        </>
    )
}

export default Home