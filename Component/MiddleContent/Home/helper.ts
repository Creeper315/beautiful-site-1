// export function getPageSubgroupClass(
//     thisPage: number,
//     PageIdx: number
// ): string {
//     console.log("");
//     let result = "page-sub" + thisPage;
//     if (PageIdx > thisPage) {
//         let diff = PageIdx - thisPage;
//         result += " translate-minus" + diff;
//     }
//     if ((PageIdx = thisPage)) result += " translate-0";
//     if (PageIdx < thisPage) {
//         let diff = thisPage - PageIdx;

//         result += " translate+plus" + diff;
//     }
//     return result;
// }

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
