import leftSvg from "../../public/logo.svg";

const LeftMainBtn = () => {
    return (
        <div
            className="_themeBg position-absolute top-50 start-0 translate-middle-y rounded-end _centering"
            style={{ width: "180px", height: "100px" }}
        >
            {/* <div style={{ width: "80%" }} className=" _centering"> */}
            <svg
                className="u-inline-block u-valign-middle u-fit-w"
                style={{ fill: "#fff", width: "120px" }}
                enableBackground="new 0 0 366.9 127.6"
                version="1.1"
                viewBox="0 0 373.00001 128"
                // xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
            >
                <polygon
                    transform="translate(6.1 .4)"
                    points="31.6 44.6 25.3 51 38 63.8 25.3 76.6 31.6 82.9 47.4 67 47.4 60.6"
                ></polygon>
                <polygon
                    transform="translate(6.1 .4)"
                    points="0 63.8 63.2 0 75.9 0 12.6 63.8 75.9 127.6 63.2 127.6"
                ></polygon>
                <path d="m221.2 0.4h-6.3l-38 38.3-38-38.3h-6.3l-60.1 60.6v6.4l60.1 60.6h6.3l38-38.3 38 38.3h6.3l60.1-60.6v-6.4zm-85.5 118-53.7-54.2 53.8-54.2 34.9 35.1-15.9 15.9v6.4l15.8 16zm41.2-66.9 12.7 12.7-12.7 12.8-12.6-12.8zm41.1 66.9-34.8-35 15.8-16v-6.4l-15.9-15.9 34.9-35.1 53.8 54.2z"></path>
                <path d="m284.4 128 60.1-60.6v-6.4l-60.1-60.6h-12.7l63.4 63.8-63.3 63.8z"></path>
                <path d="m373 128-63.3-63.8 63.3-63.8h-12.6l-60.1 60.6v6.4l60.1 60.6z"></path>
                <rect width="9.5" height="127.6"></rect>
            </svg>
            {/* </div> */}
        </div>
    );
};

export default LeftMainBtn;
