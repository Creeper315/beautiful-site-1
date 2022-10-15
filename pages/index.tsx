import { NextPage } from "next";
// import Comp1 from "../Component/comp1";
import FootMsg from "../Component/MiddleContent/footMsg";
import Home1 from "../Component/MiddleContent/Home/home1";
import React, { useRef, useEffect, useCallback, useState, memo } from "react";
import HomeContain from "../Component/MiddleContent/Home/homeContain";
import UseViewportSize from "../Component/myViewportSize";

// import Test from "../Component/TransitionSection/test";

const Index: NextPage<{ hi: any }> = ({ hi }) => {
    const invisibleDiv = useRef<any>(null);

    // const viewport = useRef();

    const [Vw, setVw] = useState(0);
    const [Vh, setVh] = useState(0);

    // useEffect(() => {
    //     if (invisibleDiv.current !== null) {
    //         invisibleDiv.current.addEventListener("wheel", preventScroll);
    //         setTimeout(() => {
    //             if (invisibleDiv.current) {
    //                 invisibleDiv.current.scrollTop = 100;
    //             }
    //         }, 1000);
    //     }

    //     // return () => {
    //     //     invisibleDiv.current &&
    //     //         invisibleDiv.current.removeEventListener("wheel", preventScroll);
    //     // };
    // }, [div]);

    // function preventScroll(e: any) {
    //     e.preventDefault();
    //     e.stopPropagation();

    //     return false;
    // }

    function getClass(): string {
        const ratio = 1470 / 809;
        console.log("viewport.Width viewport.Height: ", Vw, Vh);

        if (Vw > Vh * ratio) {
            return " based-width";
        }
        return " based-height";
    }

    return (
        <div id="index-contain">
            <div className="mid-line"></div>
            <div className={`invisible-screen${getClass()}`} ref={invisibleDiv}>
                <HomeContain />
                {/* <Home1 />
                <Home1 /> */}
            </div>
            <UseViewportSize {...{ Vw, setVw, Vh, setVh }} />
            <FootMsg />
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {
            hi: "hi",
        },
    };
}

export default Index;
