import React, { useMemo, useEffect, useState, memo } from "react";
import { NextPage } from "next";

const Test: NextPage<any> = ({ P, setP, val }) => {
    console.log("Test Re render", P, val);

    const [State, setState] = useState(true);

    let someFun = () => {};

    return (
        <div style={{ position: "relative", zIndex: 3 }}>
            <div>test here</div>
            {/* <button onClick={() => setState(!State)}>change state</button>
            <button onClick={() => setP(!P)}>change prop</button> */}
            <button
                onClick={() =>
                    (someFun = () => {
                        return 0;
                    })
                }
            >
                change fun
            </button>
        </div>
    );
};

export default memo(Test);
