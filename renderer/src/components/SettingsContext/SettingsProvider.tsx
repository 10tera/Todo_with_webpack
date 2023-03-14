import {SettingsContext} from "./SettingsContext";
import React, { ReactNode, useEffect, useState } from "react";
import {Settings, TaskGroup} from "../../../../main/src/js/types/Settings";

type Props = {
    children: ReactNode;
}

export const SettingsProvider = (props: Props) => {
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [todoSettings, setTodoSettings]: [TaskGroup[], React.Dispatch<React.SetStateAction<TaskGroup[]>>] = useState<TaskGroup[]>([]);
    const saveTodoSettings = (data: TaskGroup[]) => {
        setTodoSettings(data);
        window.eAPI.setSettings({key: "Todo",data:data});
    }
    
    const setInitContext = () => {
        window.eAPI.getSettings("Todo").then((data: TaskGroup[]) => {
            setTodoSettings(data);
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
        <SettingsContext.Provider value={{Todo: todoSettings,setTodoSettings: saveTodoSettings}}>
            {props.children}
        </SettingsContext.Provider>
    )
};