import { NextPage } from "next";

const Element: NextPage<any> = ({ onclickFun }) => {
    return (
        <div className="diamond-btn">
            <button onClick={onclickFun}>dimond</button>
        </div>
    );
};

export default Element;
