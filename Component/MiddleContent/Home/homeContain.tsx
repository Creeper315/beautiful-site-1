import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { NextPage } from "next";
import AllTitle from "./allTitle";
import ProgressBar from "./progressBar";
import { ImgPage1 } from "./page1";
import { ImgPage2 } from "./page2";
import { ImgPage3 } from "./page3";
import { ImgPage4 } from "./page4";
import { ImgPage5 } from "./page5";

import WheelHandler, { scrollType } from "../../OtherComponent/wheelHandler";
import { throttle } from "lodash";
import UseViewportSize from "../../OtherComponent/myViewportSize";

export enum clipType {
    clipTop = "clipTop",
    clipBottom = "clipBottom",
    clipBoth = "clipBoth",
    overflow = "overflow",
}

const HomeContain: NextPage<{
    PageIdx: number;
    setPageIdx: Dispatch<SetStateAction<number>>;
}> = ({ PageIdx, setPageIdx }) => {
    // console.log("home cont render");
    // const [PageIdx, setPageIdx] = useState<number>(1); // 1 based. from 1 ~ 5;
    const container = useRef<any>(null);
    const [Vw, setVw] = useState(0);
    const [Vh, setVh] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", Thr);
        return () => window.removeEventListener("mousemove", Thr);
    }, [PageIdx, Vw, Vh]);

    function flipPage(e: scrollType): void {
        // console.log("flip in home");
        if (e == scrollType.up) {
            if (PageIdx <= 1) return;
            // console.log(`flip from ${PageIdx} to ${PageIdx - 1}`);
            setPageIdx(PageIdx - 1);
        } else if (e == scrollType.down) {
            if (PageIdx >= 5) return;
            // console.log(`flip from ${PageIdx} to ${PageIdx + 1}`);
            setPageIdx(PageIdx + 1);
        }
    }

    const Thr = throttle(mouseHandler, 70);

    function mouseHandler(e: any) {
        if (container.current == null) return;
        // if (PageIdx == 1 || PageIdx == 3 || PageIdx == 5) {
        const maxDeg = 10;
        let xDeg = (maxDeg * (e.clientX - Vw / 2)) / (Vw / 2);
        let yDeg = (maxDeg * (e.clientY - Vh / 2)) / (Vh / 2);
        xDeg = Number(xDeg.toFixed(3));
        yDeg = Number(yDeg.toFixed(3));
        // console.log("yDeg: ", xDeg, yDeg);

        container.current.style.setProperty("--rotateX", `${-yDeg}deg`);
        container.current.style.setProperty("--rotateY", `${xDeg}deg`);
        // return;
        // }

        let xPc = e.clientX / Vw;
        let yPc = e.clientY / Vh;
        xPc = Number(xPc.toFixed(3));
        yPc = Number(yPc.toFixed(3));
        const ratio = 1;
        // console.log("x,y", xPc * ratio * 100, yPc * ratio * 100);
        container.current.style.setProperty(
            "--percentX",
            `${xPc * ratio * 100}%`
        );
        container.current.style.setProperty(
            "--percentY",
            `${yPc * ratio * 100}%`
        );
    }

    return (
        <div id="home-contain" ref={container}>
            <AllTitle {...{ PageIdx }} />
            <div className="clip-contain">
                <ImgPage2 {...{ PageIdx, type: clipType.clipBoth }} />
                <ImgPage3 {...{ PageIdx, type: clipType.clipBoth }} />
                <ImgPage4 {...{ PageIdx, type: clipType.clipBoth }} />
            </div>
            <div className="clip-top-contain">
                <ImgPage2 {...{ PageIdx, type: clipType.clipTop }} />
                <ImgPage3 {...{ PageIdx, type: clipType.clipTop }} />
                <ImgPage4 {...{ PageIdx, type: clipType.clipTop }} />
                <ImgPage5 {...{ PageIdx, type: clipType.clipTop }} />
            </div>
            <div className="clip-bottom-contain">
                <ImgPage3 {...{ PageIdx, type: clipType.clipBottom }} />
                <ImgPage4 {...{ PageIdx, type: clipType.clipBottom }} />
            </div>
            <div className="overflow-contain">
                <ImgPage1 {...{ PageIdx, type: clipType.overflow }} />
            </div>
            <ProgressBar PageIdx={PageIdx} totalPageCount={5} />
            <WheelHandler
                actionFun={flipPage}
                deps={[PageIdx]}
                scrollBetweenDelay={900}
            />
            <UseViewportSize {...{ setVh, setVw }} />
        </div>
    );
};

export default HomeContain;
