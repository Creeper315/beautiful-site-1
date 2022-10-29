import { NextPage } from "next";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { ScrollMode } from "./bkPattern";
import ViewPortSize from "../../OtherComponent/myViewportSize";
import { throttle } from "lodash";
import { time } from "console";

const DragBar: NextPage<any> = ({
    Mode,
    setMode,
    PageIdx,
    setPageIdx,
    ScrollPercent,
    setScrollPercent,
    totalPageCount,
    Expand,
    // Dragging,
}) => {
    const dragBtnWidth = 200;
    const expandedPadding = 25; // This is default, and is used in .css files as well. (variable.scss)
    // const startDragging = useRef(false);
    const mouseStartX = useRef(expandedPadding);
    const draggerStartX = useRef(expandedPadding);
    const draggerDiv = useRef<any>(null);
    const draggerContainDiv = useRef<any>(null);
    const quickNewPage = useRef(0);

    // const canDrag = useRef(true);
    // const canSetDrag = useRef(0);

    // const [exc, setexc] = useState(true);

    // const [myVar, setmyVar] = useState(0);
    // // const var2 = useRef(0);
    // const var2: number = useMemo(() => {
    //     console.log("memo called");
    //     return myVar / 2;
    // }, [myVar]);

    // setTimeout(() => {
    //     setmyVar(myVar + 1);

    //     console.log("time out: ", myVar);
    // }, 2000);

    // useEffect(() => {
    //     console.log("useeffect", myVar, var2);
    // }, [myVar]);

    // // const [Position, setPosition] = useState<number>(0); // 这个是 style 里的 left: 'Position' px 。

    // const [draggableWidthPx, oneIntervalPx] = useMemo(() => {
    //     let k = Vw - 2 * expandedPadding;
    //     let total = k - dragBtnWidth;
    //     console.log("total: ", total);
    //     let oneInterval = total / (totalPageCount - 1);
    //     // console.log("[total, oneInterval]: ", [total, oneInterval]);
    //     // trigger();
    //     return [total, oneInterval];
    // }, [Vw, totalPageCount]);

    // function trigger() {
    //     setexc(!exc);
    // }

    function getClass() {
        if (Expand == true) return "";
        if (Expand == false) return " hide";
        console.log("ERR, cannot get here");
    }

    // function getStyle(): object {
    //     // 这个 function，就是假设，PageIdx 和 Percent，和 Mode 已经给出了，来 return {left: px}
    //     // 通过 PageIdx 或者 Percent，直接 return 出 left: 多少 px。（省略了 Position / setPosition）
    //     if (Vw == 0 || draggableWidthPx == undefined) return {}; // 这种情况就用 css 里面的 default style
    //     // console.log("in drag! ", Mode, PageIdx, ScrollPercent);
    //     if (Mode == ScrollMode.scroll) {
    //         let interval = draggableWidthPx / (totalPageCount - 1);
    //         // console.log("interval: ", draggableWidthPx, totalPageCount);
    //         let pos = (PageIdx - 1) * interval;
    //         pos = Math.round(pos);
    //         // console.log("pos: ", pos);
    //         return { left: `${pos}px` };
    //     }
    //     if (Mode == ScrollMode.drag) {
    //         let pos = Math.round(draggableWidthPx * ScrollPercent);
    //         return { left: `${pos}px` };
    //     }
    //     console.log("can't get here ~");
    //     return {};
    // }

    // const handleDrag = (e: any) => {
    //     if (Dragging.current == false) return;
    //     if (canSetDrag.current > 0) {
    //         canSetDrag.current--;
    //         return;
    //     }
    //     canSetDrag.current = 3;

    //     // 计算 Percent ! 和 PageIdx
    //     let curPos = draggerStartX.current + (e.clientX - mouseStartX.current);
    //     console.log("curPos: ", curPos, draggableWidthPx);
    //     curPos -= expandedPadding;
    //     if (curPos < 0) curPos = 0;
    //     if (curPos > draggableWidthPx) curPos = draggableWidthPx;

    //     let percent = curPos / draggableWidthPx;
    //     // console.log("percent: ", percent);
    //     setScrollPercent(percent);
    //     let k = curPos / oneIntervalPx;
    //     setPageIdx(Math.round(k) + 1);
    // };

    const getStyle = () => {
        // 这个 function，就是假设，PageIdx 和 Percent，和 Mode 已经给出了，来 return {left: px}
        // 通过 PageIdx 或者 Percent，直接 return 出 left: 多少 px。（省略了 Position / setPosition）
        if (draggerContainDiv.current == null) return {}; // 这种情况就用 css 里面的 default style
        // console.log("in drag! ", Mode, PageIdx, ScrollPercent);
        let draggableWidth = draggerContainDiv.current.clientWidth - 200;

        if (Mode == ScrollMode.scroll) {
            let interval = draggableWidth / (totalPageCount - 1);
            // console.log("interval: ", draggableWidthPx, totalPageCount);
            let pos = (PageIdx - 1) * interval;
            pos = Math.round(pos);
            // console.log("pos: ", pos);
            return { left: `${pos}px` };
        }
        if (Mode == ScrollMode.drag) {
            let pos = Math.round(draggableWidth * ScrollPercent);
            return { left: `${pos}px` };
        }
        console.log("can't get here ~");
        return {};
    };

    // const [Test, setTest] = useState(0);

    const handleDown = (e: any) => {
        // Dragging.current = true;
        // console.log("Down");

        setMode(ScrollMode.drag);
        mouseStartX.current = e.clientX;
        draggerStartX.current = draggerDiv.current.getBoundingClientRect().x;
    };

    const handleUp = (e: any) => {
        // 如果 percent 是临近的 page 位置，就位移到临近的 page 位置。
        // Dragging.current = false;
        setMode(ScrollMode.scroll);
        let draggableWidth = draggerContainDiv.current.clientWidth - 200;
        let oneInterval = draggableWidth / (totalPageCount - 1);

        let percent =
            ((quickNewPage.current - 1) * oneInterval) / draggableWidth;

        // console.log("Up", PageIdx);

        setScrollPercent(percent);
    };

    const handleDrag = (e: any) => {
        // left px -  parent width -

        // console.log("!", Mode);
        if (Mode == ScrollMode.scroll) return;

        // if (canDrag.current == false) {
        //     // console.log("is false");
        //     return;
        // }

        if (draggerContainDiv.current == null) return;
        let mx = e.clientX;
        let diff = mx - mouseStartX.current;
        let newPos = draggerStartX.current + diff;
        // let parentLeft = draggerContainDiv.current.getBoundingClientRect().x;
        let parentLeft = 24;

        let left = newPos - parentLeft;
        let draggableWidth = draggerContainDiv.current.clientWidth - 200;
        if (left < 0) left = 0;
        if (left > draggableWidth) left = draggableWidth;
        setScrollPercent(left / draggableWidth);

        let oneInterval = draggableWidth / (totalPageCount - 1);
        // console.log("percent: ", percent);
        let k = left / oneInterval;
        let updatedPageIdx = Math.round(k) + 1;
        setPageIdx(updatedPageIdx);
        quickNewPage.current = updatedPageIdx;
    };

    // const thrDrag = useCallback(() => {
    //     console.log("here!");
    //     return throttle(handleDrag, 500);
    // }, []);
    // const thrDrag = useCallback(throttle(handleDrag, 500), []);
    const Thr = throttle(handleDrag, 25);

    useEffect(() => {
        // console.log("Once", Mode);
        // window.removeEventListener("mouseup", handleUp);
        // window.removeEventListener("mousemove", handleDrag);

        window.addEventListener("mouseup", handleUp);
        window.addEventListener("mousemove", Thr);
        return () => {
            window.removeEventListener("mouseup", handleUp);
            window.removeEventListener("mousemove", Thr);
        };
    }, [Mode]); // 这个 event 使用到了 draggableWidthPx。因为draggableWidthPx 在 useMemo. 会随着 Vw 改变而改变

    return (
        <>
            {/* <ViewPortSize {...{ setVw }} /> */}
            <div className="drag-bar-contain" ref={draggerContainDiv}>
                <div
                    className={`drag-bar ${getClass()}`}
                    style={getStyle()}
                    onMouseDown={handleDown}
                    // onMouseMove={debounce(handleDrag, 50)}
                    ref={draggerDiv}
                    // onMouseMove={handleDrag}
                    // onMouseUp={handleUp}   // 这个不行！因为如果鼠标在 div 外面 up(松开点击) 的话，就无法触发这个 event 了。所以需要 window 全局检测
                >{`Drag & Drop`}</div>
            </div>
        </>
    );
};

export default DragBar;
