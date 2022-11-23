const bk = "https://koox.co.uk/assets/images/home/tomatoes/glow.png";
const ground = "https://koox.co.uk/assets/images/home/tomatoes/ground.png";
const knife = "https://koox.co.uk/assets/images/home/tomatoes/knife-flat.png";

// tomato left - right
const tomato1 =
    "https://koox.co.uk/assets/images/home/tomatoes/slide-3-tomatoes-background-1.png";
const tomato2 =
    "https://koox.co.uk/assets/images/home/tomatoes/slide-3-tomatoes-background-2.png";
const tomato3 =
    "https://koox.co.uk/assets/images/home/tomatoes/slide-3-tomatoes-middleground.png";
const tomato4 =
    "https://koox.co.uk/assets/images/home/tomatoes/slide-3-tomatoes-foreground.png";

const leaf1 =
    "https://koox.co.uk/assets/images/home/tomatoes/slide-3-leaves-background-1.png";
const leaf2 =
    "https://koox.co.uk/assets/images/home/tomatoes/slide-3-leaves-background-right.png";
const leaf3 =
    "https://koox.co.uk/assets/images/home/tomatoes/slide-3-leaves-middleground.png";
const leaf4 =
    "https://koox.co.uk/assets/images/home/tomatoes/slide-3-leaves-foreground.png";

import { NextPage } from "next";
import { layerOfImg } from "./helper";
import { clipType } from "./homeContain";

type propType = NextPage<{ PageIdx: number; type: clipType }>;

export const ImgPage4: propType = ({ PageIdx, type }) => {
    const imgLayer0 = { knife };
    const imgLayer1 = {
        bk,
        ground,
        leaf1,
        leaf2,
        tomato1,
        tomato2,
    };
    const imgLayer2 = {
        tomato3,
        leaf3,
    };
    const imgLayer3 = { leaf4, tomato4 };

    if (type == clipType.clipBottom) {
        return layerOfImg(4, imgLayer0, PageIdx, 1);
    }
    if (type == clipType.clipBoth) {
        return (
            <>
                {layerOfImg(4, imgLayer1, PageIdx, 0)}
                {layerOfImg(4, imgLayer2, PageIdx, 2)}
            </>
        );
    }
    if (type == clipType.clipTop) {
        return layerOfImg(4, imgLayer3, PageIdx, 3);
    }
    return null;
};
