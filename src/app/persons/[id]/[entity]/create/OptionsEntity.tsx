"use client"

import { Select, MenuItem } from "@mui/material"
import { useEffect, useState } from "react"

export default function OptionsEntity ({ currentValue, onChange, nameEntity }:{ currentValue:string, onChange:any, nameEntity:string }) {
    const [items, setItems] = useState([])

    useEffect(()=>{
        if( items.length === 0 ) {
            console.log(`/api/${nameEntity}`)
            fetch(`/api/${nameEntity}`)
                .then( response => response.json() )
                .then( result => setItems( (prev:Array<any>) => result ) )
        }
    },[nameEntity, items])

    return <Select value={currentValue} onChange={onChange} placeholder={nameEntity}>
        {items.map( item => <MenuItem key={item?.id} value={item?.id}>{item?.id}</MenuItem>)}
    </Select>
}