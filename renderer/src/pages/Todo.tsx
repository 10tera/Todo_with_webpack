import { Button ,TextField} from "@mui/material";
import React, {useContext,useEffect, useState} from "react";
import {SettingsContext} from "../components/SettingsContext/SettingsContext";
import { TopTitle } from "../components/TopTitle";
import { SingleTask } from "../components/SingleTask";
import {AddGroupButton} from "../components/AddGroupButton";
import {GroupTitle} from "../components/GroupTitle";
import {Settings,TaskGroup,Task} from "../../../main/src/js/types/Settings";

const Todo: React.FC = () => {
    const settingsContextValue = useContext(SettingsContext);
    
    const [taskGroups, setTaskGroups] = useState<TaskGroup[]>([]);
    useEffect(() => {
        console.log(settingsContextValue)
    },[])

    const handleAddGroupButtonClick = () => {
        console.log(settingsContextValue);
        const newTaskGroups = [...settingsContextValue.Todo];
        newTaskGroups.push({title: "test", data:[]})
        settingsContextValue.setTodoSettings(newTaskGroups);
    }

    return (
        <React.Fragment>
            <div style={{height: "100%"}}>
                <TopTitle></TopTitle>
                <div style={{ height: "calc(100% - 80px)",display: "flex",  width: "100%", overflowX: "scroll" }}>
                    {
                        settingsContextValue.Todo.map((taskGroup, index_taskGroup) => {
                            return (
                                <div id={`taskGroup-${index_taskGroup}`} key={`taskGroup-${index_taskGroup}`} style={{backgroundColor: "blue", width: "300px",height: "max-content", margin: "20px"}}>
                                    <GroupTitle groupIndex={index_taskGroup} id={`taskGroup-${index_taskGroup}-taskTitle`}>{taskGroup.title}</GroupTitle>
                                    {
                                        taskGroup.data.map((task, index_task) => {
                                            return (
                                                <SingleTask key={`taskGroup-${index_taskGroup}-task-${index_task}`} id={`taskGroup-${index_taskGroup}-task-${index_task}`}>{task.title}</SingleTask>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    <div style={{ backgroundColor: "blue", width: "300px", height: "max-content", margin: "20px"}}>
                        <GroupTitle groupIndex={10} id={`taskGroup-${4}-taskTitle`}>title</GroupTitle>
                        <SingleTask id={"test1"}>test1</SingleTask>
                        <SingleTask id={"test2"}>test2</SingleTask>
                        <SingleTask id={"test3"}>test3</SingleTask>
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
                    <div style={{ backgroundColor: "blue", width: "300px", height: "max-content", margin: "20px"}}>
                        <div style={{ backgroundColor: "yellow", width: "auto", height: "40px", margin: "5px" }}></div>
                    </div>
                    <AddGroupButton></AddGroupButton>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Todo;
