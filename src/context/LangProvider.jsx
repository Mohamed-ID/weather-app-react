// Hooks
import { useState } from "react";


// Context
import { LangContext } from "./LangContext";

export default function LangProvider({children}) {

    const [langSwitch, setLangSwitch] = useState("ar");

    return(
        <LangContext.Provider value={{langSwitch, setLangSwitch}}>
            {children}
        </LangContext.Provider>
    );
}