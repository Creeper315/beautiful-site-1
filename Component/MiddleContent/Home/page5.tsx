const leaf_2 = "https://koox.co.uk/assets/images/home/menu/houx.png";
const leaf_3 = "https://koox.co.uk/assets/images/home/menu/medium-leaf.png";
const leaf_5 = "https://koox.co.uk/assets/images/home/menu/5leaf-branch.png";
const leaf_7 = "https://koox.co.uk/assets/images/home/menu/branch-olive.png";
const leaf_8 = "https://koox.co.uk/assets/images/home/menu/twig.png";
const leaf_11 = "https://koox.co.uk/assets/images/home/menu/persil.png";

const ali_8 = "https://koox.co.uk/assets/images/home/menu/ail.png";
const onion_5 = "https://koox.co.uk/assets/images/home/menu/oignon.png";
const olive_9 = "https://koox.co.uk/assets/images/home/menu/olive.png";
const orange_10 = "https://koox.co.uk/assets/images/home/menu/orange.png";

const allImg = {
    leaf_2,
    leaf_3,
    leaf_5,
    leaf_7,
    leaf_8,
    leaf_11,
    ali_8,
    onion_5,
    olive_9,
    orange_10,
};

import { clipType } from "./homeContain";
import { NextPage } from "next";
import { layerOfImg } from "./helper";

type propType = NextPage<{ PageIdx: number; type: clipType }>;

export const ImgPage5: propType = ({ PageIdx, type }) => {
    if (type == clipType.clipTop) {
        return layerOfImg(5, allImg, PageIdx);
    }
    return null;
};
