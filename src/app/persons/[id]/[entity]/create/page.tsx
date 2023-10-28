"use client";

import MuiProvider from "@/app/tools/MuiProvider";
import lightTheme from "@/app/styles/theme/lightTheme";
import { useEffect, useState } from "react";
import { Button, Stack, Switch, TextField } from "@mui/material";

import OptionsEntity from "./OptionsEntity";

export default function CreateEntityPage ({ params }:{ params:any }) {
    const { entity } = params
    const [fields, setFields ] = useState([])
    const [data, setData] = useState({})

    useEffect(()=>{
        fetch(`/api/entities/${entity}`)
        .then( response => response.json() )
        .then( ({ fields:fieldsEntity, error }) => {
            if( !error ) {
                setFields( prev => fieldsEntity.filter( (field:string) => !['id'].includes(field) ) )
            }
        })
    },[entity])

    const handlerChange = (field:string) => (event:any) => {
        setData( prevData => ({
            ...prevData,
            [field]: event?.target?.value
        }))
    }

    const handlerSave = async () => {
        await fetch(`/api/${entity}s`, {
            method:'post',
            body: JSON.stringify( data )
        })
    }

    const handlerBoolChange = (field:string) => (event:any) => {
        const boolValue = event.target.value==='on'
        handlerChange(field)({
            ...event,
            target:{
                ...event.target,
                value: boolValue
            }
        })
    }

    const renderInput = (field:string) => {
        if( /^show/.exec(field) ) return <Switch key={field} checked={data?.[field]} onChange={handlerBoolChange(field)} />

        if( /_id$/.exec(field) ) {
            const entity = field.split('_')[0]+'s'
            return <OptionsEntity key={field} nameEntity={entity} currentValue={data?.[field]} onChange={handlerChange(field)}  />
        }
        return <TextField key={field} placeholder={field} value={data?.[field]} onChange={handlerChange(field)} />
    }

    return <MuiProvider theme={lightTheme}>
        <Stack p={5} spacing={2}>
            { fields.map( field => renderInput(field))}
            <Button variant='contained' onClick={handlerSave}>Guardar</Button>
        </Stack>
    </MuiProvider>
}