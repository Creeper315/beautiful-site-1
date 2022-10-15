// import {} from 'hamburgers';
import { useRef } from "react";

const RightMainBtn = () => {
    let br = useRef<HTMLButtonElement>(null);

    function toggleBtnLabel(hover: boolean | any = false) {
        if (hover) br.current?.classList.add("is-active");
        else br.current?.classList.remove("is-active");
    }

    return (
        <div
            className="_themeBg position-absolute top-50 end-0 translate-middle-y text-danger rounded-start"
            style={{ width: "135px", height: "90px", zIndex: 2 }}
        >
            <button
                className={`hamburger hamburger--slider position-absolute bottom-0 start-50 translate-middle-x`}
                style={{ height: "95%" }}
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
    );
};

export default RightMainBtn;
