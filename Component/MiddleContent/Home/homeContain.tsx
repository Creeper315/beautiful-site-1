import { useState } from "react";
import AllTitle from "./allTitle";

const HomeContain = () => {
    const [PageIdx, setPageIdx] = useState<number>(1); // 1 based. from 1 ~ 5;

    return (
        <div id="home-contain">
            <AllTitle {...{ PageIdx }} />
            <div className="clip-contain"></div>
            <div className="over-top-contain"></div>
            <div className="over-bottom-contain"></div>
            <div className="overflow-contain"></div>
        </div>
    );
};

export default HomeContain;
