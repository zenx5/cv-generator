import { NextRequest, NextResponse } from "next/server"
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

function isEntity( entity:string ) {
    const modelsName = Object.keys( Prisma.ModelName )
    return modelsName.includes( entity[0].toUpperCase() + entity.slice(1,-1) )
}


export async function POST(request: NextRequest, { params }:{ params:any }) {
    const { entity } = params;

    if( isEntity(entity) ) {
        const data = await request.json()
        const newEntity = await prisma?.[entity.slice(0,-1)].create({
            data
        })
        return NextResponse.json(newEntity)
    }
    return NextResponse.json([])
}

export async function GET(request: Request, { params }:{ params:any }) {
    const { entity } = params;
    if( isEntity(entity) ){
        const entities = await prisma?.[entity.slice(0,-1)].findMany()
        return NextResponse.json(entities)
    }
    return NextResponse.json([])
}
