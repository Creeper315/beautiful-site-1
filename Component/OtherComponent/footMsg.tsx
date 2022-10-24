import { IoIosArrowDown } from "react-icons/io";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

const FootMsg: NextPage<{ Hide?: boolean }> = ({ Hide }) => {
    const [show, setshow] = useState(true);

    // useEffect(() => {
    //     let i = setInterval(() => {
    //         setshow(!show);
    //         console.log("show: ", show);
    //     }, 3000);

    //     return () => {
    //         clearInterval(i);
    //     };
    // }, []);

    function addStyle() {
        if (show) return {};
        else return { top: "100%" };
    }

    return (
        <div className="foot-msg-contain" style={addStyle()}>
            <div className="foot-msg">
                <span className="txt">Scroll to discover</span>
                <div className="dot">⬩</div>
                <IoIosArrowDown style={{ transform: "scale(1.5)" }} />
            </div>
        </div>
    );
};

export default FootMsg;

{
    /* <div
    className="foot-msg border position-absolute bottom-0 start-50 translate-middle-x text-nowrap _font1"
    style={{
        border: "2px dashed",
        transition: "all 0.8s ease",
        ...addStyle(),
    }}
>
    <div
        className="txt"
        style={{
            position: "relative",
            bottom: "40px",
            fontSize: "0.9rem",
            // border: "1px",
        }}
    >
        Scroll to discover
    </div>

    <div
        className="position-absolute top-100 _centering border border-info w-100 _themeTxt "
        style={{ height: "90px" }}
    >
        <div className="h-100 border d-flex flex-column pb-4 pt-2 text-center justify-content-around">
            <span>⬩</span>
            <IoIosArrowDown style={{ transform: "scale(1.5)" }} />
        </div>
    </div>
</div>; */
}
