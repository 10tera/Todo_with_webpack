import { Button ,TextField} from "@mui/material";
import React, {useContext} from "react";
import { ThemeContext } from "../components/ThemeContext/ThemeContext";
import { TopTitle } from "../components/TopTitle";
import { SingleTask } from "../components/SingleTask";

const Todo: React.FC = () => {
    const themectx = useContext(ThemeContext);
    const handelButton = () => {
        themectx.setIsLight(!themectx.isLight);
    }

    return (
        <React.Fragment>
            <TopTitle></TopTitle>
            <div style={{display: "flex" ,backgroundColor: "black", height: "auto",width: "100%",overflowX: "scroll"}}>
                <div style={{ backgroundColor: "blue", width: "300px", height: "auto", margin: "20px" ,flexShrink: "0"}}>
                    <SingleTask>test1</SingleTask>
                    <SingleTask>test2</SingleTask>
                    <SingleTask>test3</SingleTask>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                </div>
                <div style={{ backgroundColor: "blue", width: "300px", height: "300px", margin: "20px", flexShrink: "0" }}></div>
                <div style={{ backgroundColor: "blue", width: "300px", height: "300px", margin: "20px", flexShrink: "0" }}></div>
                <div style={{ backgroundColor: "blue", width: "300px", height: "300px", margin: "20px", flexShrink: "0" }}></div>
                <div style={{ backgroundColor: "blue", width: "300px", height: "300px", margin: "20px", flexShrink: "0" }}></div>
                <div style={{ backgroundColor: "blue", width: "300px", height: "300px", margin: "20px", flexShrink: "0" }}></div>
                <div style={{ backgroundColor: "blue", width: "300px", height: "300px", margin: "20px", flexShrink: "0" }}></div>
                <div style={{ backgroundColor: "blue", width: "300px", height: "300px", margin: "20px", flexShrink: "0" }}></div>
                <div style={{ backgroundColor: "blue", width: "300px", height: "300px", margin: "20px", flexShrink: "0" }}></div>
            </div>
        </React.Fragment>
    );
};

export default Todo;
