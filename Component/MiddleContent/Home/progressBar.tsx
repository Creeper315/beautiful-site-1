import { NextPage } from "next";

const ProgressBar: NextPage<{ PageIdx: number; totalPageCount: number }> = ({
    PageIdx,
    totalPageCount,
}) => {
    // 注意，pageIdx 是 1 based。 所以 total count 是 5。 就要分成 4 段。因为第一页是 0% width。
    function getStyle(): object {
        let w = (100 * (PageIdx - 1)) / (totalPageCount - 1);
        // console.log("w % : ", w);
        return { width: `${w}%` };
    }

    return (
        <div className="progress-bar">
            <div className="bar" style={getStyle()}></div>
        </div>
    );
};

export default ProgressBar;
