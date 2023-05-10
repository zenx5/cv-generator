"use client";

import MuiProvider from "@/app/tools/MuiProvider";
import lightTheme from "@/app/styles/theme/lightTheme";
import { useEffect, useState } from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

export default function CreateEntityPage ({ params }:{ params:any }) {
    const { entity } = params
    const [fields, setFields ] = useState([])

    useEffect(()=>{
        fetch(`/api/entities/${entity}`)
        .then( response => response.json() )
        .then( ({ fields:fieldsEntity, error }) => {
            if( !error ) {
                setFields( prev => fieldsEntity)
            }
        })
    },[entity])

    return <MuiProvider theme={lightTheme}>
        <Box>
            <List>
                { fields.map( field => <ListItem key={field}>
                    <ListItemText primary={field} />
                </ListItem>)}
            </List>
        </Box>
    </MuiProvider>
}