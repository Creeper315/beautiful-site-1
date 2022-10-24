import { NextPage } from "next";
import { useRef, useState } from "react";
import { BsPlusLg } from "react-icons/bs";

const DiamondBtn: NextPage<any> = ({ Fun, show, Sty }) => {
    const size = 65;
    const parent = useRef<HTMLDivElement>(null);
    const [OuterX, setOuterX] = useState(0);
    const [InnerX, setInnerX] = useState(0);
    const [OuterY, setOuterY] = useState(0);
    const [InnerY, setInnerY] = useState(0);

    function clearXY() {
        setOuterX(0);
        setInnerX(0);
        setOuterY(0);
        setInnerY(0);
    }

    function calculateXY(e: any) {
        // get Xy position with respect to center
        if (parent.current == null) {
            clearXY();
            return;
        }
        let { x: x1, y: y1 } = parent.current.getBoundingClientRect();
        let x2 = e.pageX;
        let y2 = e.pageY;
        let halfW = parent.current.clientWidth / 2;
        let halfH = parent.current.clientHeight / 2;
        let transX = x2 - (x1 + halfW);
        let transY = y2 - (y1 + halfH);
        // console.log("transY: ", transX, x2, x1, halfW);
        setOuterX(0.3 * transX);
        setOuterY(0.3 * transY);
        setInnerX(0.04 * transX);
        setInnerY(0.04 * transY);
    }
    function getC() {
        if (show == true || show == undefined) return "";
        return " hide";
    }
    return (
        <div
            className={`diamond-btn${getC()}`}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                ...Sty,
            }}
        >
            <div
                className="hover-area"
                ref={parent}
                onMouseMove={calculateXY}
                onMouseLeave={clearXY}
            >
                <div className="selection-area" onClick={Fun}></div>
            </div>
            <div
                className="outer1"
                style={{
                    transform: `translate(${OuterX}px,${OuterY}px)`,
                }}
            >
                <div className="outer2"></div>

                <div
                    className="inner"
                    style={{ transform: `translate(${InnerX}px,${InnerY}px)` }}
                >
                    <BsPlusLg />
                </div>
            </div>
        </div>
    );
};

export default DiamondBtn;
