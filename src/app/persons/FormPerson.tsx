"use client";

import { useState, useEffect } from 'react';

import { Grid, TextField} from '@mui/material'

export default function FormPerson(){
    const [name, setname] = useState('')
    const [profetion, setprofetion] = useState('')
    const [summary, setsummary] = useState('')
    const [city, setcity] = useState('')
    const [country, setcountry] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')

    const handlerChange = (setter:any) => (event:any) => {
        setter( (prev:string) => event?.target.value )
    }


    return <Grid container>
        <Grid item xs={8}>
            <Grid container>
                <Grid item xs={6} sx={{ p:1 }}>
                    <TextField sx={{ width:'100%' }} label='Nombre' InputLabelProps={{shrink:true}} value={name} onChange={handlerChange(setname)}/>
                </Grid>
                <Grid item xs={6} sx={{ p:1 }}>
                    <TextField sx={{ width:'100%' }} label='Profesión' InputLabelProps={{shrink:true}} value={profetion} onChange={handlerChange(setprofetion)}/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6} sx={{ p:1 }}>
                    <TextField sx={{ width:'100%' }} label='Telefono' InputLabelProps={{shrink:true}} value={phone} onChange={handlerChange(setphone)}/>
                </Grid>
                <Grid item xs={6} sx={{ p:1 }}>
                    <TextField sx={{ width:'100%' }} label='Email' InputLabelProps={{shrink:true}} value={email} onChange={handlerChange(setemail)}/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6} sx={{ p:1 }}>
                    <TextField sx={{ width:'100%' }} label='Pais' InputLabelProps={{shrink:true}} value={country} onChange={handlerChange(setcountry)} />
                </Grid>
                <Grid item xs={6} sx={{ p:1 }}>
                    <TextField sx={{ width:'100%' }} label='Ciudad' InputLabelProps={{shrink:true}} value={city} onChange={handlerChange(setcity)} />
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={4} sx={{ p:1 }}>
            <TextField sx={{ width:'100%' }} label='Sobre mi' InputLabelProps={{shrink:true}} value={summary} onChange={handlerChange(setsummary)} multiline rows={7}/>
        </Grid>
    </Grid>
}