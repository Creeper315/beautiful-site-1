import { useState, useContext, useEffect, useRef, useMemo } from "react";
import { menuContext } from "../../OtherComponent/menuContext";
import { ViewConext } from "../../OtherComponent/viewConext";
import ProgressBar from "../Home/progressBar";
import DragBar from "./dragBar";
import ViewPortSize from "../../OtherComponent/myViewportSize";
import BkPattern, { ScrollMode } from "./bkPattern";
import OneMenu from "./oneMenu";
import WheelHandler, { scrollType } from "../../OtherComponent/wheelHandler";

const MenuContain = () => {
    const pattern1 = "https://koox.co.uk/assets/images/shapes/01.png";
    const pattern2 = "https://koox.co.uk/assets/images/shapes/05.png";
    const img =
        "https://koox.co.uk/data/wp-content/uploads/2018/05/Test_nico-575x1024.png";
    const _img =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC";
    const btn2Sty = {
        position: "absolute",
        zIndex: 2,
        right: "70px",
        top: "70px",
    };
    const bkRef = useRef<any>({ current: { scrollByAmount: () => {} } });
    const [Vh, setVh] = useState(0);
    const { setShowBtn } = useContext(menuContext);
    const { setCanChangeView } = useContext(ViewConext);
    const [Expand, setExpand] = useState<boolean>(false);
    const [Above, setAbove] = useState<boolean>(false);
    // const Dragging = useRef(false);
    // const [Dragging, setDragging] = useState<boolean>(false);
    const [PageIdx, setPageIdx] = useState<number>(1); // One based
    const [ScrollPercent, setScrollPercent] = useState(0); // number between 0 ~ 1
    const [Mode, setMode] = useState<ScrollMode>(ScrollMode.scroll);
    const [AllData, setAllData] = useState<{}[]>([]);

    const totalPageCount = 20;
    const styleTopTransTotalPx = useMemo(() => {
        return Math.round((totalPageCount - 1) * Vh);
    }, [Vh]);

    function shouldExpand() {
        // 因为点击 加号，屏幕虽然扩大了，但是如果拖动 drag bar，布局还是会显示缩小版本。
        //  返回 True 如果 menu items 需要显示 扩张了的 布局.
        if (!Expand) return false;
        if (Expand) {
            if (Mode == ScrollMode.drag) return false;
            return true;
        }
    }

    function getClass1() {
        if (Expand) return "expand";
        return "";
    }
    function getClass2() {
        if (Above) return "above";
        return "";
    }

    function expandMenu() {
        setCanChangeView(false);
        setAbove(true);
        setExpand(true);
        setShowBtn(false);
    }
    function shrinkMenu() {
        setCanChangeView(true);
        setExpand(false);
        setShowBtn(true);
        setTimeout(() => {
            setAbove(false);
        }, 1000);
    }

    function flipPage(e: scrollType, from = 1, to = totalPageCount): void {
        if (e == scrollType.up) {
            if (PageIdx <= from) return;
            // console.log(`flip from ${PageIdx} to ${PageIdx - 1}`);
            setPageIdx(PageIdx - 1);
        } else if (e == scrollType.down) {
            if (PageIdx >= to) return;
            // console.log(`flip from ${PageIdx} to ${PageIdx + 1}`);
            setPageIdx(PageIdx + 1);
        }
    }

    function getContain4Sty() {
        if (Vh == 0 || styleTopTransTotalPx == undefined)
            return { transform: "translateY(0)" };
        if (Mode == ScrollMode.scroll) {
            let toPx = -(PageIdx - 1) * Vh;
            return { transform: `translateY(${toPx}px)` };
        }
        if (Mode == ScrollMode.drag) {
            let styleTopTransTotalPx = (totalPageCount - 1) * Vh;
            let toPx = -styleTopTransTotalPx * ScrollPercent; // 因为只有 19 个页面的长度是 scrollable
            return { transform: `translateY(${toPx}px)` };
        }
        console.log("Err. cannnot get here");
    }
    return (
        <>
            <div id="menu-contain-1" className={getClass2()}>
                {/* <div className="mid-line"></div> */}

                <div className="overflow-contain">
                    <DragBar
                        {...{
                            Mode,
                            setMode,
                            PageIdx,
                            setPageIdx,
                            ScrollPercent,
                            setScrollPercent,
                            totalPageCount,
                            Expand,
                            // Dragging,
                        }}
                    />
                </div>
                <div id="menu-contain-2" className={getClass1()}>
                    <BkPattern
                        ref={bkRef}
                        {...{ PageIdx, ScrollPercent, Mode, totalPageCount }}
                    />

                    <div className="menu-contain-3">
                        {/* /// */}
                        <ProgressBar
                            PageIdx={PageIdx}
                            totalPageCount={totalPageCount}
                            Show={!Above}
                        />
                        <div
                            className="menu-contain-4"
                            style={getContain4Sty()}
                        >
                            <OneMenu
                                {...{
                                    Expand,
                                    shouldExpand,
                                    expandMenu,
                                    shrinkMenu,
                                    pattern1,
                                    img,
                                    btn2Sty,
                                }}
                            />
                            <OneMenu
                                {...{
                                    Expand,
                                    shouldExpand,
                                    expandMenu,
                                    shrinkMenu,
                                    pattern2,
                                    img,
                                    btn2Sty,
                                }}
                            />

                            {/* /// */}
                        </div>
                    </div>
                </div>
            </div>

            <ViewPortSize {...{ setVh }} />
            <WheelHandler
                actionFun={flipPage}
                deps={[PageIdx]}
                scrollBetweenDelay={650}
            />
        </>
    );
};

export default MenuContain;
