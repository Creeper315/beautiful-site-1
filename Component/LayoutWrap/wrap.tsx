// import ss from "../../styles/Layout.module.css";
import { NextPage } from "next";
import TopNav from "./topnav";
import Footer from "./footer";
import LeftBtn from "./leftBtn";
import RightBtn from "./rightBtn";

const Wrap: NextPage<any> = ({ children }) => {
    return (
        <div
            className={`d-flex flex-column overflow-hidden`}
            style={{ height: "100vh", width: "100vw" }}
        >
            <TopNav />
            {children}
            <Footer />

            <LeftBtn />
            <RightBtn />
        </div>
    );
};

export default Wrap;
