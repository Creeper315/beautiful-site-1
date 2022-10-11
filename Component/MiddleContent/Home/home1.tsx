import knife from "../../../public/img/knife.png";
import tomato from "../../../public/img/tomato.png";
import leave from "../../../public/img/leave.png";
import leave2 from "../../../public/img/leave2.png";
// import lozad from "lozad";
import Head from "next/head";

// import bi from "../../../../../../图片/蛤.jpeg";

import { useState } from "react";

const Home1 = () => {
    const lb1 = "https://koox.co.uk/assets/images/home/intro/casserole.png";
    const lb2 =
        "https://koox.co.uk/assets/images/home/intro/5leafs-branche.png";

    const lt1 = "https://koox.co.uk/assets/images/home/intro/long-leaf.png";
    const lt2 =
        "https://koox.co.uk/assets/images/home/intro/mini-leaf-orange.png";
    const rt1 = "https://koox.co.uk/assets/images/home/intro/3roundleafs.png";
    const rt2 = "https://koox.co.uk/assets/images/home/intro/branch-ball.png";
    const lm = "https://koox.co.uk/assets/images/home/intro/mini-leaf.png";
    const bm =
        "https://koox.co.uk/assets/images/home/intro/balls-red-green.png";
    const rm = "https://koox.co.uk/assets/images/home/intro/red-ball.png";
    const rb1 = "https://koox.co.uk/assets/images/home/intro/spoon.png";
    const rb2 = "https://koox.co.uk/assets/images/home/intro/tomato.png";

    const [State, setState] = useState<1 | 2 | 3>(2);

    const [Toggle, setToggle] = useState<boolean>(false);

    function tg() {
        if (Toggle) return "up";
        return "";
    }

    function txt() {
        // return " txt-up";
        if (State == 1) {
            console.log("State: ", State);
            return "txt-up";
        } else return "";
    }
    console.log("txt()", txt());
    return (
        <div id="home-1-contain">
            <div className={`titleTxt ${txt()} `}>Juice Farmacy</div>
            <div className="clip-contain"></div>

            <div className="overflow-contain">
                <img className={`lb1 ${tg()}`} src={lb1} alt="img" />
                <img className="lb2" src={lb2} alt="img" />
                <img className="lt1" src={lt1} alt="img" />
                <img className="lt2" src={lt2} alt="img" />
                <img className="rt1" src={rt1} alt="img" />
                <img className="rt2" src={rt2} alt="img" />
                <img className="bm" src={bm} alt="img" />
                <img className="rb1" src={rb1} alt="img" />
                <img className="rb2" src={rb2} alt="img" />
                <img className="lm" src={lm} alt="img" />
                <img className="rm" src={rm} alt="img" />
            </div>
            <div
                style={{
                    zIndex: 5,
                    position: "absolute",
                    bottom: "2px",
                }}
            >
                <button
                    onClick={() => {
                        console.log("cccd");
                        if (State == 1) {
                            setState(2);
                        } else if (State == 2) {
                            setState(1);
                        }
                    }}
                >
                    Toggle 1
                </button>
                <button
                    onClick={() => {
                        setToggle(!Toggle);
                    }}
                >
                    Toggle 2
                </button>
            </div>
        </div>
    );
};

export default Home1;
