import React from "react";
import ReactDom from "react-dom/client";
import {BrowserRouter, HashRouter} from "react-router-dom";
import isElectronDev from "electron-is-dev";
import App from "./App";

const root  =ReactDom.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        {//isElectronDev ? <BrowserRouter><App/></BrowserRouter>: <HashRouter><App/></HashRouter>
        <App/>}
    </React.StrictMode>
);