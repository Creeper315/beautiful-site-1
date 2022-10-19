import { NextPage } from "next";

const ProgressBar: NextPage<{ PageIdx: number }> = ({ PageIdx }) => {
    function getClass() {
        let result = "bar ";
        if (PageIdx == 1) result += "p1";
        if (PageIdx == 2) result += "p2";
        if (PageIdx == 3) result += "p3";
        if (PageIdx == 4) result += "p4";
        if (PageIdx == 5) result += "p5";

        return result;
    }

    return (
        <div className="progress-bar">
            <div className={getClass()}></div>
        </div>
    );
};

export default ProgressBar;
