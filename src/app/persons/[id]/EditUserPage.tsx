"use client";

import { Box, Grid, TextField, Typography, Button, Stack, MenuItem, ListItemText, Card, ListItem, List } from "@mui/material";
import MuiProvider from "@/app/tools/MuiProvider";
import { useEffect, useState } from "react";
import lightTheme from "@/app/styles/theme/lightTheme";
import { useRouter } from "next/navigation";
import { Add } from "@mui/icons-material";
import ListEntity from "./ListEntity";

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
            document.location.reload()
        } catch(error) {
            console.log(error)
        }

    }

    const handlerAdd = (nameEntity:string) => () => {
        router.push(`/persons/${person.id}/${nameEntity}/create`)
    }

    const handlerEdit = (nameEntity:string, id:number) => () => {
        router.push(`/persons/${person.id}/${nameEntity}/${id}`)
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
                <Grid item xs={12/5} sx={{ p:1 }}>
                    <ListEntity entities={person?.jobs} onClick={handlerAdd('job')} primaryField='position' secondaryField='goals'/>
                </Grid>
                <Grid item xs={12/5} sx={{ p:1 }}>
                    <ListEntity entities={person?.skills} onClick={handlerAdd('skill')} primaryField='name' secondaryField='rate'/>
                </Grid>
                <Grid item xs={12/5} sx={{ p:1 }}>
                    <ListEntity entities={person?.links} onClick={handlerAdd('link')} primaryField='name' secondaryField='href'/>
                </Grid>
                <Grid item xs={12/5} sx={{ p:1 }}>
                    <ListEntity entities={person?.languages} onClick={handlerAdd('language')} primaryField='name' secondaryField='level'/>
                </Grid>
                <Grid item xs={12/5} sx={{ p:1 }}>
                    <ListEntity entities={person?.hobbies} onClick={handlerAdd('hobbie')} primaryField='description'/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6} sx={{ p:1, display:'flex', justifyContent:'center' }}>
                    <Button variant="outlined" onClick={handlerSave}>Guardar</Button>
                </Grid>
                <Grid item xs={6} sx={{ p:1, display:'flex', justifyContent:'center' }}>
                    <Button variant="contained" onClick={handlerSave}>Generar</Button>
                </Grid>
            </Grid>
        </Box>
    </MuiProvider>
}