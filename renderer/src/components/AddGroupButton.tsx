import React, { useContext, useState } from "react";
import {IconButton,Dialog,DialogContent,TextField, DialogActions,Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {SettingsContext} from "./SettingsContext/SettingsContext";



export const AddGroupButton = () => {
    const settingsContextValue = useContext(SettingsContext);
    const handleAddGroupButtonClick = () => {
        setIsDialogOpen(true);
    }
    const [isDialogOpen,setIsDialogOpen] = useState<boolean>(false);
    const [addGroupName,setAddGroupName] = useState<string>("");
    const handleDialogClose = () => {
        setIsDialogOpen(false);
        setAddGroupName("");
    }
    const handleAddGroupNameChange: React.ChangeEventHandler<HTMLInputElement> = (_event) => {
        setAddGroupName(_event.target.value);
    }
    const handleAddButtonClick = () => {
        if(addGroupName === "")return;
        const newTaskGroups = [...settingsContextValue.Todo];
        newTaskGroups.push({ title: addGroupName, data: [] })
        settingsContextValue.setTodoSettings(newTaskGroups);
        setIsDialogOpen(false);
        setAddGroupName("");
    }
    return(
        <React.Fragment>
            <IconButton style={{height: "50px", width: "50px"}} onClick={handleAddGroupButtonClick}>
                <AddIcon/>
            </IconButton>
            <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                <DialogContent>
                    <TextField id={"addGroupName"} label={"新しいグループ名"} value={addGroupName} required onChange={handleAddGroupNameChange}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAddButtonClick}>追加</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}