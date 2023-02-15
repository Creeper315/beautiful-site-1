import { useContext, useRef, useState } from "react";
import { ViewConext, ViewEnum } from "../OtherComponent/viewConext";
import { MediaContext } from "../OtherComponent/mediaQueryContext";
import { useRouter } from "next/router";
import ViewPortSize from "../OtherComponent/myViewportSize";
import { Tooltip, tooltipClasses } from "@mui/material";

const TopNav = () => {
    // height, flex, center, gap,
    // font color
    const { isBigScreen } = useContext(MediaContext);
    const router = useRouter();
    const { onChangeView, CanChangeView } = useContext(ViewConext);
    const btn1 = useRef<HTMLDivElement>(null);
    const btn2 = useRef<HTMLDivElement>(null);
    const btn3 = useRef<HTMLDivElement>(null);
    const btn4 = useRef<HTMLDivElement>(null);
    const btn5 = useRef<HTMLDivElement>(null);

    const [HoverOn, setHoverOn] = useState<ViewEnum | null>(null);
    const [Vw, setVw] = useState(0); // 这一行虽然没有使用过，但是是强行为了 rerender page 当 Vw 改变的。因为 getStyle 里面，toReturn 会受 Vw 影响

    const mapper = {
        [ViewEnum.home]: btn1,
        [ViewEnum.menu]: btn2,
        [ViewEnum.orderNow]: btn3,
        [ViewEnum.about]: btn4,
        [ViewEnum.contact]: btn5,
    };

    function getClass() {
        if (CanChangeView) return "nav-item";
        else return "nav-item wait";
    }

    function getStyle(): object {
        if (HoverOn != null) {
            return toReturn(HoverOn);
        }
        let s: string = router.pathname;
        if (
            // Object.values(ViewEnum).includes(s)
            s != ViewEnum.home &&
            s != ViewEnum.menu &&
            s != ViewEnum.orderNow &&
            s != ViewEnum.about &&
            s != ViewEnum.contact
        ) {
            return {};
        }
        let pathname: ViewEnum = s;
        return toReturn(pathname);
    }

    function toReturn(v: ViewEnum): object {
        let ele = mapper[v].current;
        if (ele == null) return {};
        let { x, width, bottom } = ele.getBoundingClientRect();
        return {
            left: `${x}px`,
            top: `${bottom - 10}px`,
            width: `${width}px`,
        };
    }

    // const st = { left: "400px", top: "100px", width: "50px" };
    // console.log("isBigScreen: ", isBigScreen);

    return (
        <>
            {isBigScreen && (
                <div
                    id="top-nav-bar"
                    // className={`position-relative d-flex justify-content-center align-item-center flex-shrink-0`}
                    // style={{ height: "90px", zIndex: 3 }}
                >
                    <div className="underline" style={getStyle()}></div>
                    <div
                        className={getClass()}
                        ref={btn1}
                        onMouseLeave={() => {
                            setHoverOn(null);
                        }}
                        onClick={() => onChangeView(ViewEnum.home)}
                    >
                        Home
                    </div>
                    <div
                        className={getClass()}
                        ref={btn2}
                        // onMouseEnter={() => {
                        //     setHoverOn(ViewEnum.menu);
                        // }}
                        onMouseLeave={() => {
                            setHoverOn(null);
                        }}
                        // className="mx-4 _centering border _font _themeTxt"
                        onClick={() => onChangeView(ViewEnum.menu)}
                    >
                        Menu
                    </div>
                    <div
                        className={getClass()}
                        ref={btn3}
                        // onMouseEnter={() => {
                        //     setHoverOn(ViewEnum.orderNow);
                        // }}
                        onMouseLeave={() => {
                            setHoverOn(null);
                        }}
                        // className="mx-4 _centering border _font _themeTxt"
                        onClick={() => onChangeView(ViewEnum.orderNow)}
                    >
                        Order Now
                    </div>
                    <Tooltip title="未完待续🚫" arrow>
                        <div
                            className={getClass()}
                            ref={btn4}
                            // onMouseEnter={() => {
                            //     setHoverOn(ViewEnum.about);
                            // }}
                            onMouseLeave={() => {
                                setHoverOn(null);
                            }}
                            // className="mx-4 _centering border _font _themeTxt"
                        >
                            About
                        </div>
                    </Tooltip>

                    <Tooltip title="未完待续🚫" arrow>
                        <div
                            className={getClass()}
                            ref={btn5}
                            // onMouseEnter={() => {
                            //     setHoverOn(ViewEnum.contact);
                            // }}
                            onMouseLeave={() => {
                                setHoverOn(null);
                            }}
                            // className="mx-4 _centering border _font _themeTxt"
                        >
                            Contact
                        </div>
                    </Tooltip>

                    <ViewPortSize setVw={setVw} />
                </div>
            )}
        </>
    );
};

export default TopNav;
