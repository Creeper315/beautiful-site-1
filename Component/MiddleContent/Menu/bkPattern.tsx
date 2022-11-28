import { NextPage } from "next";
import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import ViewPortSize from "../../OtherComponent/myViewportSize";

export enum ScrollMode {
    scroll = "scroll",
    drag = "drag",
}
type prop = {
    PageIdx: number;
    // ScrollPercent: number;
    Mode: ScrollMode;
};

const BkPattern: NextPage<any> = ({
    Mode,
    PageIdx,
    ScrollPercent,
    totalPageCount,
    totalBkScrollPx,
    bkRef,
}) => {
    //

    // const [BkPosition, setBkPosition] = useState(0);
    // const prevPageIdx = useRef(1);
    const scrollRatio = 0.3;
    const [Vh, setVh] = useState(0);
    // const totalPageCount = 20;
    const onePagePx = totalBkScrollPx / totalPageCount;

    function gClass() {
        let s = Mode == ScrollMode.drag ? "drag" : "";
        return "bk-pattern " + s;
    }

    function addStyle() {
        // calculate bkPositionFirst
        // console.log("PageIdx ", PageIdx);
        let BkPosition = 0;

        if (Mode == ScrollMode.scroll) {
            // console.log("herer");
            let px = -(PageIdx - 1) * onePagePx;
            // scrollToPx(px);

            BkPosition = Math.floor(px);
            // console.log("new BkPosition: ", BkPosition);
            return { backgroundPosition: `0px ${BkPosition}px` };
        }
        if (Mode == ScrollMode.drag) {
            // it is handled by calling 'childRef.current.scrollToPercent()' from the parent  ??
            // let px = -totalBkScrollPx * ScrollPercent;
            // BkPosition = Math.floor(px);
            return {};
        }

        // return { backgroundPosition: `0px ${BkPosition}px` };
    }

    // useImperativeHandle(myRef, () => ({
    // scrollByAmount,
    // scrollToPercent,
    // }));

    return (
        <>
            <div className={gClass()} style={addStyle()} ref={bkRef}></div>
            <ViewPortSize {...{ setVh }} />
        </>
    );
};
export default BkPattern;
