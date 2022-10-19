import { useState, useRef, useEffect } from "react";
import AllTitle from "./allTitle";
import ProgressBar from "./progressBar";
import { Overflow1 } from "./page1";
import { Clip2, ClipTop2 } from "./page2";

const HomeContain = () => {
    const [PageIdx, setPageIdx] = useState<number>(1); // 1 based. from 1 ~ 5;
    const container = useRef<any>(null);
    const prevMomentum = useRef<number | null>(0); // 用来辅助检测用户是否有新的 scroll 动作。（因为scroll 的 deltaY 是渐渐减少）
    const canScroll = useRef<boolean>(true); // scroll 一次后，需要等page 滑动一段时间，才能下一次记录 scroll
    const scrollBetweenDelay = 800;

    enum scroll {
        up = "up",
        down = "down",
    }

    function flipPage(e: scroll): void {
        if (e == scroll.up) {
            if (PageIdx <= 1) return;
            // console.log(`flip from ${PageIdx} to ${PageIdx - 1}`);
            setPageIdx(PageIdx - 1);
        } else if (e == scroll.down) {
            if (PageIdx >= 5) return;
            // console.log(`flip from ${PageIdx} to ${PageIdx + 1}`);
            setPageIdx(PageIdx + 1);
        }
    }

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
            flipPage(scroll.down);
            // console.log("detect scroll " + scroll.down);
        } else if (momentum < 0) {
            flipPage(scroll.up);
            // console.log("detect scroll " + scroll.up);
        }
        prevMomentum.current = null;
        // listenLater();
        halt();
    }
    // useEffect(() => {
    //     window.addEventListener("wheel", listen);
    //     return () => window.removeEventListener("wheel", listen);
    // }, []);

    return (
        <div id="home-contain" ref={container} onWheelCapture={handleWheel}>
            <AllTitle {...{ PageIdx }} />
            <div className="clip-contain">
                <Clip2 {...{ PageIdx }} />
            </div>
            <div className="clip-top-contain">
                <ClipTop2 {...{ PageIdx }} />
            </div>
            <div className="clip-bottom-contain"></div>
            <div className="overflow-contain">
                {/* <Overflow1 {...{ PageIdx }} /> */}
            </div>
            <ProgressBar {...{ PageIdx }} />
        </div>
    );
};

export default HomeContain;
