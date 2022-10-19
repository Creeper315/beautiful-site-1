import Logo from "./logo";
import { useContext } from "react";
import { ViewConext, ViewEnum } from "../OtherComponent/viewConext";

const LeftMainBtn = () => {
    const { onChangeView } = useContext(ViewConext);

    return (
        <div
            className="_themeBg position-absolute top-50 start-0 translate-middle-y rounded-end _centering "
            style={{
                width: "140px",
                height: "91px",
                zIndex: 3,
                cursor: "pointer",
            }}
            onClick={() => onChangeView(ViewEnum.home)}
        >
            <Logo width={100} />
        </div>
    );
};

export default LeftMainBtn;
