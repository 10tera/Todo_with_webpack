import { Typography, Card, CardContent, CardActions, IconButton, Dialog, DialogContent, TextField, DialogActions, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { ReactNode,useState,useContext } from "react";
import { SettingsContext } from "./SettingsContext/SettingsContext";

type Props = {
    children: ReactNode;
    id: string;
    groupIndex: number;
}

export const GroupTitle = (props: Props) => {
    const settingsContextValue = useContext(SettingsContext);
    const [isDialogOpen,setIsDialogOpen] = useState<boolean>(false);
    const handleDialogClose = () => {
        setIsDialogOpen(false);
        setAddTaskName("");
    }
    const handleAddButtonClick = () => {
        setIsDialogOpen(true);
    }
    const [addTaskName,setAddTaskName] = useState<string>("");
    const handleAddTaskNameChange: React.ChangeEventHandler<HTMLInputElement> = (_event) => {
        setAddTaskName(_event.target.value);
    }
    const handleAddTaskButtonClick = () => {
        const newSettingsContext = [...settingsContextValue.Todo];
    }
    return (
        <div style={{width: "auto",height: "40px",margin: "5px",backgroundColor: "green"}}>
            <Card id={props.id} sx={{ borderRadius: "5px", padding: "0",height: "40px",width: "auto",display: "flex" }} color={"primary"}>
                <CardContent sx={{ padding: "0", height: "100%"}}>
                    <Typography variant={"h5"} component={"h4"} style={{ height: "100%", margin: "3px auto auto 10px", alignItems: "center" }}>{props.children}</Typography>
                </CardContent>
                <CardActions style={{ padding: "0", height: "100%", margin: "auto 0px auto auto"}}>
                    <IconButton>
                        <MoreHorizIcon/>
                    </IconButton>
                    <IconButton onClick={handleAddButtonClick}>
                        <AddIcon/>
                    </IconButton>
                </CardActions>
            </Card>
            <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                <DialogContent>
                    <TextField label={"新しいタスク名"} value={addTaskName} onChange={handleAddTaskNameChange}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAddTaskButtonClick}>追加</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}