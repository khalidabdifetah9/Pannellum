import { PrismaClient } from "../app/generated/prisma/client";


const prismaClientSinglton = ()=>{
    return new PrismaClient()
}

const globalforPrisma = globalThis as unknown as {prisma:PrismaClient | undefined}

const prisma = globalforPrisma.prisma ?? prismaClientSinglton();

export default prisma