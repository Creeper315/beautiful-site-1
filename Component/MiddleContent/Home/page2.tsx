const apple = "https://koox.co.uk/assets/images/home/apple/apple.png";
const aLeaf =
    "https://koox.co.uk/assets/images/home/apple/apple-background-leaf.png";
const aLeaf2 = "https://koox.co.uk/assets/images/home/apple/apple-leaf.png";
const bk = "https://koox.co.uk/assets/images/home/apple/background.png";
const hand = "https://koox.co.uk/assets/images/home/apple/hand-flat.png";

const leaf0 = "https://koox.co.uk/assets/images/home/apple/leaf-5.png";
const leaf1 = "https://koox.co.uk/assets/images/home/apple/leaf-3.png";
const leaf2 = "https://koox.co.uk/assets/images/home/apple/leaf-4.png";
const leaf3 = "https://koox.co.uk/assets/images/home/apple/leaf-5.png";
const leaf4 = "https://koox.co.uk/assets/images/home/apple/leaf-8.png";
const leaf5 = "https://koox.co.uk/assets/images/home/apple/leaf-7.png";
const leaf6 = "https://koox.co.uk/assets/images/home/apple/leaf-6.png";
const leaf7 = "https://koox.co.uk/assets/images/home/apple/leaf-2.png";
const leaf8 = "https://koox.co.uk/assets/images/home/apple/leaf-9.png";
import { NextPage } from "next";
import { getGroupClass, layerOfImg } from "./helper";
import { clipType } from "./homeContain";

const imgLayer0 = {
    apple,
    aLeaf,
    aLeaf2,
    bk,
    leaf0,
    leaf1,
    leaf2,
    leaf3,
    leaf4,
    leaf5,
    leaf6,
};

const imgLayer1 = {
    leaf7,
    leaf8,
};

export const ImgPage2: NextPage<{ PageIdx: number; type: clipType }> = ({
    PageIdx,
    type,
}) => {
    function getHandClass(
        baseName: string,
        thisPage: number,
        PageIdx: number
    ): string {
        let result = baseName + " ";
        if (PageIdx > thisPage) {
            let diff = PageIdx - thisPage;
            result += "translate-plus" + diff;
        } else if (PageIdx < thisPage) {
            let diff = thisPage - PageIdx;
            result += "translate-plus" + diff;
        } else if ((PageIdx = thisPage)) result += "translate-0";
        return result;
    }

    if (type == clipType.clipBoth) {
        return (
            <>
                {layerOfImg(2, imgLayer0, PageIdx)}
                {layerOfImg(2, imgLayer1, PageIdx, 2)}
            </>
            // <div className={getGroupClass(2)}>
            //     {mapImg(imgLayer0, 2, PageIdx)}
            // </div>
        );
    }
    if (type == clipType.clipBottom) return null;

    if (type == clipType.clipTop) {
        return (
            <div className={getGroupClass(2)} style={{ zIndex: 1 }}>
                <img
                    className={getHandClass("hand", 2, PageIdx)}
                    src={hand}
                    alt="img"
                />
            </div>
        );
    }
    if (type == clipType.overflow) return null;

    return null;
};
