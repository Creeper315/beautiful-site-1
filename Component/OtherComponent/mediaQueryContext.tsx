import { createContext, useEffect, useState } from "react";
import { NextPage } from "next";
import { useMediaQuery } from "react-responsive";
import useMediaQ from "@mui/material/useMediaQuery";

export const MediaContext = createContext<any>(null);

const MediaProvider: NextPage<any> = ({ children }) => {
    // const isBigScreen = useMediaQuery({ minWidth: 768 }, undefined, handle);
    const isBigScreen = useMediaQ("(min-width:768px)");
    // console.log("isBigScreen: in m q", isBigScreen);
    useEffect(() => {
        // 当页面最初打开的时候，先设定一下 screen size big / small。不然只能等页面 resize 才能修改 ScreenBig state
        // setscreenBig(isBigScreen);
    }, []);

    function handle(match: boolean) {
        // console.log("match?", match);
        // setscreenBig(match);
    }

    return (
        <MediaContext.Provider value={{ isBigScreen }}>
            {children}
        </MediaContext.Provider>
    );
};

export default MediaProvider;
