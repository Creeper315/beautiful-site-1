import { NextPage } from "next";

const Comp1: NextPage<{ hi?: any }> = ({ hi }) => {
    return (
        <div>
            Comp1 here
            <span>{hi}</span>
        </div>
    );
};

export default Comp1;
