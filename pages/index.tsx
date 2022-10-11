import { NextPage } from "next";
import styles from "../styles/Home.module.css";
// import Comp1 from "../Component/comp1";
import FootMsg from "../Component/MiddleContent/footMsg";
import Home1 from "../Component/MiddleContent/Home/home1";
import { useRef, useEffect } from "react";

const Index: NextPage<{ hi: any }> = ({ hi }) => {
    const div = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (div.current !== null) {
    //         div.current.addEventListener("wheel", preventScroll);
    //         setTimeout(() => {
    //             if (div.current) {
    //                 div.current.scrollTop = 100;
    //             }
    //         }, 1000);
    //     }

    //     // return () => {
    //     //     div.current &&
    //     //         div.current.removeEventListener("wheel", preventScroll);
    //     // };
    // }, [div]);

    function preventScroll(e: any) {
        e.preventDefault();
        e.stopPropagation();

        return false;
    }

    function getClass() {
        const vw = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        );
        const vh = Math.max(
            document.documentElement.clientHeight || 0,
            window.innerHeight || 0
        );
        const ratio = 1470 / 809;
        if (vw > vh * ratio) return " based-width";
        return " based-height";
    }

    return (
        <div id="index-contain">
            <div className="mid-line"></div>
            <div className={`invisible-screen ${getClass()}`} ref={div}>
                <Home1 />
                <Home1 />
            </div>
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
