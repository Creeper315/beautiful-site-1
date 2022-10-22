// import ss from "../../styles/Layout.module.css";
import { NextPage } from "next";
import TopNav from "./topnav";
import Footer from "./footer";
// import LeftBtn from "./leftBtn";
// import RightBtn from "./rightBtn";
import Transition from "./tansition";
import ViewProvider from "../OtherComponent/viewConext";
import MenuProvider from "../OtherComponent/menuContext";

const Wrap: NextPage<any> = ({ children }) => {
    return (
        <div
            className={` d-flex flex-column overflow-hidden`}
            style={{ height: "100vh", width: "100vw" }}
        >
            <MenuProvider>
                <ViewProvider>
                    <TopNav />
                    <Transition />
                    {/* <div id="middle-contain">
                    <div className="mid-line"></div> */}
                    {children}
                    {/* </div> */}
                    {/* <LeftBtn /> */}
                    {/* <RightBtn /> */}
                    <Footer />
                </ViewProvider>
            </MenuProvider>
        </div>
    );
};

export default Wrap;
