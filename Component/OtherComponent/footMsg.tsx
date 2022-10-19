import { IoIosArrowDown } from "react-icons/io";

const FootMsg = () => {
    return (
        <div className="border position-absolute bottom-0 start-50 translate-middle-x text-nowrap _font1">
            <div
                style={{
                    position: "relative",
                    bottom: "40px",
                    fontSize: "0.9rem",
                    // border: "1px",
                }}
            >
                Scroll to discover
            </div>

            <div
                className="position-absolute top-100 _centering border border-info w-100 _themeTxt "
                style={{ height: "90px" }}
            >
                <div className="h-100 border d-flex flex-column pb-4 pt-2 text-center justify-content-around">
                    <span>0</span>
                    <IoIosArrowDown style={{ transform: "scale(1.5)" }} />
                </div>
            </div>
        </div>
    );
};

export default FootMsg;
