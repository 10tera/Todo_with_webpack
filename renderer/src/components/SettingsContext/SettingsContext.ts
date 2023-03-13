import {createContext} from "react";
import {Settings,TaskGroup} from "../../../../main/src/js/types/Settings";

type SettingsContextValue = Settings & {
    setTodoSettings: (settings: TaskGroup[]) => void;
};

export const SettingsContext = createContext<SettingsContextValue>({} as SettingsContextValue);