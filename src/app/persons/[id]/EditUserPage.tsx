"use client";

import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import MuiProvider from "@/app/tools/MuiProvider";
import { useEffect, useState } from "react";
import lightTheme from "@/app/styles/theme/lightTheme";
import { useRouter } from "next/navigation";
import { Add } from "@mui/icons-material";

export default function EditUserPage({ person }:{ person:any }){
    const [name, setname] = useState('')
    const [profetion, setprofetion] = useState('')
    const [summary, setsummary] = useState('')
    const [city, setcity] = useState('')
    const [country, setcountry] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')

    useEffect(()=>{
        if( name == '' ){
            setname( prev => person.name )
            setprofetion( prev => person.profetion )
            setsummary( prev => person.summary )
            setcity( prev => person.city )
            setcountry( prev => person.country )
            setphone( prev => person.phone )
            setemail( prev => person.email )
        }
    },[person])

    const router = useRouter()

    const handlerChange = (setter:any) => (event:any) => {
        setter( (prev:string) => event?.target?.value )
    }

    const handlerSave = async () => {
        try{
            const response = await fetch(`/api/persons/${person.id}`,{
                method:'put',
                body:JSON.stringify({
                    name,
                    profetion,
                    summary,
                    city,
                    country,
                    phone,
                    email
                })
            })
            const result = await response.json()
            console.log( result )
            document.location.reload()
        } catch(error) {
            console.log(error)
        }

    }

    return <MuiProvider theme={lightTheme}>
        <Box>
            <Typography variant="h3">Nuevo Usuario</Typography>
            <Grid container>
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
            <Grid container>
                <Grid item xs={12/5} sx={{ p:1 }}><Button variant="outlined" sx={{ width:'100%' }} startIcon={<Add />} >Agregar Job</Button></Grid>
                <Grid item xs={12/5} sx={{ p:1 }}><Button variant="outlined" sx={{ width:'100%' }} startIcon={<Add />} >Agregar Skill</Button></Grid>
                <Grid item xs={12/5} sx={{ p:1 }}><Button variant="outlined" sx={{ width:'100%' }} startIcon={<Add />} >Agregar Link</Button></Grid>
                <Grid item xs={12/5} sx={{ p:1 }}><Button variant="outlined" sx={{ width:'100%' }} startIcon={<Add />} >Agregar Language</Button></Grid>
                <Grid item xs={12/5} sx={{ p:1 }}><Button variant="outlined" sx={{ width:'100%' }} startIcon={<Add />} >Agregar Hobbie</Button></Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sx={{ p:1 }}>
                    <Button variant="contained" onClick={handlerSave}>Guardar</Button>
                </Grid>
            </Grid>
        </Box>
    </MuiProvider>
}