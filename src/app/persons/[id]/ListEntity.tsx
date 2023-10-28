"use client";
import { Stack, Button, List, ListItem, ListItemText } from '@mui/material'
import { Add } from '@mui/icons-material'

export default function ListEntity (props:any) {

    const { entities, primaryField, secondaryField, onClick } = props

    return <Stack spacing={1}>
        <Button variant="outlined" onClick={onClick} sx={{ width:'100%' }} startIcon={<Add />} >Agregar Link</Button>
        { entities?.length>0 && <List sx={{ border:'1px solid #c0c0c0', borderRadius:2 }}>
            { entities?.map( (entity:any) => <ListItem key={entity.id}>
                <ListItemText primary={entity[primaryField]} secondary={entity[secondaryField]} />
            </ListItem>) }
        </List> }
    </Stack>
}