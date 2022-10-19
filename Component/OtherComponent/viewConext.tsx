import { createContext, useState, useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
export const ViewConext = createContext<any>(1);
export enum ViewEnum {
    home = "/",
    menu = "/menu",
    orderNow = "/orderNow",
    about = "/about",
}
const ViewProvider: NextPage<any> = (props) => {
    // const [CurrentView, setCurrentView] = useState<ViewEnum>(ViewEnum.home);
    // const [PrevView, setPrevView] = useState<ViewEnum>(ViewEnum.home);
    // const [Load1, setLoad1] = useState(true);
    const [Load, setLoad] = useState(true);
    const router = useRouter();
    // const canChangeView = useRef<boolean>(false);
    const [CanChangeView, setCanChangeView] = useState<boolean>(false);

    function onChangeView(v: ViewEnum) {
        if (v == router.pathname || !CanChangeView) return;
        router.replace({ pathname: v });
        // setCurrentView(v);
        setLoad(!Load);
    }

    // setInterval(() => {
    //  // 这个 set interval 很奇怪！！！！！不停的 true false 横条
    //     console.log("context int can ?", canChangeView.current);
    // }, 900);

    return (
        <ViewConext.Provider
            value={{
                // CurrentView,
                onChangeView,
                CanChangeView,
                setCanChangeView,
                Load,
            }}
        >
            {props.children}
        </ViewConext.Provider>
    );
};

export default ViewProvider;