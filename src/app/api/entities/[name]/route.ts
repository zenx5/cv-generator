import { NextRequest, NextResponse } from "next/server"
import { Prisma } from '@prisma/client';


export async function GET(request: Request, { params }:{ params:any }) {
    const { name } = params
    const nameEntity = name.slice(0,1).toUpperCase() + name.slice(1)
    const ScalarFieldEnum = nameEntity  + "ScalarFieldEnum"
    const modelsName = Object.keys( Prisma.ModelName )
    if( modelsName.includes(nameEntity) ) {
        const response = Prisma[ScalarFieldEnum] || {};
        return NextResponse.json({
            name: nameEntity,
            fields: Object.keys(response),
            error: false
        })

    }
    return NextResponse.json({
        name: nameEntity,
        fields: [],
        error: true
    })
}