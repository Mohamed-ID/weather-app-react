// Hooks
import { createContext, useContext } from "react";

export const LangContext = createContext("");

export const useLang = () => {
    return useContext(LangContext);
}