import { useState } from "react";
import { NextPage } from "next";

const AllTitle: NextPage<{ PageIdx: number }> = ({ PageIdx }) => {
    // Index 是 1 based
    function renderIdx() {
        return <span>{`. 0${PageIdx} .`}</span>;
    }
    if (PageIdx === 1)
        return <div className={`home-title${PageIdx}`}>Juice Farmacy</div>;
    if (PageIdx === 2)
        return (
            <div className={`home-title${PageIdx}`}>
                {renderIdx()}
                100%
                <br />
                organic
                <br />
                <br />
                certified by
                <br />
                Soil
                <br />
                Association
                <br />0
            </div>
        );
    if (PageIdx === 3)
        return (
            <div className={`home-title${PageIdx}`}>
                {renderIdx()}
                cold
                <br />
                pressed
            </div>
        );
    if (PageIdx === 4)
        return (
            <div className={`home-title${PageIdx}`}>
                {renderIdx()}
                Unpasteurised
                <br />
                No HPP
            </div>
        );
    if (PageIdx === 5)
        return (
            <div className={`home-title${PageIdx}`}>
                Menu
                <span>Discover Now</span>
            </div>
        );
    return <div>o</div>;
};

export default AllTitle;
