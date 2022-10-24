import exp from "constants";
import { useState, useContext, useEffect, useRef } from "react";
import { menuContext } from "../../OtherComponent/menuContext";
import DiamondBtn from "../../OtherComponent/diamondBtn";
import { ViewConext } from "../../OtherComponent/viewConext";
import ViewPortSize from "../../OtherComponent/myViewportSize";
import BkPattern from "./bkPattern";

const MenuContain = () => {
    const pattern1 = "https://koox.co.uk/assets/images/shapes/01.png";
    const pattern2 = "https://koox.co.uk/assets/images/shapes/05.png";
    const img =
        "https://koox.co.uk/data/wp-content/uploads/2018/05/Test_nico-575x1024.png";
    const _img =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC";
    const btn2Sty = {
        position: "absolute",
        zIndex: 2,
        right: "70px",
        top: "70px",
    };
    const [Vw, setVw] = useState(0);
    const [Vh, setVh] = useState(0);
    const { setShowBtn } = useContext(menuContext);
    const { setCanChangeView } = useContext(ViewConext);
    const [Expand, setExpand] = useState<boolean>(false);
    const [Above, setAbove] = useState(false);
    const [PageIdx, setPageIdx] = useState<number>(1); // One based
    const [AllData, setAllData] = useState<{}[]>([]);
    const expanded = useRef(false);

    function getClass1() {
        if (Expand) return "expand";
        return "";
    }
    function getClass2() {
        if (Above) return "above";
        return "";
    }

    function expandMenu() {
        setCanChangeView(false);
        setAbove(true);
        setExpand(true);
        setShowBtn(false);
    }
    function shrinkMenu() {
        setCanChangeView(true);
        setExpand(false);
        setShowBtn(true);
        setTimeout(() => {
            setAbove(false);
        }, 1000);
    }

    return (
        <>
            <div id="menu-contain-1" className={getClass2()}>
                {/* <div className="mid-line"></div> */}
                <div id="menu-contain-2" className={getClass1()}>
                    <BkPattern />
                    <div className="menu-contain-3">
                        <div className="one-menu">
                            <div className="bg-img">
                                <img
                                    src={pattern1}
                                    alt="img"
                                    className="pattern"
                                />
                                <img src={img} alt="img" className="bottle" />
                            </div>

                            <div className="text-contain-1 left ">
                                <div
                                    className={`text-contain-2 ${getClass1()}`}
                                >
                                    <div className="text-1">cold-pressed</div>
                                    <div className="text-2">Ultimate Detox</div>
                                    <div className="text-money">$7.95</div>
                                    <DiamondBtn
                                        Fun={expandMenu}
                                        show={!Expand}
                                    />
                                </div>

                                <div
                                    className={`description-contain ${getClass1()}`}
                                >
                                    <div className="description">
                                        <div className="dm dm1">⬩</div>
                                        <div className="dm dm2">⬩</div>

                                        <div className="tt t1">
                                            Made with 100% organic ingredients
                                        </div>
                                        <span className="tt t2">
                                            {`apple, lemon, celery, parsley, spinach, kale, ginger & nothing else`}
                                        </span>
                                        <div className="tt t3">
                                            {`Per 100ml Energy 174kj (41kal) - 
                            Fat 0.0 of which saturated 0.0 - 
                            Carbohydrates 9.3g of which sugar 9.3g - 
                            Fiber 1.0g - Protein 0.3g - Salt 0.03g`}{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <DiamondBtn
                                Sty={btn2Sty}
                                Fun={shrinkMenu}
                                show={Expand}
                            />
                        </div>
                        {/* /// */}

                        <div className="one-menu">
                            <div className="bg-img">
                                <img
                                    src={pattern1}
                                    alt="img"
                                    className="pattern"
                                />
                                <img src={img} alt="img" className="bottle" />
                            </div>

                            <div className="text-contain-1 left ">
                                <div
                                    className={`text-contain-2 ${getClass1()}`}
                                >
                                    <div className="text-1">cold-pressed</div>
                                    <div className="text-2">Ultimate Detox</div>
                                    <div className="text-money">$7.95</div>
                                    <DiamondBtn
                                        Fun={expandMenu}
                                        show={!Expand}
                                    />
                                </div>

                                <div
                                    className={`description-contain ${getClass1()}`}
                                >
                                    <div className="description">
                                        <div className="dm dm1">⬩</div>
                                        <div className="dm dm2">⬩</div>

                                        <div className="tt t1">
                                            Made with 100% organic ingredients
                                        </div>
                                        <span className="tt t2">
                                            {`apple, lemon, celery, parsley, spinach, kale, ginger & nothing else`}
                                        </span>
                                        <div className="tt t3">
                                            {`Per 100ml Energy 174kj (41kal) - 
                            Fat 0.0 of which saturated 0.0 - 
                            Carbohydrates 9.3g of which sugar 9.3g - 
                            Fiber 1.0g - Protein 0.3g - Salt 0.03g`}{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <DiamondBtn
                                Sty={btn2Sty}
                                Fun={shrinkMenu}
                                show={Expand}
                            />
                        </div>
                        {/* /// */}
                    </div>
                </div>
            </div>

            <ViewPortSize {...{ setVh, setVw }} />
        </>
    );
};

export default MenuContain;

// <div id="menu-contain-contain" className={getClass2()}>
//             {/* <div className="mid-line"></div> */}
//             <div id="menu-contain" className={getClass1()}>
//                 <BkPattern />

//                 <div className="bg-img">
//                     <img src={pattern1} alt="img" className="pattern" />
//                     <img src={img} alt="img" className="bottle" />
//                 </div>

//                 <div className="text-contain-1 left ">
//                     <div className={`text-contain-2 ${getClass1()}`}>
//                         <div className="text-1">cold-pressed</div>
//                         <div className="text-2">Ultimate Detox</div>
//                         <div className="text-money">$7.95</div>
//                         <DiamondBtn Fun={expandMenu} show={!Expand} />
//                     </div>

//                     <div className={`description-contain ${getClass1()}`}>
//                         <div className="description">
//                             <div className="dm dm1">⬩</div>
//                             <div className="dm dm2">⬩</div>

//                             <div className="tt t1">
//                                 Made with 100% organic ingredients
//                             </div>
//                             <span className="tt t2">
//                                 {`apple, lemon, celery, parsley, spinach, kale, ginger & nothing else`}
//                             </span>
//                             <div className="tt t3">
//                                 {`Per 100ml Energy 174kj (41kal) -
//                             Fat 0.0 of which saturated 0.0 -
//                             Carbohydrates 9.3g of which sugar 9.3g -
//                             Fiber 1.0g - Protein 0.3g - Salt 0.03g`}{" "}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <DiamondBtn Sty={btn2Sty} Fun={shrinkMenu} show={Expand} />
//             </div>

//             {/* /// */}

//             <div
//                 id="menu-contain"
//                 className={getClass1()}
//                 style={{ transform: "translateY(100%)" }}
//             >
//                 <div className="bg-img">
//                     <img src={pattern1} alt="img" className="pattern" />
//                     <img src={img} alt="img" className="bottle" />
//                 </div>

//                 <div className="text-contain-1 left ">
//                     <div className={`text-contain-2 ${getClass1()}`}>
//                         <div className="text-1">cold-pressed</div>
//                         <div className="text-2">Ultimate Detox</div>
//                         <div className="text-money">$7.95</div>
//                         <DiamondBtn Fun={expandMenu} show={!Expand} />
//                     </div>

//                     <div className={`description-contain ${getClass1()}`}>
//                         <div className="description">
//                             <div className="dm dm1">⬩</div>
//                             <div className="dm dm2">⬩</div>

//                             <div className="tt t1">
//                                 Made with 100% organic ingredients
//                             </div>
//                             <span className="tt t2">
//                                 {`apple, lemon, celery, parsley, spinach, kale, ginger & nothing else`}
//                             </span>
//                             <div className="tt t3">
//                                 {`Per 100ml Energy 174kj (41kal) -
//                             Fat 0.0 of which saturated 0.0 -
//                             Carbohydrates 9.3g of which sugar 9.3g -
//                             Fiber 1.0g - Protein 0.3g - Salt 0.03g`}{" "}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <DiamondBtn Sty={btn2Sty} Fun={shrinkMenu} show={Expand} />

//                 {/* /// */}
//             </div>
//             <ViewPortSize {...{ setVh, setVw }} />
//         </div>
