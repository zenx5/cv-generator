"use client";
import MuiProvider from "../tools/MuiProvider";
import lightTheme from "../styles/theme/lightTheme";
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";


export default function FormJob() {
    const [position, setPosition] = useState('')
    const [enterprise, setEnterprise] = useState('')
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [place, setPlace] = useState('')
    const [goals, setGoals] = useState('')

    const handlerChange = (setter:any) => (event:any) => {
        setter( (prev:any) => event?.target?.value )
    }

    const handlerSave = async () => {
        const response = await fetch('/api/jobs',{
            method:'post',
            body: JSON.stringify({
                    position,
                    enterprise,
                    fromDate: fromDate.slice(0,-3).concat('-01T00:00:00.000Z'),
                    toDate: toDate.slice(0,-3).concat('-30T00:00:00.000Z'),
                    place,
                    goals
                })
        })
        console.log(response)

        setPosition('')
        setEnterprise('')
        setFromDate('')
        setToDate('')
        setPlace('')
        setGoals('')
    }

    return <MuiProvider theme={lightTheme}>
        <Card variant="outlined">
            <CardHeader title={<Typography sx={{ pl:1 }}>Nuevo Trabajo</Typography>} />
            <CardContent>
                <Grid container>
                    <Grid item xs={6} sx={{ p:1 }}>
                        <TextField variant="outlined" sx={{ width:'100%' }} label='Puesto' value={position} onChange={handlerChange(setPosition)} />
                    </Grid>
                    <Grid item xs={6} sx={{ p:1 }}>
                        <TextField variant="outlined" sx={{ width:'100%' }} label='Empresa' value={enterprise} onChange={handlerChange(setEnterprise)} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={3} sx={{ p:1 }}>
                        <TextField variant="outlined" sx={{ width:'100%' }} type='date' label='Desde' value={fromDate} onChange={handlerChange(setFromDate)} />
                    </Grid>
                    <Grid item xs={3} sx={{ p:1 }}>
                        <TextField variant="outlined" sx={{ width:'100%' }} type='date' label='Hasta' value={toDate} onChange={handlerChange(setToDate)}/>
                    </Grid>
                    <Grid item xs={6} sx={{ p:1 }}>
                        <TextField variant="outlined" sx={{ width:'100%' }} label='Lugar'  value={place} onChange={handlerChange(setPlace)}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sx={{ p:1 }}>
                        <TextField variant="outlined" sx={{ width:'100%' }} label='Logros' multiline rows={5} value={goals} onChange={handlerChange(setGoals)}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sx={{ p:1 }}>
                        <Button variant="contained" onClick={handlerSave}>Guardar</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </MuiProvider>
}