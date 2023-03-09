import React from "react";
import ReactDom from "react-dom/client";
import {BrowserRouter, HashRouter} from "react-router-dom";
import App from "./App";

const root = ReactDom.createRoot(
    document.getElementById("root") as HTMLElement,
);
console.log("a");
console.log(process.argv);
// const isDevelopment = process.argv[process.argv.indexOf("--mode") + 1] === "development";
// console.log(isDevelopment);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
