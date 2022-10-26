import { useState, useRef, useEffect } from "react";
import { NextPage } from "next";

export enum scrollType {
    up = "up",
    down = "down",
}

const WheelHandler: NextPage<any> = ({
    actionFun,
    deps,
    scrollBetweenDelay,
}) => {
    const prevMomentum = useRef<number | null>(0); // 用来辅助检测用户是否有新的 scroll 动作。（因为scroll 的 deltaY 是渐渐减少）
    const canScroll = useRef<boolean>(true); // scroll 一次后，需要等page 滑动一段时间，才能下一次记录 scroll
    if (scrollBetweenDelay == undefined) scrollBetweenDelay = 800;

    // function flipPage(e: scrollType): void {
    //     if (e == scrollType.up) {
    //         if (PageIdx <= 1) return;
    //         // console.log(`flip from ${PageIdx} to ${PageIdx - 1}`);
    //         setPageIdx(PageIdx - 1);
    //     } else if (e == scrollType.down) {
    //         if (PageIdx >= 5) return;
    //         // console.log(`flip from ${PageIdx} to ${PageIdx + 1}`);
    //         setPageIdx(PageIdx + 1);
    //     }
    // }

    function halt() {
        canScroll.current = false;
        setTimeout(() => {
            canScroll.current = true;
        }, scrollBetweenDelay);
    }

    function handleWheel(e: any) {
        if (canScroll.current == false) return;
        const momentum = e.deltaY;
        if (prevMomentum.current == null) {
            prevMomentum.current = momentum;
            return;
        }
        let diff = Math.abs(momentum) - Math.abs(prevMomentum.current);
        // console.log("diff: ", momentum, prevMomentum.current, diff);
        if (diff <= 2) {
            // 速度在自然下降。无人为滑动
            prevMomentum.current = momentum;
            return;
        }
        // 速度维持不变，或者在上升，说明是人为改变了速度。
        if (momentum == 0) {
            return;
        }
        if (momentum > 0) {
            // flipPage(scrollType.down);
            actionFun(scrollType.down);
            // console.log("detect scroll " + scrollType.down);
        } else if (momentum < 0) {
            // flipPage(scrollType.up);
            actionFun(scrollType.up);
            // console.log("detect scroll " + scrollType.up);
        }
        prevMomentum.current = null;
        // listenLater();
        halt();
    }

    useEffect(() => {
        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel", handleWheel);
    }, [deps]);

    return <div className="d-none"></div>;
};

export default WheelHandler;
