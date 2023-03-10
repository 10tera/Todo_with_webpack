import { ThemeContext } from "./ThemeContext";
import React, { ReactNode, useState } from "react";

type Props = {
    children: ReactNode;
};

export const ThemeProvider = (props: Props) => {
    const [isLight, setIsLight]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(true);
    return(
        <ThemeContext.Provider value={{isLight: isLight, setIsLight: setIsLight}}>
            {props.children}
        </ThemeContext.Provider>
    )
}