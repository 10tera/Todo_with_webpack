import {createContext} from "react";

type ThemeContextValue = {
    isLight: boolean;
    setIsLight: (isLight: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);