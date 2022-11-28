import DiamondBtn from "../../OtherComponent/diamondBtn";
import { NextPage } from "next";
import { dataType } from "./data";
import { useContext } from "react";
import { MediaContext } from "../../OtherComponent/mediaQueryContext";

export enum txtDir {
    left = "txtLeft",
    right = "txtRight",
}

// type DataStructure = {
//     Img: { img: string; bkImg: string };
//     Text: { type: string; name: string; price: string };
//     Description: { line1: string; line2: string; line3: string };
// };

type prop = {
    shouldExpand: Function;
    expandMenu: Function;
    shrinkMenu: Function;
    btn2Sty: object;
    PageIdx: number;
    MenuData: dataType;
    Dir: txtDir;
    Idx: number;
};

const OneMenu: NextPage<prop> = ({
    shouldExpand,
    expandMenu,
    shrinkMenu,
    btn2Sty,
    PageIdx,
    MenuData,
    Dir,
    Idx,
}) => {
    const { isBigScreen } = useContext(MediaContext);

    function getClass1() {
        if (shouldExpand()) return " expand";
        return "";
    }

    function getClass2() {
        if (PageIdx != Idx + 1) return " hide";
        if (shouldExpand()) return " expand";

        return "";
    }

    return (
        <div className="one-menu">
            <div className={`bg-img ${getClass1()} ${Dir}`}>
                {isBigScreen ? (
                    <img src={MenuData.bk} alt="img" className="pattern" />
                ) : null}
                <img src={MenuData.img} alt="img" className="bottle" />
            </div>

            <div className={`text-contain-1 ${Dir} `}>
                <div className={`text-contain-2 ${getClass2()}`}>
                    {/* <div className={`text-contain-3 ${getClass1()}`}> */}
                    <div className="text-1">{MenuData.category}</div>
                    <div className="text-2">{MenuData.title}</div>
                    <div className="text-money">
                        <div>$</div>
                        {MenuData.price}
                    </div>

                    <DiamondBtn Fun={expandMenu} show={!shouldExpand()} />
                    {/* </div> */}
                </div>

                <div className={`description-contain ${getClass1()}`}>
                    <div className="description">
                        <div className="dm dm1">⬩</div>
                        <div className="dm dm2">⬩</div>

                        <div className="tt t1">
                            {MenuData.description.title}
                        </div>
                        <span className="tt t2">
                            {MenuData.description.para1}
                        </span>
                        <div className="tt t3">
                            {MenuData.description.para2}
                        </div>
                    </div>
                </div>
            </div>
            <DiamondBtn Sty={btn2Sty} Fun={shrinkMenu} show={shouldExpand()} />
        </div>
    );
};

export default OneMenu;

// return (
//     <div className="one-menu">
//         <div className={`bg-img ${getClass1()} txtRight`}>
//             <img src={MenuData.Img.bkImg} alt="img" className="pattern" />
//             <img src={MenuData.Img.img} alt="img" className="bottle" />
//         </div>

//         <div className="text-contain-1 txtRight ">
//             <div className={`text-contain-2 ${getClass1()}`}>
//                 <div className="text-1">cold-pressed</div>
//                 <div className="text-2">Ultimate Detox</div>
//                 <div className="text-money">$7.95</div>
//                 <DiamondBtn Fun={expandMenu} show={!shouldExpand()} />
//             </div>

//             <div className={`description-contain ${getClass1()}`}>
//                 <div className="description">
//                     <div className="dm dm1">⬩</div>
//                     <div className="dm dm2">⬩</div>

//                     <div className="tt t1">
//                         Made with 100% organic ingredients
//                     </div>
//                     <span className="tt t2">
//                         {`apple, lemon, celery, parsley, spinach, kale, ginger & nothing else`}
//                     </span>
//                     <div className="tt t3">
//                         {`Per 100ml Energy 174kj (41kal) -
// Fat 0.0 of which saturated 0.0 -
// Carbohydrates 9.3g of which sugar 9.3g -
// Fiber 1.0g - Protein 0.3g - Salt 0.03g`}{" "}
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <DiamondBtn Sty={btn2Sty} Fun={shrinkMenu} show={shouldExpand()} />
//     </div>
// );
