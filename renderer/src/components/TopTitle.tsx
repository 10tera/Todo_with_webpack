import React,{useContext} from "react";
import {Typography,Button,Theme} from "@mui/material";
import { ThemeContext } from "../components/ThemeContext/ThemeContext";




export const TopTitle = () => {
    const themectx = useContext(ThemeContext);
    const handelButton = () => {
        themectx.setIsLight(!themectx.isLight);
    }
    return(
        <React.Fragment>
            <div style={{ height: "80px", width: "100%", display: "flex"}}>
                <Typography variant={"h2"} component={"h1"} color={"primary"} sx={{ float: "left", height: "100%", alignItems: "center", display: "flex" }}>Todo</Typography>
                <Button variant={"contained"} onClick={handelButton} sx={{ float: "left", height: "50%",display: "flex",  margin: "auto 20px auto auto" }}>テーマ切り替え</Button>
            </div>
        </React.Fragment>
    )
}