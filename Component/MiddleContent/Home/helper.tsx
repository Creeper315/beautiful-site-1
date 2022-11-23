import { ReactElement } from "react";

export function getGroupClass(thisPage: number) {
    return "page-sub" + thisPage;
}

export function getImgClass(
    baseName: string,
    thisPage: number,
    PageIdx: number
): string {
    let result = baseName + " ";
    if (PageIdx > thisPage) {
        let diff = PageIdx - thisPage;
        result += "translate-minus" + diff;
    } else if (PageIdx < thisPage) {
        let diff = thisPage - PageIdx;
        result += "translate-plus" + diff;
    } else if ((PageIdx = thisPage)) result += "translate-0";
    return result;
}

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
type inp = {
    myPage: number;
};

type funType = (
    myPage: number,
    imgArr: { [k: string]: any },
    PageIdx: number,
    zIndex?: number
) => ReactElement;

export const layerOfImg: funType = (myPage, imgArr, PageIdx, zIndex) => {
    let arr = mapImg(imgArr, myPage, PageIdx);
    if (zIndex == undefined) zIndex = 0;
    let result = (
        <div className={getGroupClass(myPage)} style={{ zIndex }}>
            {arr}
        </div>
    );

    return result;
};
