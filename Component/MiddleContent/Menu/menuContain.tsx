import { useState, useContext, useEffect, useRef, useMemo } from "react";
import { menuContext } from "../../OtherComponent/menuContext";
import { ViewConext } from "../../OtherComponent/viewConext";
import { MediaContext } from "../../OtherComponent/mediaQueryContext";
import ProgressBar from "../Home/progressBar";
import DragBar from "./dragBar";
import ViewPortSize from "../../OtherComponent/myViewportSize";
import BkPattern, { ScrollMode } from "./bkPattern";
import OneMenu, { txtDir } from "./oneMenu";
import WheelHandler, { scrollType } from "../../OtherComponent/wheelHandler";

import { AllData } from "./data";

const MenuContain = () => {
    const btn2Sty = {
        position: "absolute",
        zIndex: 2,
        right: "70px",
        top: "70px",
    };

    const menuRef = useRef<any>(null);
    const bkRef = useRef<any>(null);
    const dragRef = useRef<any>(null);

    const [Vh, setVh] = useState(0);
    const [Vw, setVw] = useState(0);

    const { isBigScreen } = useContext(MediaContext);

    const { setShowBtn } = useContext(menuContext);
    const { setCanChangeView } = useContext(ViewConext);
    const [Expand, setExpand] = useState<boolean>(false);
    const [Above, setAbove] = useState<boolean>(false);
    const [PageIdx, setPageIdx] = useState<number>(1); // One based
    const scrollPercent = useRef(0);
    const [Mode, setMode] = useState<ScrollMode>(ScrollMode.scroll);

    const totalPageCount = AllData.length;

    const styleTopTransTotalPx = useMemo(() => {
        return Math.round((totalPageCount - 1) * Vh);
    }, [Vh]);

    const totalBkScrollPx = useMemo(() => {
        const scrollRatio = 0.3;
        return Math.round((totalPageCount - 1) * Vh * scrollRatio);
    }, [Vh]);

    const draggableWidth = useRef(0);

    function renderAllMenu() {
        let bool = true;
        return AllData.map((e, idx) => {
            let prop = {
                shouldExpand,
                expandMenu,
                shrinkMenu,
                btn2Sty,
                PageIdx,
                Idx: idx,
                Dir: bool ? txtDir.left : txtDir.right,
            };
            bool = !bool;
            return <OneMenu key={idx} {...prop} MenuData={e} />;
        });
    }

    function shouldExpand() {
        // 因为点击 加号，屏幕虽然扩大了，但是如果拖动 drag bar，布局还是会显示缩小版本。
        //  返回 True 如果 menu items 需要显示 扩张了的 布局.
        if (!Expand) return false;
        if (Expand) {
            if (Mode == ScrollMode.drag) return false;
            return true;
        }
    }

    const getClass1 = () => (Expand ? "expand" : "");

    const getClass2 = () => (Above ? "above" : "");

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

    const setPercentByPage = (pi: number) => {
        let k = (pi - 1) / (totalPageCount - 1);
        // console.log("new per: ", pi, k);
        scrollPercent.current = k;
        return k;
    };

    const setPageByPercent = (per: number) => {
        let k = Math.round((totalPageCount - 1) * per) + 1;
        setPageIdx(k);
        return k;
    };

    function flipPage(e: scrollType, from = 1, to = totalPageCount): void {
        shrinkMenu();
        if (e == scrollType.up) {
            if (PageIdx <= from) return;
            // console.log(`flip from ${PageIdx} to ${PageIdx - 1}`);
            setPageIdx(PageIdx - 1);
            setPercentByPage(PageIdx - 1);
        } else if (e == scrollType.down) {
            if (PageIdx >= to) return;
            // console.log(`flip from ${PageIdx} to ${PageIdx + 1}`);
            setPageIdx(PageIdx + 1);
            setPercentByPage(PageIdx + 1);
        }
    }

    function getContain4Sty() {
        if (Vh == 0 || styleTopTransTotalPx == undefined)
            return { transform: "translateY(0)" };
        if (Mode == ScrollMode.scroll || Mode == ScrollMode.beforeDrag) {
            let toPx = -(PageIdx - 1) * Vh;
            return { transform: `translateY(${toPx}px)` };
        }
        if (Mode == ScrollMode.drag) {
            return {};
        }
        console.log("Err. cannnot get here");
    }

    function getContain4Class() {
        let s = Mode == ScrollMode.drag ? "drag" : "";
        return "menu-contain-4 " + s;
    }

    function setRefPercent(percent: number) {
        // return { transform: `translateY(${toPx}px)` };
        let contain4Px = -styleTopTransTotalPx * percent;
        // console.log("styleTopTransTotalPx: ", styleTopTransTotalPx, percent);

        // return { backgroundPosition: `0px ${BkPosition}px` };
        let bkPx = -totalBkScrollPx * percent;
        bkPx = Math.floor(bkPx);

        // return { left: `${pos}px` };
        let dragPx = Math.round(draggableWidth.current * percent); // left px
        // console.log("contain4Px: ", contain4Px, bkPx, dragPx);

        menuRef.current.style.setProperty(
            "--contain4-px",
            ` translateY(${contain4Px}px)`
        );
        bkRef.current.style.setProperty("--bk-px", `0px ${bkPx}px`);
        dragRef.current.style.setProperty("--drag-px", `${dragPx}px`);
    }

    return (
        <>
            <div id="menu-contain-1" className={getClass2()} ref={menuRef}>
                {/* <div className="mid-line"></div> */}

                <div className="overflow-contain">
                    {isBigScreen && (
                        <DragBar
                            {...{
                                Mode,
                                setMode,
                                PageIdx,
                                setPageIdx,
                                scrollPercent,
                                setPercentByPage,
                                setPageByPercent,
                                totalPageCount,
                                Expand,
                                draggableWidth,
                                setRefPercent,
                                dragRef,
                                Vw,
                            }}
                        />
                    )}
                </div>
                <div id="menu-contain-2" className={getClass1()}>
                    <BkPattern
                        {...{
                            PageIdx,
                            bkRef,
                            Mode,
                            totalPageCount,
                            totalBkScrollPx,
                        }}
                    />

                    <div className="menu-contain-3">
                        {isBigScreen && (
                            <ProgressBar
                                PageIdx={PageIdx}
                                totalPageCount={totalPageCount}
                                Show={!Above}
                            />
                        )}
                        <div
                            className={getContain4Class()}
                            style={getContain4Sty()}
                        >
                            {renderAllMenu()}
                        </div>
                    </div>
                </div>
            </div>

            <ViewPortSize {...{ setVh, setVw }} />
            <WheelHandler
                actionFun={flipPage}
                deps={PageIdx}
                scrollBetweenDelay={680}
            />
        </>
    );
};

export default MenuContain;
