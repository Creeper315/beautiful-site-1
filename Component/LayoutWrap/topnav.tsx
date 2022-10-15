import logo from "../../public/logo.svg";
import ss from "../../styles/Layout.module.css";

const TopNav = () => {
    // height, flex, center, gap,
    // font color
    return (
        <div
            className={`position-relative d-flex justify-content-center align-item-center flex-shrink-0`}
            style={{ height: "90px", zIndex: 1 }}
        >
            <div
                className="border border-primary mx-5 _centering _font _themeTxt"
                style={{ zIndex: 2 }}
            >
                Home
            </div>
            <div className="mx-5 _centering border _font _themeTxt">Menu</div>
            <div className="mx-5 _centering border _font _themeTxt">About</div>
        </div>
    );
};

export default TopNav;
