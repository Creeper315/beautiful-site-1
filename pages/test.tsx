import { useRef } from "react";
import { throttle } from "lodash";

const Test = () => {
    const parent = useRef<any>(null);
    // const thr = throttle(hand, 90);
    // function hand(e: any) {
    //     // console.log(e.clientX / 1400, e.clientY / 716);
    //     ur.current.style.setProperty("--xx", `${(0.7 * e.clientX) / 14}%`);
    //     ur.current.style.setProperty("--yy", `${(0.7 * e.clientY) / 7.16}%`);
    // }

    return (
        <div id="test-page">
            <div className="parent" ref={parent}>
                <div className="child c1">
                    <div className="sub s1">
                        <div className="item i1">11</div>
                        <div className="item i2">22</div>
                    </div>
                </div>
                <div className="child c2">
                    <div className="sub s2">
                        <div className="item i3">33</div>
                        <div className="item i4">44</div>
                    </div>
                </div>
                {/* <div className="child three">Three</div>
                <div className="child four">Three</div> */}
            </div>
        </div>
    );
};

export default Test;
