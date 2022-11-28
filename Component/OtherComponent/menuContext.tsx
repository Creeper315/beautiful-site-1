import { createContext, useRef, useState } from "react";
import { NextPage } from "next";

export const menuContext = createContext<any>(0);

const MenuProvider: NextPage<any> = ({ children }) => {
    const [ShowBtn, setShowBtn] = useState(null);
    const initialPageIdx = useRef<number>(1);

    return (
        <menuContext.Provider value={{ ShowBtn, setShowBtn, initialPageIdx }}>
            {children}
        </menuContext.Provider>
    );
};

export default MenuProvider;
