import { Typography,Card,CardContent} from "@mui/material";
import React,{ ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const SingleTask = (props: Props) => {
    const handleSingleTaskClick = (_event:React.MouseEvent) => {
        console.log(_event.currentTarget.id);
    }
    return(
        <Card id={`task-${props.children}`} sx={{ width: "auto", height: "40px", margin: "5px",borderRadius: "5px",padding: "0"}}  color={"primary"} onClick={handleSingleTaskClick}>
            <CardContent sx={{padding: "0",height: "100%"}}>
                <Typography variant={"h5"} component={"h4"} style={{height: "100%",margin: "3px auto auto 10px", alignItems: "center"}}>{props.children}</Typography>
            </CardContent>
        </Card>
    )
}