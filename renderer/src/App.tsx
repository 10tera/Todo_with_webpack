import React from "react";
import {Routes, Route} from "react-router-dom";
import Todo from "./pages/Todo";
import Error404 from "./pages/Error404";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Todo />} />
            <Route path={"*"} element={<Error404 />} />
        </Routes>
    );
};

export default App;
