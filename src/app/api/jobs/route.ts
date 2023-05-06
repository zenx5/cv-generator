import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    const data = await request.json()
    const newJob = await prisma.jobs.create({
        data
    })
    return NextResponse.json(newJob)
}

export async function GET(request: Request) {
    const jobs = await prisma.jobs.findMany()
    return NextResponse.json(jobs)
}
