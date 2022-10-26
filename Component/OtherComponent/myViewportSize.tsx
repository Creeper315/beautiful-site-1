import { useEffect } from "react";
import { NextPage } from "next";

const UseViewportSize: NextPage<any, any> = ({ setVw, setVh }) => {
    function handleWindowResize() {
        if (setVw != undefined) setVw(window.innerWidth);
        if (setVh != undefined) setVh(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        handleWindowResize();
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return <div className="d-none"></div>;
};

export default UseViewportSize;
