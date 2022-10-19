const apple = "https://koox.co.uk/assets/images/home/apple/apple-flat.png";
const aLeaf = "https://koox.co.uk/assets/images/home/apple/apple-leaf-flat.png";
const bk = "https://koox.co.uk/assets/images/home/apple/background.png";
const hand = "https://koox.co.uk/assets/images/home/apple/hand-flat.png";
const leaf1 = "https://koox.co.uk/assets/images/home/apple/leaf-1.png";
const leaf2 = "https://koox.co.uk/assets/images/home/apple/leaf-2.png";
const leaf3 = "https://koox.co.uk/assets/images/home/apple/leaf-3.png";
const leaf4 = "https://koox.co.uk/assets/images/home/apple/leaf-4.png";
const leaf6 = "https://koox.co.uk/assets/images/home/apple/leaf-6.png";
const leaf7 = "https://koox.co.uk/assets/images/home/apple/leaf-7.png";
const leaf8 = "https://koox.co.uk/assets/images/home/apple/leaf-8.png";
const leaf9 = "https://koox.co.uk/assets/images/home/apple/leaf-9.png";
import { NextPage } from "next";
import { useEffect, useRef } from "react";
import { getGroupClass, getImgClass } from "./helper";

const clips = {
    apple,
    aLeaf,
    // bk,
    // leaf1,
    // leaf2,
    // leaf3,
    // leaf4,
    // leaf6,
    // leaf7,
    // leaf8,
    leaf9,
};

export function mapImg(
    objArr: { [k: string]: any },
    thisPage: number,
    PageIdx: number
): any[] {
    let result = [];
    let idx = 0;
    for (let name in objArr) {
        let img = objArr[name];
        let e = (
            <img
                className={getImgClass(name, thisPage, PageIdx)}
                src={img}
                alt="img"
                key={idx}
            />
        );
        result.push(e);
        idx++;
    }
    return result;
}

export const Clip2: NextPage<{ PageIdx: number }> = ({ PageIdx }) => {
    const contain = useRef<any>(null);

    return (
        <div className={getGroupClass(2)} ref={contain}>
            {mapImg(clips, 2, PageIdx)}
        </div>
    );
};

export const ClipTop2: NextPage<{ PageIdx: number }> = ({ PageIdx }) => {
    return (
        <div className={getGroupClass(2)}>
            {/* <img
                className={getImgClass("hand", 2, PageIdx)}
                src={hand}
                alt="img"
            /> */}
        </div>
    );
};
