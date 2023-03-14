import {app, BrowserWindow, ipcMain} from "electron";
import electronIsDev = require("electron-is-dev");
import ElectronStore from "electron-store";
import path = require("path");
import { IPC } from "./js/utils/ipc";
import { Store } from "@mui/icons-material";

let mainWindow: BrowserWindow | null;

const store = new ElectronStore();

//メインウィンドウの作成
const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        title: "Todo Soft",
        width: 800,
        height: 600,
        minHeight: 0,
        minWidth: 0,
        webPreferences: {
            //nodeIntegration: false,
            contextIsolation: true,
            webSecurity: false,
            preload: path.join(__dirname, "preload.js")
        }
    });
    
    //開発時
    if(electronIsDev){
        mainWindow.loadURL("http://localhost:8080");
        mainWindow.webContents.openDevTools();
    }
    //パッケージ済みの時
    else{
        mainWindow.loadFile(path.join(__dirname, "./index.html"));
    }
    
    //mainWindow.loadFile(path.join(__dirname, "./index.html"));
}

//app準備完了
app.on("ready", () => {
    createMainWindow();
    ipcMain.handle("sendIPC",() => {
        return IPC;
    });

    ipcMain.handle(IPC.store.getSettings, async(_event: Electron.IpcMainInvokeEvent, key: string) => {
        console.log("get");
        console.log(store.get(key));
        return store.get(key);
    });

    ipcMain.on(IPC.store.setSettings,(_event: Electron.IpcMainEvent,args: {key: string, data: any}) => {
        store.set(args.key,args.data);
        console.log("set");
        console.log(store.get(args.key));
    });
})

//全てのウィンドウが閉じられた時
app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        mainWindow = null;
        app.quit();
    }
})

app.on("activate", () => {
    if(mainWindow === null){
        createMainWindow();
    }
})