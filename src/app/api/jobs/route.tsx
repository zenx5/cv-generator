import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    const data = request.json()
    const newJob = await prisma.product.create({
        data
    })
    return NextResponse.json(newJob)
}

export async function GET(request: Request) {
    return new Response('Hello, Next.js!')
}
