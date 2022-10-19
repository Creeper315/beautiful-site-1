import { useEffect, useRef, useContext, useLayoutEffect } from "react";
import Logo from "./logo";
import { ViewEnum, ViewConext } from "../OtherComponent/viewConext";

const Transition = () => {
    console.log("333");
    const { Load, CanChangeView, setCanChangeView, onChangeView } =
        useContext(ViewConext);
    const div = useRef<any>(null);
    const left = useRef<any>(null);
    const right = useRef<any>(null);

    let br = useRef<HTMLButtonElement>(null);
    const isInitLoad = useRef(true);

    function wait(milli_second?: number) {
        if (milli_second == undefined) milli_second = 1000;
        return new Promise((res) => {
            setTimeout(() => {
                res(0);
            }, milli_second);
        });
    }

    async function initLoadAnimation() {
        // console.log("initLoadAnimation: ");

        div.current.className = "trans full above";
        right.current.className = "pop1";
        left.current.className = "pop1";

        await wait(1100);
        div.current.className = "trans down above";
        right.current.className = "pop2";
        left.current.className = "pop2";
        await wait(1000);
        div.current.className = "up";
        setCanChangeView(true);
        isInitLoad.current = false;
        // console.log("true: ", true);
    }

    async function LoadAnimation() {
        // canChangeView.current = false;
        setCanChangeView(false);

        // console.log("false: ", false);
        div.current.className = "trans full";
        await wait(1100);
        div.current.className = "trans down";
        await wait(1000);
        div.current.className = "up";
        // await wait(100);
        // div.current.className = "trans up";
        // canChangeView.current = true;
        setCanChangeView(true);

        // console.log("true: ", true);
    }

    useEffect(() => {
        // initLoadAnimation().then(() => LoadAnimation());
        initLoadAnimation();
    }, []);

    useEffect(() => {
        if (isInitLoad.current) return;
        LoadAnimation();
    }, [Load]);

    useLayoutEffect(() => {}, []);

    function toggleBtnLabel(hover: boolean | any = false) {
        if (hover) br.current?.classList.add("is-active");
        else br.current?.classList.remove("is-active");
    }

    return (
        <>
            {/* ↓ 中间用来当 transition 的 div */}
            <div id="transition" className="above" ref={div}>
                <div className="icon">
                    <Logo width={157} color="rgb(33, 87, 50)" />
                </div>
            </div>

            {/* ↓ 左边的 button */}
            <div
                id="btn-left"
                className="pop0"
                ref={left}
                // className="_themeBg position-absolute top-50 start-0 translate-middle-y _centering "
                onClick={() => onChangeView(ViewEnum.home)}
            >
                <Logo width={100} />
            </div>

            {/* ↓ 右边的 button */}
            <div
                id="btn-right"
                className="pop0"
                ref={right}
                // className="_themeBg position-absolute top-50 end-0 translate-middle-y text-danger rounded-start"
                // style={{ width: "135px", height: "90px", zIndex: 4 }}
            >
                <button
                    className={`hamburger hamburger--slider position-absolute bottom-0 start-50 translate-middle-x`}
                    style={{ height: "95%", outline: "none" }}
                    type="button"
                    ref={br}
                    onMouseEnter={() => toggleBtnLabel(true)}
                    onMouseLeave={() => toggleBtnLabel(false)}
                >
                    <span className=" hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </>
    );
};

export default Transition;
