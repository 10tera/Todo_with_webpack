import React, { useContext } from "react";
import {ThemeProvider} from "@mui/material/styles";
import {Routes, Route} from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import Todo from "./pages/Todo";
import Error404 from "./pages/Error404";
import {lightTheme, darkTheme} from "./utils/Theme";
import { ThemeContext } from "./components/ThemeContext/ThemeContext";

const App = () => {
    const themeContextValue = useContext(ThemeContext);
    
    return (
        <ThemeProvider theme={themeContextValue.isLight ? lightTheme : darkTheme}>
            <GlobalStyles styles={{ body: { backgroundColor: themeContextValue.isLight ? lightTheme.palette.background.default : darkTheme.palette.background.default }}}/>
            <Routes>
                <Route path={"/"} element={<Todo />} />
                <Route path={"*"} element={<Error404 />} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;
