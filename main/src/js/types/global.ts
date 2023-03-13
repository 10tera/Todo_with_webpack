import {IpcRendererEvent} from "electron";

export interface EApi {
    getSettings: (key: string) => Promise<any>;
    setSettings: (args: {key: string, data: any}) => void;
}

declare global {
    var eAPI: EApi
}