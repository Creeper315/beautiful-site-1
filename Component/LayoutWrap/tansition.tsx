import { useEffect, useRef, useContext, useState } from "react";
import Logo from "./logo";
import { ViewEnum, ViewConext } from "../OtherComponent/viewConext";
import { menuContext } from "../OtherComponent/menuContext";
import { MediaContext } from "../OtherComponent/mediaQueryContext";
import { Tooltip } from "@mui/material";
import SC, { css } from "styled-components";

// const Thing = SC.div.attrs((/* props */) => ({ tabIndex: 0 }))`
//   color: blue;

//   &:hover {
//     color: red; // <Thing> when hovered
//   }

//   & ~ & {
//     background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
//   }

//   & + & {
//     background: lime; // <Thing> next to <Thing>
//   }

//   &.something {
//     background: orange; // <Thing> tagged with an additional CSS class ".something"
//   }

//   .something-else & {
//     border: 1px solid; // <Thing> inside another element labeled ".something-else"
//   }
// `;

const CategoryList = SC.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const OneCategory = SC.div`
    position: relative;
    font-family: myRational;
    font-size: 6vw;
    line-height: 1;
    margin-bottom: 15px;
    list-style: none;
    white-space: nowrap;
    text-decoration: none;
    color: #215732;
    transition: all 0.8s ease;
    transition-delay: 0.6s;
    opacity: 0;
    ${(props: any) =>
        props.isOpen &&
        css`
            opacity: 1;
        `};
    // opacity: ${(prop: any) => (prop.isOpen ? "1" : "0")};
    // translate: 0 ${(prop: any) => (prop.isOpen ? "0" : "60px")};
    letter-spacing: 3px;
    cursor:pointer;
`;
const OneCategory2 = SC(OneCategory)`

`;

