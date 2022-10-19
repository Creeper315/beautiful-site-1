import { useContext, useRef } from "react";
import { ViewConext, ViewEnum } from "../OtherComponent/viewConext";

const TopNav = () => {
    // height, flex, center, gap,
    // font color
    const { onChangeView, CanChangeView } = useContext(ViewConext);
    const btn1 = useRef<HTMLDivElement>(null);
    const btn2 = useRef<HTMLDivElement>(null);
    const btn3 = useRef<HTMLDivElement>(null);
    const btn4 = useRef<HTMLDivElement>(null);
    const btn5 = useRef<HTMLDivElement>(null);

    function getClass() {
        if (CanChangeView) return "nav-item";
        else return "nav-item wait";
    }

    return (
        <div
            id="top-nav-bar"
            // className={`position-relative d-flex justify-content-center align-item-center flex-shrink-0`}
            // style={{ height: "90px", zIndex: 3 }}
        >
            <div
                className={getClass()}
                ref={btn1}
                // className="border border-primary mx-4 _centering _font _themeTxt "
                // style={{ zIndex: 2, height: "75%" }}
                onClick={() => onChangeView(ViewEnum.home)}
            >
                Home
            </div>
            <div
                className={getClass()}
                ref={btn2}
                // className="mx-4 _centering border _font _themeTxt"
                onClick={() => onChangeView(ViewEnum.menu)}
            >
                Menu
            </div>
            <div
                className={getClass()}
                ref={btn3}
                // className="mx-4 _centering border _font _themeTxt"
                onClick={() => onChangeView(ViewEnum.orderNow)}
            >
                Order Now
            </div>

            <div
                className={getClass()}
                ref={btn4}
                // className="mx-4 _centering border _font _themeTxt"
            >
                About
            </div>
            <div
                className={getClass()}
                ref={btn5}
                // className="mx-4 _centering border _font _themeTxt"
            >
                Contact
            </div>
        </div>
    );
};

export default TopNav;
