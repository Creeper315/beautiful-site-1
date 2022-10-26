import { NextPage } from "next";
import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import ViewPortSize from "../../OtherComponent/myViewportSize";

export enum scrollMode {
    ByPage = "1",
    ByPercent = "2",
}
type prop = {
    PageIdx: number;
    ScrollPercent: number;
    Mode: scrollMode;
};

const BkPattern: NextPage<any> = forwardRef(
    ({ PageIdx, ScrollPercent, Mode, pageCount }, myRef) => {
        //

        // const [BkPosition, setBkPosition] = useState(0);
        // const prevPageIdx = useRef(1);
        const scrollRatio = 0.3;
        const [Vh, setVh] = useState(0);
        // const pageCount = 20;
        const allPagePx = Math.round(pageCount * Vh * scrollRatio);
        const onePagePx = allPagePx / pageCount;

        function addStyle() {
            // calculate bkPositionFirst
            // console.log("PageIdx ", PageIdx);
            let BkPosition = 0;

            if (Mode == scrollMode.ByPage) {
                // console.log("herer");
                let px = -(PageIdx - 1) * onePagePx;
                // scrollToPx(px);

                BkPosition = Math.floor(px);
                // console.log("new BkPosition: ", BkPosition);
            }
            if (Mode == scrollMode.ByPercent) {
                // it is handled by calling 'childRef.current.scrollToPercent()' from the parent  ??
                // scrollToPercent(ScrollPercent); ;
                let px = allPagePx * ScrollPercent;
                BkPosition = Math.floor(px);
            }

            return { backgroundPosition: `0px ${BkPosition}px` };
        }
        // function scrollByAmount(px: number) {
        //     // positive px - scroll down by ... px
        //     // negative px - scroll up by ... px
        //     px = Math.round(px);
        //     setBkPosition(BkPosition + px);
        // }
        // function scrollToPercent(per: number) {
        //     // input per from 0 ~ 1.
        //     let px = allPagePx * per;
        //     scrollToPx(px);
        // }
        // function scrollToPx(px: number) {
        //     px = Math.floor(px);
        //     setBkPosition(px);
        // }

        useImperativeHandle(myRef, () => ({
            // scrollByAmount,
            // scrollToPercent,
        }));

        return (
            <>
                <div className="bk-pattern" style={addStyle()}></div>
                <ViewPortSize {...{ setVh }} />
            </>
        );
    }
);

export default BkPattern;