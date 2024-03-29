import { NextPage } from "next";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { ScrollMode } from "./bkPattern";
import ViewPortSize from "../../OtherComponent/myViewportSize";
import { throttle } from "lodash";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const DragBar: NextPage<any> = ({
    Mode,
    setMode,
    PageIdx,
    scrollPercent,
    setPercentByPage,
    setPageByPercent,
    totalPageCount,
    Expand,
    draggableWidth,
    setRefPercent,
    dragRef,
    Vw,
}) => {
    // console.log("drag re re", Mode);
    const dragBtnWidth = 200;
    const expandedPadding = 25; // This is default, and is used in .css files as well. (variable.scss)
    const mouseStartX = useRef(expandedPadding);
    const draggerStartX = useRef(expandedPadding);
    // const dragRef = useRef<any>(null);
    const draggerContainDiv = useRef<any>(null);
    const lastPercent = useRef(0);

    draggableWidth.current = useMemo(() => {
        if (draggerContainDiv.current != null) {
            // console.log(
            //     "draggableWidth ",
            //     draggerContainDiv.current.clientWidth - 200
            // );
            return draggerContainDiv.current.clientWidth - 200;
        } else {
            // "~ null ? but it should be set" , because draggerContainDiv.current is dep
            return 100;
        }
    }, [draggerContainDiv.current, Vw]);

    function getClass() {
        if (Expand == true) return "";
        if (Expand == false) return " hide";
        console.log("ERR, cannot get here");
    }

    const getStyle = () => {
        // 这个 function，就是假设，PageIdx 和 Percent，和 Mode 已经给出了，来 return {left: px}
        // 通过 PageIdx 或者 Percent，直接 return 出 left: 多少 px。（省略了 Position / setPosition）
        if (draggerContainDiv.current == null) return {}; // 这种情况就用 css 里面的 default style
        // console.log("in drag! ", Mode, PageIdx, ScrollPercent);

        if (Mode == ScrollMode.scroll || Mode == ScrollMode.beforeDrag) {
            let interval = draggableWidth.current / (totalPageCount - 1);
            // console.log("interval: ", draggableWidthPx, totalPageCount);
            let pos = (PageIdx - 1) * interval;
            pos = Math.round(pos);
            // console.log("pos: ", pos);
            return { left: `${pos}px` };
        }
        if (Mode == ScrollMode.drag) {
            // let pos = Math.round(draggableWidth.current * ScrollPercent);
            // console.log("pos: ", pos);
            // return { left: `${pos}px` };
            return {};
        }
        console.log("can't get here ~");
        return {};
    };

    // const [Test, setTest] = useState(0);

    const handleDown = (e: any) => {
        // console.log("Down", ScrollPercent);
        setMode(ScrollMode.beforeDrag);
        lastPercent.current = scrollPercent.current;

        mouseStartX.current = e.clientX;
        draggerStartX.current = dragRef.current.getBoundingClientRect().x;

        // if (draggerContainDiv.current == null) return;
    };

    const handleUp = (e: any) => {
        // 如果 percent 是临近的 page 位置，就位移到临近的 page 位置。
        if (Mode == ScrollMode.scroll) return;
        setMode(ScrollMode.scroll);
        // console.log("handle up: ");
        let newPageIdx = setPageByPercent(lastPercent.current);
        setPercentByPage(newPageIdx);
    };

    const handleDrag = (e: any) => {
        // console.log("!", Mode);
        if (Mode == ScrollMode.scroll) return;
        if (Mode == ScrollMode.beforeDrag) setMode(ScrollMode.drag);

        if (draggerContainDiv.current == null) return;
        let mx = e.clientX;
        let diff = mx - mouseStartX.current;
        let newPos = draggerStartX.current + diff;
        let parentLeft = 24;

        let left = newPos - parentLeft;
        if (left < 0) left = 0;
        if (left > draggableWidth.current) left = draggableWidth.current;
        let per = left / draggableWidth.current;
        // console.log("handle drag ", per);
        setRefPercent(per);
        scrollPercent.current = per;
        lastPercent.current = per;
        setPageByPercent(lastPercent.current);
    };

    const Thr = throttle(handleDrag, 30);

    useEffect(() => {
        // console.log("Once", Mode);

        window.addEventListener("mouseup", handleUp);
        window.addEventListener("mousemove", Thr);
        return () => {
            window.removeEventListener("mouseup", handleUp);
            window.removeEventListener("mousemove", Thr);
        };
    }, [Mode]); // 这个 event 使用到了 draggableWidthPx。因为draggableWidthPx 在 useMemo. 会随着 Vw 改变而改变

    return (
        <>
            <div className="drag-bar-contain" ref={draggerContainDiv}>
                <div
                    className={`drag-bar ${getClass()}`}
                    style={getStyle()}
                    onMouseDown={handleDown}
                    ref={dragRef}
                    // onMouseUp={handleUp}   // 这个不行！因为如果鼠标在 div 外面 up(松开点击) 的话，就无法触发这个 event 了。所以需要 window 全局检测
                >
                    <MdKeyboardArrowLeft className="arr-left" />
                    {"Drag & Drop " + PageIdx}
                    <span style={{ margin: "0 2px" }}>/</span>
                    {totalPageCount}
                    <MdKeyboardArrowRight className="arr-right" />
                </div>
            </div>
        </>
    );
};

export default DragBar;