const Transition = () => {
    // console.log("transition re re");
    const { isBigScreen } = useContext(MediaContext);
    const {
        Load,
        setCanChangeView,
        onChangeView,
        MenuLogoState,
        setMenuLogoState,
    } = useContext(ViewConext);
    const { ShowBtn, initialPageIdx } = useContext(menuContext);
    const div = useRef<any>(null);
    const left = useRef<any>(null);
    const right = useRef<any>(null);
    // const MenuOrLogo = useRef<"menu" | "logo">("menu");
    const [MenuOrLogo, setMenuOrLogo] = useState<"menu" | "logo">("logo");
    const rbtIsOpen = useRef<boolean>(false);
    // const rbtMenuCanClick = useRef<boolean>(false);
    const rbtTransition = useRef<boolean>(false);

    let br = useRef<HTMLButtonElement>(null);
    const isInitLoad = useRef(true);

    useEffect(() => {
        if (ShowBtn == null) return;
        if (ShowBtn == false) {
            right.current.className = "pop0";
            left.current.className = "pop0";
            return;
        }
        if (ShowBtn == true) {
            right.current.className = "pop2";
            left.current.className = "pop2";
        }
    }, [ShowBtn]);

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
        div.current.className = " above";
        // setMenuLogoState("logo");
        await wait(3);
        div.current.className = "trans full above";
        right.current.className = "pop1";
        left.current.className = "pop1";
        // return;
        await wait(1100);
        div.current.className = "trans down above";
        right.current.className = "pop2";
        left.current.className = "pop2";
        await wait(1000);
        div.current.className = "up";
        setMenuLogoState("none");
        setCanChangeView(true);
        isInitLoad.current = false;
        // console.log("true: ", true);
    }

    async function LoadAnimation() {
        // canChangeView.current = false;
        setCanChangeView(false);
        setMenuLogoState("logo");

        // div.current.className = "up";
        // await wait(3);
        div.current.className = "trans full";
        await wait(1100);
        div.current.className = "trans down";
        await wait(1000);
        div.current.className = "up";
        setMenuLogoState("none");
        setCanChangeView(true);
    }

    useEffect(() => {
        initLoadAnimation();
    }, []);

    useEffect(() => {
        if (isInitLoad.current) return;
        LoadAnimation();
    }, [Load]);

    function toggleBtnLabel(hover: boolean | any = false) {
        if (hover) br.current?.classList.add("is-active");
        else br.current?.classList.remove("is-active");
    }

    const rbtMenuData = [
        { name: "cold-pressed", count: 5 },
        { name: "superfood smoothies", count: 3 },
        { name: "ginger boosters", count: 3 },
        { name: "cold-pressed", count: 5 },
        { name: "bowls", count: 3 },
        { name: "treats", count: 3 },
    ];

    const [mIsOpen, setmIsOpen] = useState(false);

    // const RbtMenuList = () => {
    //     let d1 = 0.5;
    //     let d2 = 1;
    //     return (
    //         <CategoryList>
    //             <button
    //                 onClick={() => {
    //                     setmIsOpen(!mIsOpen);
    //                     console.log("mIsOpen ?: ", mIsOpen);
    //                 }}
    //             >
    //                 {"toggle " + mIsOpen}
    //             </button>
    //             <OneCategory {...{ isOpen: mIsOpen, delay1: d1, delay2: d2 }}>
    //                 ha ha ha Hi
    //             </OneCategory>
    //         </CategoryList>
    //     );
    // };

    // const RightBtnMenu_1 = (prop: any) => {
    //     // When we have lap top screen size
    //     let acc = 0;
    //     return (
    //         <CategoryList>
    //             {rbtMenuData.map((e, i) => {
    //                 let pageidx = acc + 1;
    //                 acc += e.count;
    //                 return (
    //                     <Badge key={i} badgeContent={e.count} color="success">
    //                         <OneCategory
    //                             style={{
    //                                 transitionDelay: `0.${i}s`,
    //                                 translate:
    //                                     MenuOrLogo == "menu" ? "0 0" : "0 80px",
    //                                 opacity: MenuOrLogo == "menu" ? "1" : "0",
    //                             }}
    //                             children={e.name}
    //                             onClick={() => {
    //                                 if (rbtTransition.current == true) return;
    //                                 console.log("click one category", e);
    //                                 onChangeView(ViewEnum.menu);
    //                                 initialPageIdx.current = pageidx;
    //                             }}
    //                         />
    //                     </Badge>
    //                 );
    //             })}
    //         </CategoryList>
    //     );
    // };

    // function rbtHandler() {
    //     if (rbtTransition.current == true) return;
    //     if (rbtIsOpen.current) {
    //         rbtOnClose();
    //     } else {
    //         rbtOnOpen();
    //     }
    // }

    // async function rbtOnOpen() {
    //     rbtTransition.current = true;
    //     setMenuOrLogo("menu");
    //     setCanChangeView(false);
    //     div.current.className = "down above";
    //     await wait(3);
    //     div.current.className = "trans full above";
    //     await wait(1000);
    //     rbtTransition.current = false;
    //     rbtIsOpen.current = true;
    //     setCanChangeView(true);
    // }
    // function chooseMenu() {}

    // async function rbtOnClose() {
    //     rbtTransition.current = true;
    //     setCanChangeView(false);
    //     div.current.className = "trans down above";
    //     await wait(1000);
    //     div.current.className = "up";

    //     rbtTransition.current = false;
    //     rbtIsOpen.current = false;
    //     // setMenuOrLogo("logo");
    //     setCanChangeView(true);
    // }

    return (
        <>
            {/* ↓ 中间用来当 transition 的 div */}
            <div id="transition" className="above" ref={div}>
                <div
                    className="icon"
                    style={{ opacity: MenuLogoState == "logo" ? "1" : "0.1" }}
                >
                    <Logo width={157} color="rgb(33, 87, 50)" />
                </div>
                {/* <button
                    onClick={() => {
                        setmIsOpen(!mIsOpen);
                        console.log("mIsOpen ?: ", mIsOpen);
                    }}
                >
                    {"toggle " + mIsOpen}
                </button>
                <OneCategory
                    {...{ isOpen: mIsOpen, delay1: "0.5", delay2: "1" }}
                >
                    ha ha ha Hi
                </OneCategory> */}
                {/* <RbtMenuList /> */}
            </div>

            {/* ↓ 左边的 button */}
            <div
                id="btn-left"
                className="pop0"
                ref={left}
                onClick={() => onChangeView(ViewEnum.home)}
            >
                <Logo width={isBigScreen ? 100 : 60} />
            </div>

            {/* ↓ 右边的 button */}
            <Tooltip title="未完待续🚫" arrow>
                <div id="btn-right" className="pop0" ref={right}>
                    <button
                        className={`hamburger hamburger--slider position-absolute bottom-0 start-50 translate-middle-x`}
                        style={{ height: "95%", outline: "none" }}
                        type="button"
                        ref={br}
                        onMouseEnter={() => toggleBtnLabel(true)}
                        onMouseLeave={() => toggleBtnLabel(false)}
                        // onClick={() => setMenuLogoState("logo")}
                    >
                        <span className=" hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </Tooltip>
        </>
    );
};

export default Transition;
