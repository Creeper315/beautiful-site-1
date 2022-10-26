import { useState, useContext, useEffect, useRef } from "react";
import { menuContext } from "../../OtherComponent/menuContext";
import { ViewConext } from "../../OtherComponent/viewConext";
import ProgressBar from "../Home/progressBar";
import DragBar from "./dragBar";
import ViewPortSize from "../../OtherComponent/myViewportSize";
import BkPattern, { scrollMode } from "./bkPattern";
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
    const [Above, setAbove] = useState(false);
    const [PageIdx, setPageIdx] = useState<number>(1); // One based
    const [ScrollPercent, setScrollPercent] = useState(0); // number between 0 ~ 1
    const [Mode, setMode] = useState<scrollMode>(scrollMode.ByPage);
    const [AllData, setAllData] = useState<{}[]>([]);

    const pageCount = 20;
    const onePagePx = Math.round(pageCount * Vh);

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
    // useEffect(() => {
    //     setTimeout(() => {
    //         setPageIdx(2);
    //     }, 3000);
    // }, []);

    function flipPage(e: scrollType, from = 1, to = 20): void {
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
        if (Vh == 0) return { transform: "translateY(0)" };
        let toPx = -(PageIdx - 1) * Vh;
        return { transform: `translateY(${toPx}px)` };
    }

    return (
        <>
            <div id="menu-contain-1" className={getClass2()}>
                {/* <div className="mid-line"></div> */}
                <div className="overflow-contain">
                    <DragBar Expand={Expand} />
                </div>
                <div id="menu-contain-2" className={getClass1()}>
                    <BkPattern
                        ref={bkRef}
                        {...{ PageIdx, ScrollPercent, Mode, pageCount }}
                    />

                    <div className="menu-contain-3">
                        {/* /// */}
                        <ProgressBar
                            PageIdx={PageIdx}
                            totalPageCount={pageCount}
                            Show={!Above}
                        />
                        <div
                            className="menu-contain-4"
                            style={getContain4Sty()}
                        >
                            <OneMenu
                                {...{
                                    Expand,
                                    getClass1,
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
                                    getClass1,
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
