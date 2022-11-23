import { NextPage } from "next";
import HomeContain from "../Component/MiddleContent/Home/homeContain";
import { useEffect, useState, useRef } from "react";
import UseViewportSize from "../Component/OtherComponent/myViewportSize";
import FootMsg from "../Component/OtherComponent/footMsg";
// import Test from "../Component/TransitionSection/test";

const Index: NextPage<{ hi: any }> = ({ hi }) => {
    const [Vw, setVw] = useState(0);
    const [Vh, setVh] = useState(0);
    const [PageIdx, setPageIdx] = useState(1);

    function getClass(): string {
        const ratio = 1470 / 809;
        // console.log("viewport.Width viewport.Height: ", Vw, Vh);

        if (Vw > Vh * ratio) {
            return " based-width";
        }
        return " based-height";
    }

    return (
        <div id="home-contain-contain" className={"p" + PageIdx}>
            <div className="mid-line"></div>
            <div className={`invisible-screen${getClass()}`}>
                <HomeContain {...{ PageIdx, setPageIdx }} />;
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
