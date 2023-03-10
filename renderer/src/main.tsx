import React from "react";
import ReactDom from "react-dom/client";
import {BrowserRouter, HashRouter} from "react-router-dom";
import App from "./App";
import {ThemeProvider } from "./components/ThemeContext/ThemeProvider";

const root = ReactDom.createRoot(
    document.getElementById("root") as HTMLElement,
);
// const isDevelopment = process.argv[process.argv.indexOf("--mode") + 1] === "development";
// console.log(isDevelopment);

root.render(
    <React.StrictMode>
        <HashRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </HashRouter>
    </React.StrictMode>,
);
