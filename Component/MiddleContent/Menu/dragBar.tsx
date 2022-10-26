import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { start } from "repl";

const DragBar: NextPage<any> = ({ PageIdx, totalPageCount, Expand }) => {
    const expandedPadding = 25; // This is default, and is used in .css files as well. (variable.scss)
    const startDragging = useRef(false);
    const mouseStartX = useRef(0);
    const divStartX = useRef(0);
    const div = useRef(null);

    const [Position, setPosition] = useState<number>(0); // 这个是 style 里的 left: 'Position' px 。

    function getClass() {
        if (Expand == true) return "";
        if (Expand == false) return " hide";
        console.log("ERR, cannot get here");
    }
    function getStyle() {
        return { left: `${Position}px` };
    }

    const handleDown = (e: any) => {
        startDragging.current = true;
        // startX.current = e.clientX;
        console.log("down", e);
    };

    const handleDrag = (e: any) => {
        if (startDragging.current == false) return;
        console.log("drag");
        let curPos = e.clientX - expandedPadding;
        setPosition(curPos);
    };

    const handleUp = (e: any) => {
        console.log("up", e);
        startDragging.current = false;
    };

    useEffect(() => {
        console.log("Once");
        window.addEventListener("mouseup", handleUp);
        window.addEventListener("mousemove", handleDrag);

        return () => {
            window.removeEventListener("mouseup", handleUp);
            window.addEventListener("mousemove", handleDrag);
        };
    }, []); // 这个 event 没有使用到 state 或者 prop。所以 deps 是 empty

    return (
        <div className="drag-bar-contain">
            <div
                className={`drag-bar ${getClass()}`}
                style={getStyle()}
                onMouseDown={handleDown}
                ref={div}
                // onMouseMove={handleDrag}
                // onMouseUp={handleUp}   // 这个不行！因为如果鼠标在 div 外面 up(松开点击) 的话，就无法触发这个 event 了。所以需要 window 全局检测
            >{`Drag & Drop`}</div>
        </div>
    );
};

export default DragBar;
