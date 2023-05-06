import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function GET(request: Request, { params }:{ params:any }) {
    const id = parseInt( params.id )
    const person = await prisma.person.findUnique({
        where:{
            id
        },
        include:{
            jobs: true,
            skills: true,
            links: true,
            languages: true,
            hobbies: true
        }
    })
    return NextResponse.json( person )
}

export async function PUT(request: NextRequest, { params }:{ params:any }) {
    const id = parseInt( params.id )
    const data = await request.json()
    const person = await prisma.person.update({
        data:data,
        where:{
            id
        }
    })
    return NextResponse.json(person)
}

export async function DELETE(request: NextRequest, { params }:{ params:any }) {
    const id = parseInt( params.id )
    const response = await prisma.person.delete({
        where:{
            id
        }
    })
    return NextResponse.json(response)
}