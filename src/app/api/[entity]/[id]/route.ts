import { NextRequest, NextResponse } from "next/server"
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient()

function isEntity( entity:string ) {
    const modelsName = Object.keys( Prisma.ModelName )
    return modelsName.includes(entity.slice(-1))
}

export async function GET(request: Request, { params }:{ params:any }) {
    const { entity:entityName, id } = params
    if( isEntity(entityName) ){
        const entity = await prisma.[entityName.slice(-1)].findUnique({
            where:{
                id: parseInt(id)
            }
        })
        return NextResponse.json( entity )
    }
    return NextResponse.json( [] )
}

export async function PUT(request: NextRequest, { params }:{ params:any }) {
    const { entity:entityName, id } = params

    if( isEntity(entityName) ) {
        const data = await request.json()
        const entity = await prisma.[entityName.slice(-1)].update({
            data:data,
            where:{
                id:parseInt(id)
            }
        })
        return NextResponse.json(entity)
    }
    return NextResponse.json([])
}

export async function DELETE(request: NextRequest, { params }:{ params:any }) {
    const { entity:entityName, id } = params

    if( isEntity(entityName) ){
        const response = await prisma.[entityName.slice(-1)].delete({
            where:{
                id:parseInt(id)
            }
        })
        return NextResponse.json(response)
    }
    return NextResponse.json([])
}