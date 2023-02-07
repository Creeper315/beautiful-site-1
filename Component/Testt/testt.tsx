import React, { useMemo, useEffect, useState, memo } from "react";
import { NextPage } from "next";

const Test: NextPage<any> = () => {
    // console.log("Test Re render", P, val);

    const [State, setState] = useState(true);

    let someFun = () => {};

    return <div style={{ position: "relative", zIndex: 3 }}></div>;
};

export default memo(Test);

export function tt1(k: number) {
    return k * 2;
}
