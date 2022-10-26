import { useState, useRef, useEffect } from "react";
import AllTitle from "./allTitle";
import ProgressBar from "./progressBar";
import { Clip2, ClipTop2 } from "./page2";
import WheelHandler, { scrollType } from "../../OtherComponent/wheelHandler";

const HomeContain = () => {
    const [PageIdx, setPageIdx] = useState<number>(1); // 1 based. from 1 ~ 5;
    const container = useRef<any>(null);

    function flipPage(e: scrollType): void {
        console.log("flip in home");
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

    return (
        <div id="home-contain" ref={container}>
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
            <ProgressBar PageIdx={PageIdx} totalPageCount={5} />
            <WheelHandler actionFun={flipPage} deps={[PageIdx]} />
        </div>
    );
};

export default HomeContain;
