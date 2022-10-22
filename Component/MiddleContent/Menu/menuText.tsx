import { useState } from "react";
import { NextPage } from "next";
import DiamondBtn from "../../OtherComponent/diamondBtn";

export enum placement {
    left = "left",
    right = "right",
}

type pro = {
    p: placement;
    t1: string;
    t2: string;
    t3: string;
    btnFun: Function;
};

const MenuText: NextPage<pro> = ({}) => {
    return (
        <div className="text-contain-1 left">
            <div className="text-contain-2">
                <div className="text-1">cold-pressed</div>
                <div className="text-2">Ultimate Detox</div>
                <div className="text-money">$7.95</div>
                <DiamondBtn
                    Fun={() => {
                        console.log("haha");
                    }}
                />
            </div>
        </div>
    );
};

export default MenuText;
