import { useRef } from "react";
import { throttle } from "lodash";
// import Std from "styled-components";

// const StComp = Std.div`
//         width: 50px;
//         height: 50px;
//         background-color: green;
//     `;

const Test = () => {
    const parent = useRef<any>(null);
    // const thr = throttle(hand, 90);
    // function hand(e: any) {
    //     // console.log(e.clientX / 1400, e.clientY / 716);
    //     ur.current.style.setProperty("--xx", `${(0.7 * e.clientX) / 14}%`);
    //     ur.current.style.setProperty("--yy", `${(0.7 * e.clientY) / 7.16}%`);
    // }

    // const MyComp = (prop: any) => {
    //     return (
    //         <button
    //             className={prop.hi}
    //             children={prop.cc}
    //             onClick={() => console.log("whats prop", prop)}
    //         ></button>
    //     );
    // };

    return (
        <div id="test-page">
            {/* <MyComp hi="my-class" cc={<p>oh wow how are you</p>} primary /> */}
            {/* <StComp></StComp> */}

            {/* <div className="parent" ref={parent}>
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
            </div> */}
        </div>
    );
};

export default Test;
