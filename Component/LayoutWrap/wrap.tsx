// import ss from "../../styles/Layout.module.css";
import { NextPage } from "next";
import TopNav from "./topnav";
import Footer from "./footer";
// import LeftBtn from "./leftBtn";
// import RightBtn from "./rightBtn";
import Transition from "./tansition";
import ViewProvider from "../OtherComponent/viewConext";

import FootMsg from "../OtherComponent/footMsg";
import UseViewportSize from "../OtherComponent/myViewportSize";

import { useState } from "react";

const Wrap: NextPage<any> = ({ children }) => {
    const [Vw, setVw] = useState(0);
    const [Vh, setVh] = useState(0);

    function getClass(): string {
        const ratio = 1470 / 809;
        // console.log("viewport.Width viewport.Height: ", Vw, Vh);

        if (Vw > Vh * ratio) {
            return " based-width";
        }
        return " based-height";
    }

    return (
        <div
            className={` d-flex flex-column overflow-hidden`}
            style={{ height: "100vh", width: "100vw" }}
        >
            <ViewProvider>
                <TopNav />
                <Transition />
                <div id="index-contain">
                    <div className="mid-line"></div>
                    <div className={`invisible-screen${getClass()}`}>
                        {children}
                    </div>
                    <UseViewportSize {...{ Vw, setVw, Vh, setVh }} />
                    <FootMsg />
                </div>
                <Footer />
                {/* <LeftBtn /> */}
                {/* <RightBtn /> */}
            </ViewProvider>
        </div>
    );
};

export default Wrap;
