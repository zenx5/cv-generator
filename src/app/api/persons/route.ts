import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const persons = await prisma.person.findMany({
        include:{
            jobs: true,
            skills: true,
            links: true,
            languages: true,
            hobbies: true
        }
    })
    return NextResponse.json(persons)
}

export async function POST(request: NextRequest) {
    const data = await request.json()
    const newPerson = await prisma.person.create({
        data
    })
    return NextResponse.json(newPerson)
}
