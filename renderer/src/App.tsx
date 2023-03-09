import React from "react";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {Routes, Route} from "react-router-dom";
import Todo from "./pages/Todo";
import Error404 from "./pages/Error404";

const App = () => {
    const theme = createTheme({
        palette: {
            mode: "light",
            primary: {
                main: "#006a69",
                light: "#006a69",
                dark: "#4ddad8",
            },
            secondary: {
                main: "#4a6362",
                light: "#4a6362",
                dark: "#b0cccb"
            },
            error: {
                main: "#ba1a1a",
                light: "#ba1a1a",
                dark: "#ffb4ab"
            }
        }
    });
    return (
        <Routes>
            <Route path={"/"} element={<Todo />} />
            <Route path={"*"} element={<Error404 />} />
        </Routes>
    );
};

export default App;
