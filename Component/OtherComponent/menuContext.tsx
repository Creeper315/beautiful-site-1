import { createContext, useState } from "react";
import { NextPage } from "next";

export const menuContext = createContext<any>(0);

const MenuProvider: NextPage<any> = ({ children }) => {
    const [ShowBtn, setShowBtn] = useState(null);

    return (
        <menuContext.Provider value={{ ShowBtn, setShowBtn }}>
            {children}
        </menuContext.Provider>
    );
};

export default MenuProvider;
