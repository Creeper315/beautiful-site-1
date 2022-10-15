import { useState, Fragment } from "react";
import { NextPage } from "next";

const AllTitle: NextPage<{ PageIdx: number }> = ({ PageIdx }) => {
    // Index 是 1 based
    // 需要依靠 Index 来计算 home-title-12345 的 className 是有 .up 还是 .down

    function renderIdx() {
        return <span>{`. 0${PageIdx} .`}</span>;
    }
    function addHomeTitleClass(curPage: number): string {
        // PageIdx 是当前 user 翻到了第几页。
        // this_idx 是，这个 function 是给第几页的 title 提供 class。

        // 比如： 这个函数给第三页的 title 添加class，this_idx=3, 然而当前用户已经翻到了第四页，PageIdx=4，
        // 所以我们需要 return 的是 '3 up' .  （3 指这是 .home-title3）( .up 意思是这一页已经翻上去了)
        let result = "";
        if (PageIdx > curPage) result = `${curPage} up`; // 当前浏览页面在这一页下面
        if (PageIdx === curPage) result = `${curPage}`; // 当前正在浏览这一页
        if (PageIdx < curPage) result = `${curPage} down`; // 当前浏览页面在这一页上面
        console.log("Cant get here");
        return "home-title" + result;
    }

    return (
        <>
            <div className={addHomeTitleClass(1)}>Juice Farmacy</div>
            <div className={addHomeTitleClass(2)}>
                <div className="nothing"></div>

                <div className="text-contain">
                    <div className="text">
                        {renderIdx()}
                        <br />
                        100%
                        <br />
                        organic
                        <br />
                        <br />
                        certified by Soil Association
                        <br />.
                    </div>
                </div>
            </div>
            <div className={addHomeTitleClass(3)}>
                <div className="nothing"></div>

                <div className="text-contain">
                    <div className="text">
                        {renderIdx()}
                        <br />
                        cold
                        <br />
                        pressed
                        <br />.
                    </div>
                </div>
            </div>
            <div className={addHomeTitleClass(4)}>
                <div className="nothing"></div>
                <div className="text-contain">
                    <div className="text">
                        {renderIdx()}
                        <br />
                        Unpasteurised
                        <br />
                        No HPP
                        <br />.
                    </div>
                </div>
            </div>
            <div className={addHomeTitleClass(5)}>
                <span className="menu">menu</span>
                <span className="disc">Discover Now</span>
                <button>ha</button>
            </div>
        </>
    );
};

export default AllTitle;