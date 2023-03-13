import {SettingsContext} from "./SettingsContext";
import React, { ReactNode, useEffect, useState } from "react";
import {Settings, TaskGroup} from "../../../../main/src/js/types/Settings";

type Props = {
    children: ReactNode;
}

export const SettingsProvider = (props: Props) => {
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [todoSettings, setTodoSettings]: [TaskGroup[], React.Dispatch<React.SetStateAction<TaskGroup[]>>] = useState<TaskGroup[]>([]);
    
    const setInitContext = () => {
        window.eAPI.getSettings("Todo").then((data: Settings) => {
            setTodoSettings(data.Todo);
        })
    }
    useEffect(() => {
        if (!isFirstRender) {
            return;
        }
        setIsFirstRender(false);
        setInitContext();
    },[]);
    return(
        <SettingsContext.Provider value={{Todo: todoSettings,setTodoSettings: setTodoSettings}}>
            {props.children}
        </SettingsContext.Provider>
    )
};