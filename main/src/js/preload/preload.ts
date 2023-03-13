import {ipcRenderer, IpcRendererEvent,contextBridge} from "electron";

ipcRenderer.invoke("sendIPC").then((IPC) => {
    contextBridge.exposeInMainWorld("eAPI", {
        getSettings: (key: string) => ipcRenderer.invoke(IPC.store.getSettings,key),
        setSettings: (args: {key: string, data: any}) => ipcRenderer.send(IPC.store.setSettings,args),
    })
})