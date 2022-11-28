// import ss from "../../styles/Layout.module.css";
// 'RationalTWDisplay',Times
import { useContext, useEffect } from "react";
import { MediaContext } from "../OtherComponent/mediaQueryContext";

const Footer = () => {
    const { isBigScreen } = useContext(MediaContext);
    // console.log("footer rere", isBigScreen);

    // useEffect(() => {
    // }, [isBigScreen]);
    // if (!isBigScreen) return <div></div>;
    const t = true;
    return (
        <>
            {isBigScreen && (
                <div
                    className={`position-relative position-relative flex-shrink-0 d-flex align-items-center _font2`}
                    style={{
                        height: "90px",
                        margin: "0 90px",
                        zIndex: 1,
                        // backgroundColor: "white",
                    }}
                >
                    {"© 2021 Dark Points Network LTD - Credits - Legals"}
                </div>
            )}
        </>
    );
};

export default Footer;
