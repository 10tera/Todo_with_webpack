import { Button ,TextField} from "@mui/material";
import React, {useContext} from "react";
import { ThemeContext } from "../components/ThemeContext/ThemeContext";

const Todo: React.FC = () => {
    const themectx = useContext(ThemeContext);
    const handelButton = () => {
        themectx.setIsLight(!themectx.isLight);
    }

    return (
        <React.Fragment>
            <h1>Todo page change</h1>
            {themectx.isLight ? "true": "false"}
            <Button variant={"contained"} onClick={handelButton}>test button</Button>
            <TextField>dad</TextField>
        </React.Fragment>
    );
};

export default Todo;
