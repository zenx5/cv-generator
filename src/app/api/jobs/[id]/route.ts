import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function GET(request: Request, { params }:{ params:any }) {
    const id = parseInt( params.id )
    const job = await prisma.job.findUnique({
        where:{
            id
        },
        include:{
            person: true
        }
    })
    return NextResponse.json( job )
}

export async function PUT(request: NextRequest, { params }:{ params:any }) {
    const id = parseInt( params.id )
    const data = await request.json()
    const job = await prisma.job.update({
        data:data,
        where:{
            id
        }
    })
    return NextResponse.json(job)
}

export async function DELETE(request: NextRequest, { params }:{ params:any }) {
    const id = parseInt( params.id )
    const response = await prisma.job.delete({
        where:{
            id
        }
    })
    return NextResponse.json(response)
}