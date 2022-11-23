import { useEffect, useRef } from "react";

const lb1 = "https://koox.co.uk/assets/images/home/intro/casserole.png";
const lb2 = "https://koox.co.uk/assets/images/home/intro/5leafs-branche.png";
const lt1 = "https://koox.co.uk/assets/images/home/intro/long-leaf.png";
const lt2 = "https://koox.co.uk/assets/images/home/intro/mini-leaf-orange.png";
const rt1 = "https://koox.co.uk/assets/images/home/intro/3roundleafs.png";
const rt2 = "https://koox.co.uk/assets/images/home/intro/branch-ball.png";
const lm = "https://koox.co.uk/assets/images/home/intro/mini-leaf.png";
const bm = "https://koox.co.uk/assets/images/home/intro/balls-red-green.png";
const rm = "https://koox.co.uk/assets/images/home/intro/red-ball.png";
const rb1 = "https://koox.co.uk/assets/images/home/intro/spoon.png";
const rb2 = "https://koox.co.uk/assets/images/home/intro/tomato.png";

const allImg = { lb1, lb2, lt1, lt2, rt1, rt2, lm, bm, rm, rb1, rb2 };

import { NextPage } from "next";
import { getGroupClass } from "./helper";
import { layerOfImg } from "./helper";
import { clipType } from "./homeContain";
// page-sub1 up     //  page-sub1    //   page-sub1 down

export const ImgPage1: NextPage<{ PageIdx: number; type: clipType }> = ({
    PageIdx,
    type,
}) => {
    if (type == clipType.clipBoth) {
        return null;
    }
    if (type == clipType.clipTop) {
        return null;
    }
    if (type == clipType.clipBottom) {
        return null;
    }
    if (type == clipType.overflow) {
        return (
            <>{layerOfImg(1, allImg, PageIdx)}</>
            // <div
            //     className={getGroupClass(1)}
            //     // onMouseMove={mouseListner}
            //
            // >
            //     {mapImg(allImg, 1, PageIdx)}
            // </div>
        );
    }
    return null;
};

// return (
//         <div className={getGroupClass(1)}>
//             {mapImg(allImg, 1, PageIdx)}
//             {/* <img className="lb1" src={lb1} alt="img" />
//             <img className="lb2" src={lb2} alt="img" />
//             <img className="lt1" src={lt1} alt="img" />
//             <img className="lt2" src={lt2} alt="img" />
//             <img className="rt1" src={rt1} alt="img" />
//             <img className="rt2" src={rt2} alt="img" />
//             <img className="bm" src={bm} alt="img" />
//             <img className="rb1" src={rb1} alt="img" />
//             <img className="rb2" src={rb2} alt="img" />
//             <img className="lm" src={lm} alt="img" />
//             <img className="rm" src={rm} alt="img" /> */}
//         </div>
//     );
