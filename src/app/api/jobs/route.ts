import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    const data = await request.json()
    const newJob = await prisma.job.create({
        data
    })
    return NextResponse.json(newJob)
}

export async function GET(request: Request) {
    const jobs = await prisma.job.findMany({
        include:{
            person:true
        }
    })
    return NextResponse.json(jobs)
}
