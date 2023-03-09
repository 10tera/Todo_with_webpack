import {app, BrowserWindow} from "electron";
import electronIsDev = require("electron-is-dev");
import path = require("path");

let mainWindow: BrowserWindow | null;

//メインウィンドウの作成
const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        title: "Todo Soft",
        width: 800,
        height: 600,
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