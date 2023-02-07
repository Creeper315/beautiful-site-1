import { useRef, useState } from "react";
import { throttle } from "lodash";
import SC from "styled-components";

// import Std from "styled-components";

// const StComp = Std.div`
//         width: 50px;
//         height: 50px;
//         background-color: green;
//     `;

const MyDiv = SC.div`
    width: 180px;
    height:180px;
    background-color:green;
    color: white;
`;

const Test = () => {
    const parent = useRef<any>(null);
    const [SS, setSS] = useState<any>(1);

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
    console.log("Test Rerender !", SS);

    const a = [3];

    const f1 = () => {
        // setSS((SS: any) => {
        //     console.log("SS f1 ", SS);
        //     SS.push(1);
        //     return SS;
        // });

        // setSS((SS: any) => {
        //     SS.push(2);
        //     return Array.from(SS);
        // });
        // console.log("SS f2 ", SS);

        // setSS((SS: any) => {
        //     SS.push(4);
        //     return Array.from(SS);
        // });
        // console.log("SS f2 ", SS);
        setSS((SS: any) => SS + 1);
        console.log("SS f2 ", SS);
        setSS((SS: any) => SS + 1);
        console.log("SS f2 ", SS);
        setSS((SS: any) => SS + 1);
        console.log("SS f2 ", SS);
    };

    const f2 = () => {
        // SS.push(1);
        // console.log("SS f2 ", SS);
        // SS.push(2);
        // console.log("SS f2 ", SS);
        // setSS(Array.from(SS));
        // SS.push(2);
        // setSS(Array.from(SS));
        // console.log("SS f2 ", SS);
        // SS.push(4);
        // setSS(Array.from(SS));
        // console.log("SS f2 ", SS);
        setSS(SS + 1);
        console.log("SS f2 ", SS);
        setSS(SS + 1);
        console.log("SS f2 ", SS);
        setSS(SS + 1);
        console.log("SS f2 ", SS);
    };

    return (
        <div id="test-page">
            <MyDiv onClick={f1}>val: {JSON.stringify(SS)}</MyDiv>
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
