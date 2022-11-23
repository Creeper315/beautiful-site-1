// tofu clockwise
const bigTofu = "https://koox.co.uk/assets/images/home/pepper/feta.png";
const tofu1 = "https://koox.co.uk/assets/images/home/pepper/feta-slice-4.png";
const tofu2 = "https://koox.co.uk/assets/images/home/pepper/feta-slice-3.png";
const tofu3 = "https://koox.co.uk/assets/images/home/pepper/feta-slice-2.png";
const tofu4 = "https://koox.co.uk/assets/images/home/pepper/feta-slice-1.png";
const ground = "https://koox.co.uk/assets/images/home/pepper/ground.png";
//leaf top - bottom
const leaf1 = "https://koox.co.uk/assets/images/home/pepper/leaf-3.png";
const leaf2 = "https://koox.co.uk/assets/images/home/pepper/leaf-3.png";
const leaf3 = "https://koox.co.uk/assets/images/home/pepper/leaf-1.png";
const leaf4 = "https://koox.co.uk/assets/images/home/pepper/leaf-2.png";
const leaf5 = "https://koox.co.uk/assets/images/home/pepper/leaves.png";
//
const bk = "https://koox.co.uk/assets/images/home/chef/glow.png";

import pepperMain from "../../../public/img/pepper1.png";
import pepperLeft from "../../../public/img/pepper2.png";
import pepperSlice from "../../../public/img/pepperSlice.png";

import { NextPage } from "next";
import { clipType } from "./homeContain";
import { layerOfImg } from "./helper";

const pepper1 = pepperMain.src;
const pepper2 = pepperLeft.src;
const pepper3 = pepperSlice.src;

const imgLayer0 = { leaf1, leaf2, leaf3, leaf4 };

const imgLayer1 = { bk, pepper1, pepper2, ground };

const imgLayer2 = { bigTofu, tofu1, tofu2, tofu3, tofu4, pepper3 };

const imgLayer3 = { leaf5 };

export const ImgPage3: NextPage<{ PageIdx: number; type: clipType }> = ({
    PageIdx,
    type,
}) => {
    if (type == clipType.clipBottom) {
        return layerOfImg(3, imgLayer0, PageIdx, 2);
    }
    if (type == clipType.clipBoth) {
        return (
            <>
                {layerOfImg(3, imgLayer1, PageIdx, 0)}
                {layerOfImg(3, imgLayer3, PageIdx, 2)}
            </>
        );
    }
    if (type == clipType.clipTop) {
        return layerOfImg(3, imgLayer2, PageIdx, 1);
    }

    return null;
};
