"use client";

import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import MuiProvider from "@/app/tools/MuiProvider";
import { useState } from "react";
import lightTheme from "@/app/styles/theme/lightTheme";
import { useRouter } from "next/navigation";

export default function CreateUserPage(){
    const [name, setname] = useState('')
    const [profetion, setprofetion] = useState('')
    const [summary, setsummary] = useState('')
    const [city, setcity] = useState('')
    const [country, setcountry] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')

    const router = useRouter()

    const handlerChange = (setter:any) => (event:any) => {
        setter( (prev:string) => event?.target?.value )
    }

    const handlerSave = async () => {
        try{
            const response = await fetch('/api/persons',{
                method:'post',
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
            const { id } = await response.json()
            router.push(`/persons/${id}`)
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
                <Grid item xs={12} sx={{ p:1 }}>
                    <Button variant="contained" onClick={handlerSave}>Guardar</Button>
                </Grid>
            </Grid>
        </Box>
    </MuiProvider>
}