import DiamondBtn from "../../OtherComponent/diamondBtn";
import { NextPage } from "next";

const OneMenu: NextPage<any> = ({
    // getClass1,
    Expand,
    shouldExpand,
    expandMenu,
    pattern1,
    img,
    btn2Sty,
    shrinkMenu,
}) => {
    function getClass1() {
        if (shouldExpand()) return " expand";
        return "";
    }
    return (
        <div className="one-menu">
            <div className={`bg-img ${getClass1()}`}>
                <img src={pattern1} alt="img" className="pattern" />
                <img src={img} alt="img" className="bottle" />
            </div>

            <div className="text-contain-1 left ">
                <div className={`text-contain-2 ${getClass1()}`}>
                    <div className="text-1">cold-pressed</div>
                    <div className="text-2">Ultimate Detox</div>
                    <div className="text-money">$7.95</div>
                    <DiamondBtn Fun={expandMenu} show={!shouldExpand()} />
                </div>

                <div className={`description-contain ${getClass1()}`}>
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
            <DiamondBtn Sty={btn2Sty} Fun={shrinkMenu} show={shouldExpand()} />
        </div>
    );
    2;
};

export default OneMenu;
